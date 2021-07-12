<script context="module">
	export function load({ error, status }) {
		return {
			props: {
        status: {status},
        message: {error}
			}
		};
	}
</script>

<script>
  export let status;
  console.log(status)
  export let message;
</script>
<div class="mt-8 mx-auto"> 
<h1 class="font-Roboto text-5xl text-gray-900">Error: {status.status}</h1>
<p class="font-Roboto text-3xl text-gray-900">{message.error.message} </p>
<p class="font-Roboto text-3xl text-gray-900">Center yourself and try something else </p>
</div>