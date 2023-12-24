<script>
	import { capitalize } from '@src/utils/string';

	/** @type {undefined|Book} */
	export let data = undefined;

	/** @type {"xs"|"s"|"m"|"l"|"xl"|"xxl"} */
	export let size = 'm';

	/** @type {boolean} */
	export let detailled = false;
</script>

<article
	class="size-{size}"
	style="--cover-image: url({data?.medias?.cover});--cover-ratio: {data?.medias?.ratio || '1/1'};"
>
	<div class="cover" />

	{#if detailled}
		<strong>{capitalize(data.author)}</strong>
		<span>{capitalize(data.name)}</span>
	{/if}
</article>

<style lang="scss">
	@import './Book.scss';
</style>
