<script>
	import Input from '@src/components/ui/Input/Input.svelte';
</script>

<form>
	<Input type="text" label="Nom" rules={{ required: true, minLength: 3, maxLength: 10 }} />
	<Input type="email" label="Auteur" rules={{ required: true, minLength: 3, maxLength: 10 }} />
	<Input type="textarea" label="message" rules={{ required: true, minLength: 3, maxLength: 10 }} />
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		gap: $spacing-8;
	}
</style>
