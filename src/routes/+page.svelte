<script lang="ts">
	let theme: boolean = false;

	let pos = {
		x: 0,
		y: 0
	};

	function handleMouseMove(e: MouseEvent) {
		pos = {
			x: e.clientX,
			y: e.clientY
		};
	}
</script>

<svelte:head>
	<title>Hello!</title>
	<link rel="icon" type="image/svg" href="/wavinghand.svg" />
</svelte:head>

<svg class="absolute top-0 left-0 h-screen w-screen bg-repeat" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch -->
    <title>rain</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="rain" fill="#456bd5" fill-opacity="0.4">
            <!-- <path d="M4,0.990777969 C4,0.443586406 4.44386482,0 5,0 C5.55228475,0 6,0.45097518 6,0.990777969 L6,5.00922203 C6,5.55641359 5.55613518,6 5,6 C4.44771525,6 4,5.54902482 4,5.00922203 L4,0.990777969 Z M10,8.99077797 C10,8.44358641 10.4438648,8 11,8 C11.5522847,8 12,8.45097518 12,8.99077797 L12,13.009222 C12,13.5564136 11.5561352,14 11,14 C10.4477153,14 10,13.5490248 10,13.009222 L10,8.99077797 Z" id="Combined-Shape"></path> -->
            <path d="M 1 1 C 1 1.27 1.23 1.5 1.5 1.5 C 1.77 1.5 2 1.27 2 1 C 2 0.73 1.77 0.5 1.5 0.5 C 1.23 0.5 1 0.73 1 1" id="Combined-Shape"></path>
        </g>
    </g>
</svg>

<svg class="absolute top-0 left-0 h-screen w-screen z-10" >
	<circle cx={pos.x} cy={pos.y} r="25" fill="red" />
</svg>

<main class="absolute top-0 left-0 h-screen w-screen flex flex-col space-y-8 items-center justify-center z-20" on:mousemove={handleMouseMove}>
	<div class="bg-white rounded-lg flex flex-col p-8 space-y-4">
		<p class="text-8xl">kenneth tang</p>
		<div class="flex flex-col space-y-4 text-6xl">
			<a href="https://github.com/Kenny477" rel="noreferrer" target="_blank" class="link-button">
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
				class="link-button"
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
			<a href="https://www.kennethtang.org" rel="noreferrer" target="_blank" class="link-button">
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