<script>
	import { fly, fade } from 'svelte/transition';
	import { tick } from 'svelte';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import { translate } from '@utils/translate';

	/** @type {boolean} */
	let searchIsVisible = false;

	/** @type {string} */
	let searchTerms = '';

	/** @type {HTMLInputElement} */
	let input;

	async function showSearch() {
		searchIsVisible = true;
		await tick();
		input.focus();
	}

	function hideSearch() {
		searchIsVisible = false;
		searchTerms = '';
	}

	function toggleSearch() {
		if (searchIsVisible) hideSearch();
		else showSearch();
	}

	function onKeyDown({ key }) {
		if (key === 'Escape') return hideSearch();
		if (key === 'Enter') return search();
	}

	function search() {
		console.log(searchTerms);
	}
</script>

<button aria-label={translate('pages.home.search.open')} on:click={toggleSearch}>
	<Picto icon="search" />
</button>

{#if searchIsVisible}
	<form action="/search" on:submit|preventDefault>
		<div in:fly={{ y: -50, duration: 200 }} out:fade={{ duration: 200 }}>
			<label for="search-field">{translate('pages.home.search.label')}</label>
			<input
				type="search"
				id="search-field"
				bind:this={input}
				bind:value={searchTerms}
				on:keydown={onKeyDown}
				placeholder={translate('pages.home.search.placeholder')}
			/>
		</div>
		<button on:click={hideSearch} tabindex="-1" aria-label={translate('pages.home.search.close')} />
	</form>
{/if}

<style lang="scss">
	@import './Search.scss';
</style>
