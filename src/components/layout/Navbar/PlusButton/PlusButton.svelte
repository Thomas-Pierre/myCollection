<script>
	import { translate } from '@src/utils/translate';
	import Picto from '@src/components/ui/Picto/Picto.svelte';
</script>

<button class="plus" title={translate('common.navbar.addItem')}>
	<Picto icon="plus" />
</button>

<style lang="scss">
	@import './PlusButton.scss';
</style>
