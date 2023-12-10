<script>
	import Picto from '../Picto/Picto.svelte';

	/** @type {string|undefined} */
	export let href = undefined;

	/** @type {string|undefined} */
	export let label = undefined;

	/** @type {"primary"|"secondary"|"dark"|"light"} */
	export let variant = 'primary';

	/** @type {"s"|"m"|"l"} */
	export let size = 'm';

	/** @type {string|undefined} */
	export let iconRight = undefined;

	/** @type {string|undefined} */
	export let iconLeft = undefined;

	/** @type {string|undefined} */
	export let iconOnly = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	{...$$restProps}
	rel={href && $$restProps.target === '_blank' ? 'noreferer noopener' : null}
	class:variant-primary={variant === 'primary'}
	class:variant-secondary={variant === 'secondary'}
	class:variant-light={variant === 'light'}
	class:variant-dark={variant === 'dark'}
	class:size-s={size === 's'}
	class:size-m={size === 'm'}
	class:size-l={size === 'l'}
	class:icon-left={!iconOnly && iconLeft}
	class:icon-right={!iconOnly && iconRight}
	class:icon-only={iconOnly}
	aria-label={iconOnly ? label : null}
	on:click
	on:focus
	on:blur
	on:mouseenter
	on:mouseleave
>
	{#if !iconOnly && iconLeft}
		<Picto icon={iconLeft} />
	{/if}

	{#if iconOnly}
		<Picto icon={iconOnly} />
	{:else}
		{label}
	{/if}

	{#if !iconOnly && href && $$restProps.target === '_blank'}
		<em><Picto icon="share" /></em>
	{:else if !iconOnly && iconRight}
		<Picto icon={iconRight} />
	{/if}
</svelte:element>

<style lang="scss">
	@import './Button.scss';
</style>
