<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let lightMode: boolean;

	// Check dark mode preference
	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			lightMode = false;
		}
		else {
			lightMode = true;
		}
	});

	const slide = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});
</script>

<svelte:head>
	<title>Hello!</title>
	<link rel="icon" type="image/svg" href="/wavinghand.svg" />
</svelte:head>

<svg
	class="absolute top-0 left-0 h-screen w-screen"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
>
	<defs>
		<filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"
			><feFlood flood-opacity="0" result="BackgroundImageFix" /><feBlend
				mode="normal"
				in="SourceGraphic"
				in2="BackgroundImageFix"
				result="shape"
			/><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur" /></filter
		>
		<pattern id="grain" viewBox="0 0 4 4" width="0.75%" height="1%">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g fill="#456bd5" fill-opacity="1">
					<path
						d="M 1 1 C 1 1.27 1.23 1.5 1.5 1.5 C 1.77 1.5 2 1.27 2 1 C 2 0.73 1.77 0.5 1.5 0.5 C 1.23 0.5 1 0.73 1 1"
					/>
				</g>
			</g>
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="#456bd5" />
	{#if lightMode}
		<g filter="url(#blur1)">
			<circle cx="13%" cy="9%" fill="#ffffff" r="33%" />
			<circle cx="19%" cy="6%" fill="#ffffff" r="20%" />
			<circle cx="22%" cy="40%" fill="#ffffff" r="12%" />
			<circle cx="11%" cy="94%" fill="#ffffff" r="16%" />
			<circle cx="18%" cy="29%" fill="#ffffff" r="17%" />
			<circle cx="67%" cy="85%" fill="#ffffff" r="25%" />
			<circle cx="89%" cy="16%" fill="#ffffff" r="15%" />
		</g>
	{:else}
		<g filter="url(#blur1)">
			<circle cx="13%" cy="9%" fill="#000000" r="33%" />
			<circle cx="19%" cy="6%" fill="#000000" r="20%" />
			<circle cx="22%" cy="40%" fill="#000000" r="12%" />
			<circle cx="11%" cy="94%" fill="#000000" r="16%" />
			<circle cx="18%" cy="29%" fill="#000000" r="17%" />
			<circle cx="67%" cy="85%" fill="#000000" r="25%" />
			<circle cx="89%" cy="16%" fill="#000000" r="15%" />
		</g>
	{/if}
	<rect width="100%" height="100%" fill="url(#grain)" />
</svg>

<main
	class="absolute top-0 left-0 h-screen w-screen flex flex-col space-y-8 items-center justify-center z-20"
>
	<div
		class={`${
			lightMode ? 'justify-start bg-white' : 'justify-end bg-black'
		} flex absolute top-4 right-4 w-12 h-8 p-1 rounded-full shadow-2xl shadow-[#456bd5]`}
	>
		<button
			on:click={() => {
				lightMode = !lightMode;
			}}
			class="w-6 h-6 rounded-full bg-[#456bd5]"
		/>
	</div>
	<div
		class={`${
			lightMode ? 'bg-white/90 text-black' : 'bg-black/60 text-white/90'
		} w-1/2 h-3/4 rounded-lg flex flex-col p-8 space-y-4 shadow-2xl shadow-[#456bd5]`}
	>
		<p class="text-8xl">kenneth tang</p>
		<div class="flex flex-col space-y-4 text-6xl">
			<a
				href="https://github.com/Kenny477"
				rel="noreferrer"
				target="_blank"
				class={`${lightMode ? 'link-button' : 'link-button-dark'}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
					/></svg
				>
				<p>GitHub</p>
			</a>
			<a
				href="https://www.linkedin.com/in/kennethtang0/"
				rel="noreferrer"
				target="_blank"
				class={`${lightMode ? 'link-button' : 'link-button-dark'}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
				>
				<p>LinkedIn</p>
			</a>
			<a
				href="https://www.kennethtang.org"
				rel="noreferrer"
				target="_blank"
				class={`${lightMode ? 'link-button' : 'link-button-dark'}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path
						d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
					/></svg
				>
				<p>Portfolio</p>
			</a>
		</div>
	</div>
</main>
