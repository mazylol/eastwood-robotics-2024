<script lang="ts">
	import { smoothScroll } from '$lib/scroll';
	import MdiArrowDown from '~icons/mdi/arrow-down';

	import teamAndRobot from '$lib/assets/home/team_and_robot.jpg?enhanced';
</script>

<div class="hero min-h-screen" style="background-image: url(/moon.jpg);">
	<div class="hero-overlay bg-opacity-50"></div>
	<div class="max-w-md">
		<h1 class="mb-5 text-5xl font-bold text-white">Eastwood Robotics</h1>
		<p class="mb-5">At Eastwood Robotics we strive to be the best in robotics technologies</p>
		<button
			id="herobutton"
			on:click={() => {
				smoothScroll('#therobot');
			}}
			class="btn btn-primary flex flex-row mx-auto"
		>
			<p class="pt-2 py-2">Get Started</p>
			<MdiArrowDown class="text-white w-8 animate-bounce mt-2" />
		</button>
	</div>
</div>
<section class="bg-neutral-700 xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto">
	<h1 id="therobot" class="text-5xl py-8 text-neutral-200 text-center font-bold">Who We Are</h1>
	<enhanced:img
		src={teamAndRobot}
		alt="Team and the robot"
		class="mx-auto rounded-xl drop-shadow-xl"
	/>
	<p class="bg-neutral-600 rounded-xl p-4 mt-8 text-2xl text-neutral-200 mx-auto">
		We are Eastwood Robotics. A group of like-minded individuals who have a hunger for learning and
		experimentation. Every year we build a robot to compete at the Falcon BEST held right in our own
		backyard. We strive to be the best but most importantly, expand our knowledge in robotics. Our
		club includes students from 6th all the way to 12th grade. We can find a place where anyone can
		shine.
	</p>
</section>
