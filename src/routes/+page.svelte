<script>
	import Title from '@components/ui/Title/Title.svelte';
	import Picto from '@components/ui/Picto/Picto.svelte';
	import Vinyl from '@components/common/Media/Vinyl/Vinyl.svelte';
	import Book from '@src/components/common/Media/Book/Book.svelte';
	import DVD from '@src/components/common/Media/DVD/DVD.svelte';

	import vinyls from '@data/vinyls.json';
	import comics from '@data/comics.json';
	import ps5_games from '@data/ps5_games.json';
</script>

<section>
	<a href="/">
		<Title text="Disques Vinyles" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>

	<ul class="fullwidth">
		{#each vinyls as data}
			<li><a href="/"><Vinyl {data} detailled /></a></li>
		{/each}
	</ul>
</section>

<section>
	<a href="/">
		<Title text="Bandes Dessinées" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>

	<ul class="fullwidth">
		{#each comics as data}
			<li><a href="/"><Book {data} detailled /></a></li>
		{/each}
	</ul>
</section>

<section>
	<a href="/">
		<Title text="Jeux PS5" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>

	<ul class="fullwidth">
		{#each ps5_games as data}
			<li><a href="/"><DVD {data} detailled type="PS5" /></a></li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		& + section {
			margin-top: 2 * $spacing-8;
		}

		& > a {
			display: flex;
			font-size: 20rem;
			padding-left: $spacing-2;
			border-left: 4rem solid $main-color;
			margin-bottom: $spacing-8;
		}
	}

	ul {
		display: flex;
		gap: $spacing-4;
		padding-inline: $spacing-4;
		max-width: fit-content;
		overflow: auto;
		@include hideScrollBars();

		@include over-mobile() {
			gap: $spacing-8;
			padding-inline: $spacing-8;
		}
	}
</style>
