<script>
	import { fly, fade } from 'svelte/transition';
	import { randomID } from '@src/utils';

	/** @type {"text"|"email"|"search"|"textarea"} */
	export let type = 'text';

	/** @type {string} */
	export let label = '';

	/** @type {undefined|object} */
	export let rules = undefined;

	function testInput() {
		const { required, minLength, maxLength } = rules || {};
		tested = true;

		if (required && input.value.length === 0) error = 'Ce champs est requis';
		else if (minLength && input.value.length < minLength)
			error = `Ce champs est trop court, ${minLength} caractères minimum`;
		else if (maxLength && input.value.length > maxLength)
			error = `Ce champs est trop long, ${maxLength} caractères minimum`;
		else {
			error = null;
			if (tested) success = true;
		}
	}

	let input;
	let tested = false;
	let error = null;
	let success = null;
	const { id = `input-${randomID(8)}` } = $$restProps;
</script>

<div>
	<label for={id}>{label}{rules?.required && ' *'}</label>
	<svelte:element
		this={type === 'textarea' ? 'textarea' : 'input'}
		{id}
		{...$$restProps}
		type={type !== 'textarea' ? type : undefined}
		class:error
		class:success
		bind:this={input}
		on:blur={testInput}
		on:input={tested && testInput}
	/>

	{#if error}
		<span in:fly={{ y: '-20rem', duration: 200 }} out:fade={{ duration: 200 }}>{error}</span>
	{/if}
</div>

<style lang="scss">
	@import './Input.scss';
</style>
