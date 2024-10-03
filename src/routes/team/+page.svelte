<script lang="ts">
	import TeamCard from '../../components/TeamCard.svelte';
</script>

<main title="Team">
	<h1 class="text-center mt-16 text-6xl font-bold">The Team</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-4 my-4 mt-16">
		<TeamCard
			props={{
				name: 'John Doe',
				grade: 12,
				roles: ['CEO', 'Founder'],
				image: '/team/placeholder.png'
			}}
		>
			hello there
		</TeamCard>
		<TeamCard
			props={{
				name: 'Jane Doe',
				grade: 12,
				roles: ['CTO', 'Co-Founder'],
				image: '/team/placeholder.png'
			}}
		/>
		<TeamCard
			props={{
				name: 'John Smith',
				grade: 12,
				roles: ['Lead Developer'],
				image: '/team/placeholder.png'
			}}
		/>
		<TeamCard
			props={{
				name: 'Jane Smith',
				grade: 12,
				roles: ['Lead Designer'],
				image: '/team/placeholder.png'
			}}
		/>
		<TeamCard
			props={{
				name: 'John Johnson',
				grade: 12,
				roles: ['Programming'],
				image: '/team/placeholder.png'
			}}
		/>
        <TeamCard
            props={{
                name: 'Jane Johnson',
                grade: 12,
                roles: ['Website'],
                image: '/team/placeholder.png'
            }}>
        tid    
        </TeamCard>
	</div>
</main>
