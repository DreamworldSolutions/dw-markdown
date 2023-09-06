import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

export class DwMarkdown extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      /**
       * string that represents the markdown content to be rendered.
       */
      value: { type: String },

      /**
       * an array of strings that specifies additional HTML tags to allow in the sanitized output.
       */
      includeTags: { type: Array },

      /**
       * an array of strings that specifies additional HTML attributes to allow in the sanitized output.
       */
      includeAttr: { type: Array },
    };
  }

  constructor() {
    super();
    this.includeTags = [];
    this.includeAttr = [];
  }

  render() {
    return html`${unsafeHTML(this._sanitize(this._markedown(this.value)))}`;
  }

  _markedown(value) {
    if (!value) {
      return '';
    }
    const options = { headerIds: false, xhtml: true, breaks: true };
    return marked(value, options);
  }

  _sanitize(html) {
    if (!html) {
      return '';
    }
    return DOMPurify.sanitize(html, {
      ADD_TAGS: this.includeTags,
      ADD_ATTR: this.includeAttr,
      IN_PLACE: true,
    });
  }
}
customElements.define('dw-markdown', DwMarkdown);
