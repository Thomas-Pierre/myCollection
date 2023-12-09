<script>
	import { onMount } from 'svelte';

	/** @type {number} */
	let clientHeight;
	
	/** @type {number} */
	let clientWidth;

	onMount(() => {
		document.documentElement.style.setProperty('--navbar-height', `${clientHeight}rem`);
		document.documentElement.style.setProperty('--navbar-width', `${clientWidth}rem`);
	});
</script>

<nav bind:clientHeight bind:clientWidth>
	<button class="plus">+</button>
</nav>

<style lang="scss">
	@import './Navbar.scss';
</style>
