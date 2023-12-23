<script>
	/** @type {undefined|"full"|"half"|"barely"}*/
	export let open = undefined;

	const coverImage =
		'https://www.heavyblogisheavy.com/content/images/originals/e7/93/5d/e7935dc4ed1381aae8d97caac09ed4ff.jpg';
</script>

<article
	class:open={open === 'full'}
	class:barely-open={open === 'barely'}
	class:half-open={open === 'half'}
	style="--cover-image: url({coverImage})"
>
	<div class="cover" />
	<strong>Ghost</strong>
	<span>Opus Eponymous</span>
</article>

<style lang="scss">
	@import './Vinyl.scss';
</style>
