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
		heading.innerHTML = 'synkathairo.github.io';
		// Create spans
		const nav = document.createElement('nav');
		nav.innerHTML = `<ul>
			<li><a href="/index.html">Home</a></li>
			<li><a href="/projects.html">Projects</a></li>
			<li><a href="/about.html">About Me</a></li>
		</ul>`;

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');

		style.textContent = `
		ul {
			list-style-type: none;
			margin: 0;
			padding: 5px;
			border: outset;
			// background-color: DeepSkyBlue;
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
