<script>
	import { fly, fade } from 'svelte/transition';
	import { randomID } from '@src/utils';
	import { checkInputErrors } from '@src/utils/form';

	/** @type {"text"|"email"|"search"|"textarea"} */
	export let type = 'text';

	/** @type {string} */
	export let label = '';

	/** @type {undefined|FormRules} */
	export let rules = undefined;

	/** @type {undefined|FormRulesMessages} */
	export let messages = undefined;

	let error = null;
	const { id = `input-${randomID(8)}` } = $$restProps;
</script>

<div>
	<label for={id}>{label}{rules?.required && ' *'}</label>
	<svelte:element
		this={type === 'textarea' ? 'textarea' : 'input'}
		{id}
		{...$$restProps}
		type={type !== 'textarea' ? type : undefined}
		use:checkInputErrors={{ rules, messages }}
		on:checked={({ detail }) => (error = detail)}
	/>

	{#if error}
		<span in:fly={{ y: '-20rem', duration: 200 }} out:fade={{ duration: 200 }}>{error}</span>
	{/if}
</div>

<style lang="scss">
	@import './Input.scss';
</style>
