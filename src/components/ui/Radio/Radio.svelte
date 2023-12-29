<script>
	import { fly, fade } from 'svelte/transition';
	import { capitalize } from '@src/utils/string';
	import { randomID } from '@src/utils';
	import { checkInputErrors } from '@src/utils/form';

	/** @type {Array} */
	export let choices = [];

	/** @type {undefined|string} */
	export let name = undefined;

	/** @type {boolean} */
	export let inline = false;

	/** @type {FormRules} */
	export let rules = undefined;

	/** @type {FormRulesMessages} */
	export let messages = undefined;

	const id = `radio-${randomID(8)}`;
	let error = null;
</script>

<div>
	<strong>{capitalize(name)} {rules?.required && ' *'}</strong>

	{#if choices.length}
		<ul class:inline>
			{#each choices as choice, i}
				<li>
					<input
						id={id + `-${i}`}
						{name}
						type="radio"
						{...$$restProps}
						value={choice}
						use:checkInputErrors={{ rules, messages }}
						on:checked={({ detail }) => (error = detail)}
					/>
					<label for={id + `-${i}`}>{capitalize(choice)}</label>
				</li>
			{/each}
		</ul>
	{/if}
</div>

{#if error}
	<span in:fly={{ y: '-20rem', duration: 200 }} out:fade={{ duration: 200 }}>{error}</span>
{/if}

<style lang="scss">
	@import './Radio.scss';
</style>
