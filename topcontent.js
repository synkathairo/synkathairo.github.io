class TopContent extends HTMLElement {
	// connectedCallback() {
	// }
	constructor() {
		// Always call super first in constructor
		super();
		// Create a shadow root
		const shadow = this.attachShadow({ mode: 'open' });
		const headDiv = document.createElement('div');
		const heading = document.createElement('h1');
		heading.innerHTML = 'Charles Zhu\'s page';
		// Create spans
		const nav = document.createElement('nav');
		nav.innerHTML = `<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/projects.html">Projects</a></li>
			<li><a href="/about.html">About Me</a></li>
			<li><a href="/glossary.html">Zettlekasten</a></li>
			<li><a href="/guestbook.html">Guestbook</a></li>
		</ul>`;

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');

		style.textContent = `
		h1 {
			font-weight: var(--h1-font-weight);
			font-family: var(--heading-font-family);
		}
		ul {
			font-family: var(--navbar-font-family);
			list-style-type: none;
			margin: 0;
			padding: 5px;
			border: outset;
			border-width: 1.5px;
		}

		li {
			display: inline;
		}

		a {
			color: var(--link-color);
			padding-left: 7px;
			padding-right: 7px;
		}`;

		// Attach the created elements to the shadow dom
		shadow.appendChild(style);
		shadow.appendChild(headDiv);
		headDiv.appendChild(heading);
		headDiv.appendChild(nav);
		// headDiv.appendChild(document.createElement('hr'));
	}
}

// window.customElements.define("top-content",TopContent);
customElements.define("top-content", TopContent);
