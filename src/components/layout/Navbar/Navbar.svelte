<script>
	import { page } from '$app/stores';
	import { translate } from '@src/utils/translate';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import PlusButton from './PlusButton/PlusButton.svelte';

	const menuItems = [
		{ href: '/', route: 'library', icon: 'files' },
		{ href: '/settings', route: 'settings', icon: 'gear' },
		{ href: '/help', route: 'help', icon: 'question-mark' },
		{ href: '/account', route: 'account', icon: 'user' }
	];
</script>

<nav id="navbar">
	{#each menuItems as { href, route, icon }, i}
		<a {href} class:active={$page.route.id === href} title={translate(`common.navbar.${route}`)}>
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
