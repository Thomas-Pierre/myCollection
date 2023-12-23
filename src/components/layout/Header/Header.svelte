<script>
	import { onMount } from 'svelte';
	import Title from '@src/components/ui/Title/Title.svelte';
	import Search from './Search/Search.svelte';
	import { translate } from '@utils/translate';
	import { page } from '$app/stores';

	/** @type {number} */
	let clientHeight;

	/** @type {number} */
	let clientWidth;

	/** @type {Document} */
	let document;

	onMount(() => {
		document = window.document;
	});

	$: document?.documentElement.style.setProperty('--header-height', `${clientHeight}rem`);
	$: document?.documentElement.style.setProperty('--header-width', `${clientWidth}rem`);
</script>

<header bind:clientHeight bind:clientWidth>
	<Title tag="h1" text={translate($page.data.name)} size="xxl" noMargin />
	<Search />
</header>

<style lang="scss">
	@import './Header.scss';
</style>
