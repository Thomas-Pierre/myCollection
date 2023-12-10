<script>
	import { theme } from '@stores/theme';
	import '@styles/index.scss';

	/**  @param {HTMLElement} body  */
	function addTheme(body) {
		body.setAttribute('data-theme', $theme);
	}
</script>

<svelte:body use:addTheme />
