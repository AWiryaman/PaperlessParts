import App from './App.svelte';
import schools from '../public/ma_schools.json'

const app = new App({
	target: document.body,
	props: {
		allSchools: schools
	}
});

export default app;