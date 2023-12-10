<script>
	import Theme from '@components/layout/Theme/Theme.svelte';
	import Header from '@components/layout/Header/Header.svelte';
	import Navbar from '@components/layout/Navbar/Navbar.svelte';
</script>

<Theme />

<Navbar />
<Header />
<main><slot /></main>
