<script>
	import { onMount } from 'svelte';
	import { translate } from '@src/utils/translate';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import PlusButton from './PlusButton/PlusButton.svelte';

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
</script>

<nav bind:clientHeight bind:clientWidth>
	<button class="current" aria-label={translate('common.navbar.collection')}>
		<Picto icon="files" />
	</button>

	<button aria-label={translate('common.navbar.settings')}>
		<Picto icon="gear" />
	</button>

	<span><PlusButton /></span>

	<button aria-label={translate('common.navbar.menu')}>
		<Picto icon="burger-menu" />
	</button>

	<button aria-label={translate('common.navbar.user')}>
		<Picto icon="user" />
	</button>
</nav>

<style lang="scss">
	@import './Navbar.scss';
</style>
