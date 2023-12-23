<script>
	import Title from '@src/components/ui/Title/Title.svelte';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import Vinyl from '@src/components/common/Media/Vinyl/Vinyl.svelte';
</script>

<section>
	<a href="/library" class="container">
		<Title text="Disques Vinyles" size="l" tag="h2" noMargin />
		<Picto icon="user" />
	</a>

	<ul>
		{#each new Array(8) as _}
			<li><Vinyl open="barely" /></li>
		{/each}
	</ul>
</section>

<style lang="scss">
	a {
		display: flex;
		font-size: 20rem;
		padding-left: $spacing-2;
		border-left: 4rem solid $main-color;
		margin-bottom: $spacing-8;
	}

	ul {
		display: flex;
		gap: $spacing-8;
		padding-inline: $spacing-8;
		max-width: fit-content;
		overflow: auto;
	}
</style>
