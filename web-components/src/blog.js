export default (() => {
	const SELECTOR = 'jpe-blog';

	if (!!customElements.get(SELECTOR)) {
		return;
	}

	class el extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.innerHTML = `
				<style>
					:host {
						display: block;
					}
				</style>
			`;
		}

		static get observedAttributes() {
			return ['limit'];
		}

		async connectedCallback() {
			const limit = this.getAttribute('limit') || 10;

			let res = await fetch(
				`https://firestore.googleapis.com/v1/projects/jaspero-jms/databases/(default)/documents:runQuery`,
				{
					method: 'POST',
					body: JSON.stringify({
						structuredQuery: {
							from: [{
								collectionId: 'posts'
							}],
							where: {
								fieldFilter: {
									field: {
                    fieldPath: 'active'
									},
                	op: 'EQUAL',
                	value: {
                    booleanValue: true,
                	}
								}
							}
						}
					})
				}
			);

			res = await res.json();

			console.log(res);
		}

		attributeChangedCallback() {
			this.connectedCallback()
				.catch(console.error);
		}

		createCard(blog) {
			const el = document.createElement('div');
			el.classList.add('post');

			this.shadowRoot.appendChild(el);
		}
	}

	customElements.define(SELECTOR, el);
})()