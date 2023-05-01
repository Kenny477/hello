<div class="">
	<!-- <div class="overlay w-screen h-screen">
  </div>
	<svg id="noise" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
		<filter id="noiseFilter">
			<feTurbulence type="fractalNoise" baseFrequency="9.77" numOctaves="6" stitchTiles="stitch" />
		</filter>
		<rect width="100vw" height="1vh" filter="url(#noiseFilter)" />
	</svg> -->

  <div class="bg-transparent absolute background">
    <slot/>
  </div>
</div>

<style>
	.background {
		background-image: url('/grain.svg');
	}
	#noise {
		position: absolute;
    top: 0;
    left: 0;
	}
	.overlay {
    position: absolute;
		background: linear-gradient(to bottom, blue, transparent 20%);
	}
</style>
