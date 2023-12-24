<script>
	import { capitalize } from '@src/utils/string';
	import mock from './mock';

	/** @type {undefined|Vinyl} */
	export let data = mock;

	/** @type {undefined|"full"|"half"|"barely"} */
	export let open = undefined;

	/** @type {"xs"|"s"|"m"|"l"|"xl"|"xxl"} */
	export let size = 'm';

	/** @type {boolean} */
	export let detailled = false;
</script>

<article
	class="size-{size}"
	class:full-open={open === 'full'}
	class:barely-open={open === 'barely'}
	class:half-open={open === 'half'}
	style="--cover-image: url({data?.medias?.cover})"
>
	<div class="cover" />

	{#if detailled}
		<strong>{capitalize(data.author)}</strong>
		<span>{capitalize(data.name)}</span>
	{/if}
</article>

<style lang="scss">
	@import './Vinyl.scss';
</style>
