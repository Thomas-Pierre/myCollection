<script>
	import Theme from '@components/layout/Theme/Theme.svelte';
	import Header from '@components/layout/Header/Header.svelte';
	import NavBar from '@components/layout/NavBar/NavBar.svelte';
</script>

<Theme />
<Header />
<main><slot /></main>
<NavBar />