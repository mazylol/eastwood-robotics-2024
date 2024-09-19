<script lang="ts">
	import { smoothScroll } from '$lib/scroll';
    import MdiArrowDown from '~icons/mdi/arrow-down';
</script>

<div class="hero min-h-screen" style="background-image: url(/moon.jpg);">
    <div class="hero-overlay bg-opacity-50"></div>
    <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-white">
            Eastwood Robotics
        </h1>
        <p class="mb-5">
            At Eastwood Robotics we strive to be the best in robotics
            technologies
        </p>
        <button
                    id="herobutton"
                    on:click={() => {
                        smoothScroll("#therobot");
                    }}
                    class="btn btn-primary flex flex-row mx-auto"
                >
                    <p class="pt-2 py-2">Get Started</p>
                    <MdiArrowDown
                        class="text-white w-8 animate-bounce mt-2"
                    />
                </button>
    </div>
</div>
<section class="bg-neutral-300">
    <h1 id="therobot" class="text-5xl py-8 text-center font-bold">
        The Robot
    </h1>
</section>
