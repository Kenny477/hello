<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a
	{href}
	rel="noreferrer"
	target="_blank"
	class="link-button"
>
	<slot />
	<p>{label}</p>
</a>