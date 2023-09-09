import { CSSResult, LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

/**
 * This component is designed to render Markdown content as HTML.
 * It utilizes two libraries, DOMPurify and Marked, to sanitize and parse Markdown content, respectively.
 *
 * ## Usage
 *
 * ```
 * <dw-markdown value="# Hello, Markdown!"></dw-markdown>
 * ```
 * - In this example, the value property contains the Markdown content you want to render.
 */
@customElement('dw-markdown')
export class DwMarkdown extends LitElement {
  static override styles: CSSResult = css`
    :host {
      display: block;
    }
  `;

  /**
   * String that represents the markdown content to be rendered.
   */
  @property({ type: String })
  value: string;

  /**
   * An array of strings that specifies additional HTML tags to allow in the sanitized output.
   * By default, this is an empty array.
   */
  @property({ type: Array })
  domPurifyOptions = {};

  /**
   * an array of strings that specifies additional HTML attributes to allow in the sanitized output.
   * By default, this is an empty array.
   */
  @property({ type: Array })
  markedOptions = {};

  override render() {
    return html`${unsafeHTML(this._sanitize(this._markedown(this.value)))}`;
  }

  /**
   * Sanitizes HTML content using DOMPurify to ensure that it is safe for rendering.
   * It takes an HTML string as input and returns the sanitized HTML.
   */
  _sanitize(html: string): string {
    if (!html) return '';
    return DOMPurify.sanitize(html, {
      IN_PLACE: true,
      ...this.domPurifyOptions,
    });
  }

  /**
   * Converts Markdown content to HTML using the Marked library.
   * It takes a Markdown string as input and returns the corresponding HTML.
   */
  _markedown(value: string): string {
    if (!value) return '';
    return marked(value, this.markedOptions);
  }
}
