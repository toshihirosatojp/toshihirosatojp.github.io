import App from './App.svelte';

const app = new App({
	//target: document.body,
	target: document.getElementById("mermaid-live-editor"),
	props: {
		name: 'world'
	}
});


window.app = app;

export default app;