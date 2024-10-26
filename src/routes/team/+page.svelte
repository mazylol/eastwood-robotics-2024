<script lang="ts">
	import TeamCard from '../../components/TeamCard.svelte';

	import { images } from '$lib/image';
	import type { TeamMember } from '$lib/team';

	const teamMembers: TeamMember[] = [
		{
			name: 'Shawn Miller',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Miller_Shawn_294.jpg']
		},
		{
			name: 'Elias Bailey',
			grade: 11,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Bailey_Elias_15.jpg']
		},
		{
			name: 'Austin Miller',
			grade: 11,
			roles: ['Construction', 'Display', 'Marketing'],
			image: images['/src/lib/assets/team/Miller_Austin_291.jpg']
		},
		{
			name: 'Abram Bailey',
			grade: 9,
			roles: ['Construction']
		},
		{
			name: 'Alyson Taylor',
			grade: 6,
			roles: ['Construction'],
			favoritePart: 'Building things'
		},
		{
			name: 'Caleb Abbey',
			grade: 9,
			roles: ['Construction'],
			favoritePart:
				'I enjoyed the construction of the robot. I love building things and hope to be an engineer one day.'
		},
		{
			name: 'Grady Greulich',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Greulich_Grady_164.jpg']
		},
		{
			name: 'Domanic Hollyday',
			grade: 9,
			roles: ['Construction', 'Driving', 'Spotting'],
			image: images['/src/lib/assets/team/Hollyday_Domanic_201.jpg'],
			favoritePart:
				'Being able to build a robot, then seeing the robot progress and being able to do more things.'
		},
		{
			name: 'Nathan Stonerook',
			grade: 10,
			roles: ['Construction', 'Engineering Notebook', 'Driving'],
			image: images['/src/lib/assets/team/Stonerook_Nathan_464.jpg'],
			favoritePart: 'The comradery, and building a robot'
		},
		{
			name: 'Dylan Hemp',
			grade: 10,
			roles: ['Display', 'Marketing'],
			favoritePart:
				' I like being able to share ideas with everyone on my team, I also like how we all work together to create different things. I like how I feel working with everyone, it really feels like I am part of a team.'
		},
		{
			name: 'Oliver Phommalee',
			grade: 10,
			roles: ['Construction', 'Engineering Notebook'],
			image: images['/src/lib/assets/team/Phommalee_Oliver_352.jpg']
		},
		{
			name: 'Layla Newman',
			grade: 10,
			roles: ['Construction', 'Engineering Notebook'],
			image: images['/src/lib/assets/team/Newman_Layla_321.jpg'],
			favoritePart:
				'My favorite part of robotics is getting to work on a robot and see it perform well at the competition)'
		},
		{
			name: 'Trenton Shaner',
			grade: 10,
			roles: ['Construction', 'Display', 'Driving', 'Engineering Notebook', 'Spotting'],
			image: images['/src/lib/assets/team/Shaner_Trenton_422.jpg'],
			favoritePart: 'Solving problems and building'
		},
		{
			name: 'Sydney Bell',
			grade: 10,
			roles: ['Display', 'Engineering Notebook', 'Marketing'],
			image: images['/src/lib/assets/team/Bell_Sydney_24.jpg'],
			favoritePart:
				" My favorite part of robotics is being able to learn about a completely different topic every year. Eastwood is fortunate enough to welcome experts from their different fields who share their knowledge and wisdom. The experiences throughout the club and people I've met is the best part of Eastwood Robotics."
		},
		{
			name: 'Dominic Pearce',
			grade: 10,
			roles: ['Construction', 'Engineering Notebook'],
			image: images['/src/lib/assets/team/Pearce_Dominic_344.jpg'],
			favoritePart:
				'Building the course and building the robot. Another thing is being a mechanic for the robot.'
		},
		{
			name: 'Eddie Robinson',
			grade: 9,
			roles: ['Construction', 'Driving'],
			image: images['/src/lib/assets/team/Robinson_Eddie_382.jpg'],
			favoritePart: 'Working with a team.'
		},
		{
			name: 'Annie Back',
			grade: 6,
			roles: ['Construction']
		},
		{
			name: 'Alex Back',
			grade: 7,
			roles: ['Marketing']
		},
		{
			name: 'Noah Schuerman',
			grade: 7,
			roles: ['Construction', 'Programming'],
			favoritePart: 'Programming and seeing how fast the robot came together.'
		},
		{
			name: 'Evie Althaus',
			grade: 8,
			roles: ['Marketing', 'Video'],
			favoritePart: 'Having fun with friends.'
		},
		{
			name: 'Henry Howard',
			grade: 11,
			roles: ['Marketing'],
			image: images['/src/lib/assets/team/Howard_Henry_204.jpg'],
			favoritePart: 'Learning new things'
		},
		{
			name: 'Noah Sikora',
			grade: 10,
			roles: ['Construction', 'Spotting'],
			image: images['/src/lib/assets/team/Sikora_Noah_437.jpg'],
			favoritePart: 'The Competition'
		},
		{
			name: 'Lauren Ellis',
			grade: 10,
			roles: ['Marketing', 'Display'],
			image: images['/src/lib/assets/team/Ellis_Lauren_126.jpg'],
			favoritePart:
				'My favorite part of our robotics program is building my public speaking skills and connecting with like-minded people.'
		},
		{
			name: 'Nash Stacey',
			grade: 7,
			roles: ['Marketing'],
			favoritePart: 'Problem solving'
		},
		{
			name: 'Scott McKenzie',
			grade: 9,
			roles: ['Marketing'],
			image: images['/src/lib/assets/team/McKenzie_Scott_277.jpg'],
			favoritePart: 'Showing the slides to sponsors.'
		},
		{
			name: 'Colton Miller',
			grade: 7,
			roles: ['Construction', 'Display', 'Marketing', 'T-Shirt'],
			favoritePart: 'Remote control car'
		},
		{
			name: 'Lexy Smith',
			grade: 7,
			roles: ['Construction', 'Driving', 'Spotting'],
			favoritePart:
				'My favorite parts of robotics are the actual processes of creating the robot and the course from raw materials and being able to see the end result afterwards.'
		},
		{
			name: 'Casen Henline',
			grade: 10,
			roles: ['Construction', 'Driving', 'Spotting'],
			image: images['/src/lib/assets/team/Henline_Casen_188.jpg']
		},
		{
			name: 'Carson Henline',
			grade: 7,
			roles: ['Construction', 'Display', 'Programming'],
			favoritePart: 'Being part of a big team that all works together!'
		},
		{
			name: 'Landon Porter',
			grade: 12,
			roles: ['Construction', 'Display', 'Engineering Notebook', 'Website'],
			image: images['/src/lib/assets/team/Porter_Landon_359.jpg'],
			favoritePart:
				'Having fun with all of the people that I have gotten the opportunity to bond with over all of these years while we all work toward a common goal. I also like to make the website, hello there!'
		},
		{
			name: 'William Stark',
			grade: 10,
			roles: ['Construction', 'Driving', 'Engineering Notebook'],
			image: images['/src/lib/assets/team/Stark_William_453.jpg'],
			favoritePart:
				'Driving the robot with my friends and learning how to design and make the robot.'
		},
		{
			name: 'Lucas Firsdon',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Firsdon_Lucas_133.jpg']
		},
		{
			name: 'Elizabeth Hawn',
			grade: 10,
			roles: ['Construction', 'Display', 'Marketing'],
			image: images['/src/lib/assets/team/Hawn_Elizabeth_177.jpg']
		},
		{
			name: 'Luke Marlowe',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Marlowe_Luke_268.jpg']
		},
		{
			name: 'Addison Goolet',
			grade: 10,
			roles: ['Construction', 'Display', 'Marketing'],
			image: images['/src/lib/assets/team/Goodlet_Addison_159.jpg']
		},
		{
			name: 'Antonio Franco',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Franco_Antonio_143.jpg']
		},
		{
			name: 'Sophie Sarver',
			grade: 9,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Sarver_Sophia_404.jpg']
		},
		{
			name: 'Caitlyn Stiner',
			grade: 11,
			roles: ['Construction', 'Display', 'Marketing'],
			image: images['/src/lib/assets/team/Stiner_Caitlyn_461.jpg']
		},
		{
			name: 'Jackson Segal',
			grade: 9,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Segal_Jackson_419.jpg']
		},
		{
			name: 'Luke Marlowe',
			grade: 10,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Marlowe_Luke_268.jpg']
		},
		{
			name: 'Ethan Headley',
			grade: 9,
			roles: ['Construction'],
			image: images['/src/lib/assets/team/Headley_Ethan_181.jpg'],
			favoritePart:
				"My favorite part of robotics has been building the practice course and our robot. I also enjoy seeing how everyone's hard work comes together in our final product."
		},
		{
			name: 'Calhoun Sandwisch',
			grade: 6,
			roles: ['Marketing'],
			favoritePart: 'Working on all the marketing projects.'
		},
		{
			name: 'Brayden Barnhart',
			grade: 10,
			roles: ['Construction', 'Driving'],
			image: images['/src/lib/assets/team/Barnhart_Brayden_19.jpg'],
			favoritePart: 'The environment we have built around our team'
		},
		{
			name: 'Emily Ernsthausen',
			grade: 6,
			roles: ['Construction'],
			favoritePart: 'Learning about the process of building a robot for competition'
		}
	];

	teamMembers.sort((a, b) => b.grade - a.grade);
</script>

<main title="Team">
	<h1 class="text-center mt-16 text-6xl font-bold">The Team</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-4 my-4 mt-16">
		{#each teamMembers as member}
			<TeamCard
				props={{
					name: member.name,
					grade: member.grade,
					roles: member.roles,
					favoritePart: member.favoritePart,
					image: member.image
				}}
			/>
		{/each}
	</div>
</main>
