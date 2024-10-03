<script lang="ts">
	type TeamCardProps = {
		name: string;
		grade: number;
		roles: string[];
		image: string;
	};

	export let props: TeamCardProps;

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
			case 'Video':
				return 'bg-red-500';
			case 'Driver':
				return 'bg-gray-500';
			case 'Spotter':
				return 'bg-lime-500';
			case 'T-Shirt':
				return 'bg-rose-500';
		}
	}
</script>

<div class="flex flex-col items-center p-4 bg-neutral-800 rounded-3xl">
	<img src={props.image} alt={props.name} class="rounded-full w-32 h-32" />
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
	{#if $$slots.default}
		<p><b>Favorite Part: </b><slot class="text-gray-700" /></p>
	{/if}
</div>
