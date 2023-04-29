<script lang="ts">
	import Grain from '../components/Grain.svelte';
</script>

<svelte:head>
	<title>Hello!</title>
	<link rel="icon" type="image/svg" href="/wavinghand.svg" />
</svelte:head>

<Grain>
	<main class="h-screen w-screen flex flex-col space-y-8 items-center justify-center bg-transparent">
		<div><p class="text-8xl">kenneth tang</p></div>
		<div class="flex flex-col space-y-4 text-6xl">
			<a href="https://github.com/Kenny477" rel="noreferrer" class="flex items-center space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-github w-16 h-16"
					><path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					/></svg
				>
				<p>GitHub</p>
			</a>
			<a
				href="https://www.linkedin.com/in/kennethtang0/"
				rel="noreferrer"
				class="flex items-center space-x-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-linkedin w-16 h-16"
					><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
				>
				<p>LinkedIn</p>
			</a>
			<a href="https://www.kennethtang.org" rel="noreferrer" class="flex items-center space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-briefcase w-16 h-16"
					><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path
						d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
					/></svg
				>
				<p>Portfolio</p>
			</a>
		</div>
	</main>
</Grain>