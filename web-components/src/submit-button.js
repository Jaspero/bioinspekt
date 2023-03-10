export default (() => {
	const SELECTOR = 'jpe-submit-button';

	if (!!customElements.get(SELECTOR)) {
		return;
	}

	class el extends HTMLElement {
		constructor() {
			super()
			this.attachShadow({ mode: 'open' })
			this.shadowRoot.innerHTML = `<style>
				:host {display:block;}
				.success {
					padding: 10px;
					background-color: #79f547;
					color: #fff;
					margin: 10px 0;
				}
			</style>`;
			
			this.output = document.createElement('button');
			this.output.setAttribute('type', 'submit');
			this.output.addEventListener('click', () => {
				const form = this.closest('form');

				if (!form.reportValidity()) {
					return;
				}

				this.output.setAttribute('disabled', 'true');
	
				const data = new FormData(form);
				const typeMap = {
					string: 'stringValue',
					number: 'doubleValue'
				};
				const fields = {
					createdOn: {
						integerValue: Date.now().toString()
					}
				};
	
				data.forEach((value, key) => {
					fields[key] = {
						[typeMap[typeof value]]: value
					};
				});
	
				fetch(
					`https://firestore.googleapis.com/v1/projects/jp-bioinspekt/databases/(default)/documents/${this.collection}`,
					{
						method: 'POST',
						body: JSON.stringify({fields})
					}
				)
					.then(() => {
						form.reset();

						if (!this.success) {
							return;
						}
						
						const successEl = document.createElement('p');
						successEl.classList.add('success');
						successEl.innerText = this.success;

						this.shadowRoot.appendChild(successEl);

						setTimeout(() => {
							this.shadowRoot.removeChild(successEl);
						}, 50000);
					})
					.finally(() => 
						this.output.removeAttribute('disabled')
					);
			});
			
			this.shadowRoot.appendChild(this.output);
		}

		static get observedAttributes() {
			return ['label', 'success', 'collection'];
		}

		connectedCallback() {
			this.output.innerText = this.getAttribute('label');
			this.success = this.getAttribute('success');
			this.collection = this.getAttribute('collection') || 'inquiries'
		}

		attributeChangedCallback() {
			this.connectedCallback();
		}
	}

	customElements.define(SELECTOR, el);
})()