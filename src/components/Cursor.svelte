<script lang="ts">
	import { spring } from 'svelte/motion';
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
	let cursor: HTMLDivElement;

	$: console.log(cursor);

	// $: cursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

	// $: console.log(pos);
</script>

<svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="absolute top-0 left-0 h-screen w-screen">
	<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g id="rain" fill="#456bd5" fill-opacity="0.4">
					<path d="M 1 1 C 1 1.27 1.23 1.5 1.5 1.5 C 1.77 1.5 2 1.27 2 1 C 2 0.73 1.77 0.5 1.5 0.5 C 1.23 0.5 1 0.73 1 1" id="Combined-Shape"></path>
			</g>
	</g>
</svg>
<svg class="absolute top-0 left-0 h-screen w-screen z-10" on:mousemove={handleMouseMove}>
	<circle cx={pos.x} cy={pos.y} r="25" fill="white" />
</svg>
