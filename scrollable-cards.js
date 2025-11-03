const cardContainerStyleSheet = new CSSStyleSheet();
cardContainerStyleSheet.replaceSync(/*css*/ `
	:host {
		/* display flex, so child element gets 100% of height */
		display: flex;
		overflow: hidden;
	}

	.card-scroller-flex {
		display: flex;
		flex-direction: row;
		width: 100%;
		overflow-x: auto;
		/* allow for 100cqw later */
		container-type: inline-size;
	}

	.card-scroller-flex::after {
		content: "";
		flex: 0 0 100cqw
	}
`);
class ScrollableCardContainer extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [cardContainerStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<div class="card-scroller-flex">
				<slot></slot>
			</div>
		`;
	}
}

customElements.define('sc-container', ScrollableCardContainer);

const blockStyleSheet = new CSSStyleSheet();
blockStyleSheet.replaceSync(/*css*/ `
	:host {
		flex: none;
		position: sticky;
		inset-inline-start: 0;
		top: 0;
	}
`);

const cardStyleSheet = new CSSStyleSheet();
cardStyleSheet.replaceSync(/*css*/ `
	:host {
		background: canvas;
		width: 535px;
		padding: 1em;
		padding-right: 2em;
		box-shadow: -10px 0px 10px -10px rgba(0, 0, 0, 0.5);
	}
`);
class ScrollableCard extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [blockStyleSheet, cardStyleSheet];
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = /*html*/ `
			<slot></slot>
		`;
	}
}

customElements.define('sc-card', ScrollableCard);
