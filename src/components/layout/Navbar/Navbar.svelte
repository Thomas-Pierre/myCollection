<script>
	import { onMount } from 'svelte';
	import { translate } from '@src/utils/translate';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import PlusButton from './PlusButton/PlusButton.svelte';
	import { page } from '$app/stores';

	/** @type {number} */
	let clientHeight;

	/** @type {number} */
	let clientWidth;

	/**  @type {Document} */
	let document;

	$: document?.documentElement.style.setProperty('--navbar-height', `${clientHeight}rem`);
	$: document?.documentElement.style.setProperty('--navbar-width', `${clientWidth}rem`);

	onMount(() => {
		document = window.document;
	});

	const menuItems = [
		{ href: '/', icon: 'files' },
		{ href: '/settings', icon: 'gear' },
		{ href: '/help', icon: 'question-mark' },
		{ href: '/account', icon: 'user' }
	];
</script>

<nav bind:clientHeight bind:clientWidth>
	{#each menuItems as { href, icon }, i}
		<a
			{href}
			class:current={$page.route.id === href}
			title={translate(`common.navbar.${href.replace('/', '')}`)}
		>
			<Picto {icon} />
		</a>

		{#if i === Math.floor(menuItems.length / 2) - 1}
			<PlusButton />
		{/if}
	{/each}
</nav>

<style lang="scss">
	@import './Navbar.scss';
</style>
