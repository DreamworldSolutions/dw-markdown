import { LitElement, css, html } from 'lit';
import '../src/dw-markdown';

export class DwMarkdownDemo extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  firstUpdated() {
    const markdownContent = `
    # Welcome to my website!

    This is some **bold** and *italic* text.

    - Item 1
    - Item 2
    - Item 3
    `;

    this.renderRoot.querySelector('dw-markdown').value = markdownContent;
  }

  render() {
    return html`Expample 1: <br />
      <dw-markdown id="markdown1"></dw-markdown>
      Expample 2: <br />
      <dw-markdown
        id="markdown2"
        .value="${'Hello, I just love **bold text**. This text is ***really important***. I love supporting the **[LIT](https://lit.dev)**.'}"
      ></dw-markdown>`;
  }
}

customElements.define('dw-markdown-demo', DwMarkdownDemo);
