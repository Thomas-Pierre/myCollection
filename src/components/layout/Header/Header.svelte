<script>
	import { onMount } from 'svelte';
	import Title from '@src/components/ui/Title/Title.svelte';
	import Search from './Search/Search.svelte';
	import { translate } from '@utils/translate';
	import { page } from '$app/stores';
</script>

<header id="header">
	<Title tag="h1" text={translate($page.data.name)} size="xxl" noMargin />
	<Search />
</header>

<style lang="scss">
	@import './Header.scss';
</style>
