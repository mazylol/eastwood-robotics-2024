<script lang="ts">
	import Dropdown from './Dropdown.svelte';

	import IconTwitter from '~icons/mdi/twitter';
	import IconLink from '~icons/ph/link-bold';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabIndex={0} role="button" class="btn btn-ghost text-white lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				tabIndex={0}
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[90vw] p-2 shadow grid grid-cols-2 grid-rows-2 gap-2 pr-14"
			>
				<li>
					<p>About</p>
					<ul class="p-2">
						<li>
							<a href="/team">Team</a>
						</li>
						<li>
							<a href="/gallery">Photo Gallery</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl text-white"> Eastwood Robotics </a>
	</div>
	<div class="navbar-center hidden lg:flex text-white pr-16">
		<ul class="menu menu-horizontal px-1 gap-2">
			<li>
				<a href="/team">Team</a>
			</li>
			<li>
				<a href="/gallery">Photo Gallery</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end hidden lg:flex">
		<a href="https://twitter.com/els_eagles">
			<IconTwitter
				class="text-3xl text-blue-500 mx-2 hover:bg-blue-500 hover:text-white rounded-md transition-all duration-100"
			/>
		</a>
		<a href="https://eastwoodschools.org">
			<IconLink
				class="text-3xl text-white mx-2 hover:bg-white hover:text-black py-2 px-2 rounded-md transition-all duration-100"
			/>
		</a>
	</div>
</div>
