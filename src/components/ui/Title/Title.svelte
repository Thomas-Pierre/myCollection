<script>
	/** @type {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"strong"}*/
	export let tag = 'strong';

	/** @type {string|undefined}*/
	export let text = undefined;

	/** @type {"left"|"center"|"right"}*/
	export let align = 'left';

	/** @type {"xs"|"s"|"m"|"l"|"xl"|"xxl"}*/
	export let size = 'm';

	/** @type {boolean}*/
	export let noMargin = false;
</script>

{#if text}
	<svelte:element
		this={['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ? tag : 'strong'}
		class="title size-{size} align-{align}"
		class:noMargin
	>
		{text}
	</svelte:element>
{/if}

<style lang="scss">
	@import './Title.scss';
</style>
