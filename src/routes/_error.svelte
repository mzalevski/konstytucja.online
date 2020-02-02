<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p, a {
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		font-size: 6em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		margin-top: 2em;
	}

	p {
		margin: 1em auto;
		text-align: center;
		font-size: 1.8em;
	}
	a {
		text-decoration: underline;
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 5em;
		}
		p {
			font-size: 1.4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status} 💔</h1>
<p>Och nie! Nie ma takiej podstrony! 😔</p>
<a rel="prefetch" href="/"><p>wróć na stronę główną</p></a>

{#if dev && error.stack}
	<p>{error.message}</p>
	<pre>{error.stack}</pre>
{/if}
