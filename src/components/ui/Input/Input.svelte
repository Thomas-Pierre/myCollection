<script>
	import { fly, fade } from 'svelte/transition';
	import { randomID } from '@src/utils';
	import { checkInputError } from '@src/utils/form';

	/** @type {"text"|"email"|"search"|"textarea"} */
	export let type = 'text';

	/** @type {string} */
	export let label = '';

	/** @type {undefined|FormRules} */
	export let rules = undefined;

	/** @type {undefined|FormRulesMessages} */
	export let messages = undefined;

	function testInput() {
		tested = true;
		error = checkInputError(input, rules, messages);
		success = !error;
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
