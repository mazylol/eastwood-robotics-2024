<script lang="ts">
	import Img from '@zerodevx/svelte-img';

	import domAndLayla from '$lib/assets/gallery/dom-and-layla.jpg?as=run';
	import laylaAndCad from '$lib/assets/gallery/layla-and-cad.jpg?as=run';
	import ballGrabDrawing from '$lib/assets/gallery/IMG_2979.jpg?as=run';
	import radialArmSaw from '$lib/assets/gallery/radial.jpg?as=run';
	import nathanWorking from '$lib/assets/gallery/IMG_2995.jpg?as=run';
	import smilyJeb from '$lib/assets/gallery/IMG_2909.jpg';
	import addisonWorking from '$lib/assets/gallery/addison.jpg';
	import shopDiscussion from '$lib/assets/gallery/shop-discussion.jpg';
	import domAndOthers from '$lib/assets/gallery/canon/IMG_1439.jpg?as=run';
	import domWorkClose from '$lib/assets/gallery/canon/IMG_1441.jpg?as=run';
	import domSmile from '$lib/assets/gallery/canon/IMG_1444.jpg?as=run';
	import coursePortrait from '$lib/assets/gallery/canon/IMG_1450.jpg?as=run';
	import domDrill from '$lib/assets/gallery/canon/IMG_1445.jpg?as=run';
	import moreCourse from '$lib/assets/gallery/canon/IMG_1448.jpg?as=run';
</script>

<main title="Gallery">
	<h1 class="text-center mt-16 text-6xl font-bold">Gallery</h1>
	<div class="max-w-7xl mx-auto pt-8">
		<Img class="rounded-lg my-4" src={domAndLayla} alt="dom and layla working" />
		<Img class="rounded-lg my-4" src={laylaAndCad} alt="layla working on making gears" />
		<Img class="rounded-lg my-4" src={ballGrabDrawing} alt="ball grabber drawing" />
		<Img class="rounded-lg my-4" src={radialArmSaw} alt="someone using the radial arm saw" />
		<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-8">
			<Img class="rounded-lg my-4" src={nathanWorking} alt="nathan working" />
			<img class="rounded-lg my-4 sm:py-32 -rotate-90" src={smilyJeb} alt="jeb smiling" />
			<img class="rounded-lg my-4" src={addisonWorking} alt="addison working" />
		</div>
		<img class="rounded-lg my-4" src={shopDiscussion} alt="discussion in the shop" />
		<Img class="rounded-lg my-4" src={domAndOthers} alt="people working on the marketing display" />
		<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-8 gap-8">
			<Img
				class="rounded-lg my-8 -rotate-90"
				src={domWorkClose}
				alt="closeup of the work on display"
			/>
			<Img class="rounded-lg my-8 -rotate-90" src={domSmile} alt="dom smiling" />
			<Img class="rounded-lg my-8 -rotate-90" src={coursePortrait} alt="portrait of our course" />
		</div>
		<Img class="rounded-lg my-4" src={domDrill} alt="dom with the drill" />
		<Img class="rounded-lg my-4" src={moreCourse} alt="another course pic" />
	</div>
</main>
