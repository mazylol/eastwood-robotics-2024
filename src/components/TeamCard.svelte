<script lang="ts">
	import type { TeamMember } from '$lib/team';

	export let props: TeamMember;

	props.roles = props.roles.sort();

	function roleToColor(role: string) {
		switch (role) {
			case 'Programming':
				return 'bg-yellow-500';
			case 'Website':
				return 'bg-purple-500';
			case 'Construction':
				return 'bg-blue-500';
			case 'Marketing':
				return 'bg-green-500';
			case 'Display':
				return 'bg-orange-500';
			case 'Engineering Notebook':
				return 'bg-teal-500';
			case 'Video':
				return 'bg-red-500';
			case 'Driving':
				return 'bg-gray-500';
			case 'Spotting':
				return 'bg-lime-500';
			case 'T-Shirt':
				return 'bg-rose-500';
		}
	}
</script>

<div class="flex flex-col items-center p-4 bg-neutral-800 rounded-3xl">
	{#if props.image}
		<enhanced:img src={props.image} alt={props.name} class="rounded-3xl" />
	{:else}
		<enhanced:img src="$lib/assets/team/placeholder.png" alt="An alt text" />
	{/if}
	<h2 class="text-2xl font-bold mt-4">
		{props.name}
		<span class="ml-4 bg-primary p-1 rounded-md text-gray-200">
			{props.grade}th
		</span>
	</h2>
	<ul
		class="sm:text-sm md:text-md lg:text-lg font-semibold flex-wrap flex flex-row text-gray-300 mt-4 justify-center"
	>
		{#each props.roles as role}
			<li class={`py-1 px-2 mx-1 my-1 text-xs rounded-md ${roleToColor(role)}`}>
				{role}
			</li>
		{/each}
	</ul>
	<hr class="my-4 border-b-2 border-gray-500" />
	{#if props.favoritePart}
		<p><b>Favorite Part: </b>{props.favoritePart}</p>
	{/if}
</div>
