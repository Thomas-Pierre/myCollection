<script>
	import { capitalize } from '@src/utils/string';

	/** @type {string|undefined} */
	export let icon = undefined;

	/** @type {boolean} */
	export let circle = false;

	/** @type {string|number|undefined} */
	export let rotate = undefined;

	/** @type {string|boolean} */
	export let spin = false;
</script>

{#if icon}
	{#await import(`./Icons/${capitalize(icon)}.svelte`) then { default: svg }}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 128 128"
			class="svg"
			class:circle
			class:spin
			style="--spin-duration: {typeof spin !== 'boolean' ? spin : 1000}ms"
			style:transform={rotate ? `rotate(${+rotate}deg)` : null}
		>
			<svelte:component this={svg} />
		</svg>
	{/await}
{/if}

<style lang="scss">
	@import './Picto.scss';
</style>
