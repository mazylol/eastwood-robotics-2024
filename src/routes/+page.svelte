<script lang="ts">
	import { smoothScroll } from '$lib/scroll';
	import MdiArrowDown from '~icons/mdi/arrow-down';

	import teamAndRobot from '$lib/assets/home/team_and_robot.jpg?enhanced';
</script>

<section class="hero min-h-screen" style="background-image: url(/moon.jpg);">
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
</section>
<section class="bg-neutral-700 xs:max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto">
	<h1 id="therobot" class="text-7xl py-16 text-neutral-200 text-center font-bold">Who We Are</h1>
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
<section class="bg-neutral-700 mx-auto py-16">
	<h1 class="text-7xl text-neutral-200 text-center font-bold">Thank you to our sponsors</h1>
	<div
		class="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto"
	>
		<div class="justify-center">
			<enhanced:img src="$lib/assets/sponsors/agas.svg" alt="A-Gas" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/b2b.png" alt="B2B" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/centaur.png" alt="Centaur Tool & Die" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/dyco.png" alt="Dyco" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/energy-harbor.jpg" alt="Energy Harbor" />
		</div>
		<div class="justify-center mx-auto w-64">
			<enhanced:img src="$lib/assets/sponsors/firstsolar.png" alt="First Solar" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/lfstudios.webp" alt="Life Formations" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/morrison.jpg" alt="Morrison" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/napoleonmachine.webp" alt="Napoleon Machine" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/nsg.png" alt="NSG Group" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/pbe.png" alt="Principal Business Enterprises" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/pmmi.png" alt="PMMI" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/rosenboom.png" alt="Rosenboom" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/teijin.jpg" alt="Teijin Automotive Technologies" />
		</div>
		<div class="justify-center mx-auto">
			<enhanced:img src="$lib/assets/sponsors/woodcountyhospital.png" alt="Wood County Hospital" />
		</div>
	</div>
</section>
