<script>
	import { page } from '$app/stores';
	import { translate } from '@src/utils/translate';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
</script>

<a
	href="/new"
	class="plus"
	class:active={$page.route.id === '/new'}
	title={translate('common.navbar.addItem')}
>
	<Picto icon="plus" />
</a>

<style lang="scss">
	@import './PlusButton.scss';
</style>
