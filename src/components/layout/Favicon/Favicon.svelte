<script>
	// @ts-nocheck
	import colors from '@styles/variables/_colors.scss';

	const { mainColor, altColor } = ((_) => {
		const result = {};
		for (const [, key, color] of _.matchAll(/([a-zA-Z0-9]+)\s*:\s*#([0-9a-fA-F]{6});/g)) {
			result[key] = `#${color}`;
		}
		return result;
	})(colors);
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />

	{#each ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180'] as sizes}
		<link rel="apple-touch-icon" {sizes} href="/favicons/apple-icon-{sizes}.png" />
	{/each}

	{#each ['192x192', '32x32', '96x96', '16x16'] as sizes}
		<link rel="icon" type="image/png" {sizes} href="/favicons/android-icon-{sizes}.png" />
	{/each}

	<meta name="theme-color" content={altColor} />
	<meta name="msapplication-TileColor" content={altColor} />
	<meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
</svelte:head>
