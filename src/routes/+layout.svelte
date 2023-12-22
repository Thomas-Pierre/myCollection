<script>
	import Theme from '@components/layout/Theme/Theme.svelte';
	import Header from '@components/layout/Header/Header.svelte';
	import Navbar from '@components/layout/Navbar/Navbar.svelte';
	import { translate } from '@src/utils/translate';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page?.data?.title ? translate($page.data.title) + ' | ' : ''} myCollection</title>
</svelte:head>

<Theme />
<Navbar />
<Header />
<main><slot /></main>
