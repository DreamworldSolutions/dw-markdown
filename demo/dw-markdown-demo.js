import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';
import '../dw-markdown.js';

export class DwMarkdownDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`<dw-markdown></dw-markdown>`;
  }
}
customElements.define('dw-markdown-demo', DwMarkdownDemo);
