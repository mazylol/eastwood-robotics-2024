<script lang="ts">
	import IconTwitter from '~icons/mdi/twitter';
	import IconLink from '~icons/ph/link-bold';
</script>

<footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/team">Team</a>
		<a class="link link-hover" href="/gallery">Gallery</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://twitter.com/els_eagles">
				<IconTwitter
					class="text-3xl text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-100"
				/>
			</a>
			<a href="https://eastwoodschools.org">
				<IconLink
					class="text-3xl text-white hover:bg-white hover:text-black py-2 px-2 rounded-md transition-all duration-100"
				/>
			</a>
		</div>
	</nav>
	<aside>
		<p>
			Built with <a class="link link-hover" href="https://kit.svelte.dev">SvelteKit</a> +
			<a class="link link-hover" href="https://tailwindcss.com">Tailwindcss</a>
			+ <a class="link link-hover" href="https://daisyui.com">DaisyUI</a>
		</p>
		<p>
			Full source code on <a
				class="link link-hover text-white font-bold"
				href="https://github.com/mazylol/eastwood-robotics-2024">GitHub</a
			>
		</p>
	</aside>
</footer>
