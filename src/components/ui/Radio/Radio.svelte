<script>
	import { capitalize } from '@src/utils/string';
	import { randomID } from '@src/utils';

	/** @type {Array} */
	export let choices = [];

	/** @type {undefined|string} */
	export let name = undefined;

	/** @type {boolean} */
	export let inline = false;

	/** @type {undefined|FormRules} */
	export let rules = undefined;

	/** @type {undefined|FormRulesMessages} */
	export let messages = undefined;

	const id = `radio-${randomID(8)}`;
</script>

<div>
	<strong>{capitalize(name)} {rules?.required && ' *'}</strong>

	{#if choices.length}
		<ul class:inline>
			{#each choices as choice, i}
				<li>
					<input id={id + `-${i}`} {name} type="radio" {...$$restProps} value={choice} />
					<label for={id + `-${i}`}>{capitalize(choice)}</label>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	@import './Radio.scss';
</style>
