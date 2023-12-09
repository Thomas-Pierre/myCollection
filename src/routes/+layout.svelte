<script>
	import Theme from '@components/layout/Theme/Theme.svelte';
	import Header from '@components/layout/Header/Header.svelte';
	import Footer from '@components/layout/Footer/Footer.svelte';
</script>

<Theme />
<Header />
<main><slot /></main>
<Footer />
