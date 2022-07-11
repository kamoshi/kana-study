import App from './App.svelte';

const target = document.getElementById("root")!;
//const target = root.attachShadow({ mode: 'open' });

const app = new App({ target });

export default app;