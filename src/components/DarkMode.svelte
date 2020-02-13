<script>
function toggle() {
	window.document.body.classList.toggle('dark-mode')
}
</script>
<button on:click={toggle}>
	<slot/>
</button>
<style>
	button {
		background-color: transparent;
		color: white;
        font-size: 25px;
		border: none;
		border-radius: 100%;
        position: fixed;
        left: 20px;
        bottom: 20px;
	}
    button:hover {
        opacity: 0.8;
    }
	:global(body.dark-mode) button:hover {
		color: black;
	}
</style>