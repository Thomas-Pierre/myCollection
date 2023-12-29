<script>
	import Input from '@src/components/ui/Input/Input.svelte';
	import Radio from '@src/components/ui/Radio/Radio.svelte';
	import Button from '@src/components/ui/Button/Button.svelte';

	import { checkAllInputErrors } from '@src/utils/form';
</script>

<form use:checkAllInputErrors>
	<Input type="text" label="Nom" rules={{ required: true, minLength: 3, maxLength: 10 }} />
	<Input type="email" label="Auteur" rules={{ required: true, minLength: 3, maxLength: 10 }} />
	<Input type="textarea" label="message" rules={{ required: true, minLength: 3, maxLength: 10 }} />
	<Radio
		name="État"
		choices={['neuf', 'excellent', 'bon', 'correct', 'mauvais']}
		inline
		rules={{ required: true }}
	/>

	<Button label="valider" variant="primary" />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: $spacing-8;
	}
</style>
