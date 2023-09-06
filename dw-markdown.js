import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';

export class DwMarkdown extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`Dw markdown`;
  }
}
customElements.define('dw-markdown', DwMarkdown);
