class ClubSearchError extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._style = document.createElement("style");
    this._updateStyle();

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
        }
      `;
  }

  render() {
    this.shadowRoot.innerHTML = "";

    this.shadowRoot.appendChild(this._style);
    const container = document.createElement("div");
    container.innerHTML = `
        <h2 class="placeholder">Error</h2>
        <slot></slot>
      `;
    this.shadowRoot.appendChild(container);
  }
}

customElements.define("club-search-error", ClubSearchError);
