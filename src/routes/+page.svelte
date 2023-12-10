<script>
	import Picto from '@src/components/ui/Picto/Picto.svelte';
	import Button from '@src/components/ui/Button/Button.svelte';
</script>

<ul>
	<li>
		<h2>Pictos</h2>
		<div class="pictos">
			{#each ['user', 'gear', 'files', 'burger-menu'] as icon}
				<Picto {icon} />
			{/each}
		</div>
	</li>

	<li>
		<h2>Buttons</h2>
		<div class="buttons">
			<Button size="s" variant="primary" label="click me" iconOnly="files" />
			<Button size="s" variant="secondary" label="click me" iconOnly="files" />
			<Button size="s" variant="light" label="click me" iconOnly="files" />
			<Button size="s" variant="dark" label="click me" iconOnly="files" />
		</div>
		<div class="buttons">
			<Button size="s" variant="primary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="s" variant="secondary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="s" variant="light" label="click me" iconLeft="user" iconRight="files" />
			<Button size="s" variant="dark" href="#" target="_blank" label="click me !" iconRight="files" />
		</div>
		<div class="buttons">
			<Button size="m" variant="primary" label="click me" iconOnly="files" />
			<Button size="m" variant="secondary" label="click me" iconOnly="files" />
			<Button size="m" variant="light" label="click me" iconOnly="files" />
			<Button size="m" variant="dark" label="click me" iconOnly="files" />
		</div>
		<div class="buttons">
			<Button size="m" variant="primary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="m" variant="secondary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="m" variant="light" label="click me" iconLeft="user" iconRight="files" />
			<Button size="m" variant="dark" href="#" target="_blank" label="click me !" iconRight="files" />
		</div>
		<div class="buttons">
			<Button size="l" variant="primary" label="click me" iconOnly="files" />
			<Button size="l" variant="secondary" label="click me" iconOnly="files" />
			<Button size="l" variant="light" label="click me" iconOnly="files" />
			<Button size="l" variant="dark" label="click me" iconOnly="files" />
		</div>
		<div class="buttons">
			<Button size="l" variant="primary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="l" variant="secondary" label="click me" iconLeft="user" iconRight="files" />
			<Button size="l" variant="light" label="click me" iconLeft="user" iconRight="files" />
			<Button size="l" variant="dark" href="#" target="_blank" label="click me !" iconRight="files" />
		</div>
	</li>
</ul>

<style lang="scss">
	li {
		margin-top: 32rem;

		h2 {
			font-size: 24rem;
			margin: $spacing-4;

			&::before {
				content: '• ';
			}
		}

		div {
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;
			gap: $spacing-8;
		}
	}

	.pictos {
		font-size: 32rem;
	}

	.buttons {
		margin-top: 24rem;
	}
</style>
