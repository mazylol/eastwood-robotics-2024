<script lang="ts">
	type Item = {
		title: string;
		url: string;
	};

	export let title: string;
	export let links: Item[] = [];
</script>

<li>
	<details>
		<summary>{title}</summary>
		<ul class="p-2 bg-base-100 text-black">
			{#each links as item}
				<li>
					<a href={item.url}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</details>
</li>
