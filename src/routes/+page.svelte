<script>
	import Title from '@components/ui/Title/Title.svelte';
	import Picto from '@components/ui/Picto/Picto.svelte';
	import Vinyl from '@components/common/Media/Vinyl/Vinyl.svelte';

	import vinyls from '@data/vinyls.json';
</script>

<section>
	<a href="/" class="container">
		<Title text="Disques Vinyles" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>

	<ul>
		{#each vinyls as data}
			<li><Vinyl {data} open="barely" size="m" detailled /></li>
		{/each}
	</ul>
</section>

<section>
	<a href="/" class="container">
		<Title text="Bandes Dessinées" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>
</section>

<section>
	<a href="/" class="container">
		<Title text="Jeux PS5" size="l" tag="h2" noMargin />
		<Picto icon="chevron-right" />
	</a>
</section>

<style lang="scss">
	section + section {
		margin-top: 2 * $spacing-8;
	}

	a {
		display: flex;
		font-size: 20rem;
		padding-left: $spacing-2;
		border-left: 4rem solid $main-color;
		margin-bottom: $spacing-8;
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
