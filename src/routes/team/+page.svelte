<script lang="ts">
	import TeamCard from '../../components/TeamCard.svelte';

	import { images } from '$lib/image';
</script>

<main title="Team">
	<h1 class="text-center mt-16 text-6xl font-bold">The Team</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-4 my-4 mt-16">
		<TeamCard
			props={{
				name: 'Shawn Miller',
				grade: 10,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Miller_Shawn_294.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Elias Bailey',
				grade: 11,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Bailey_Elias_15.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Austin Miller',
				grade: 11,
				roles: ['Construction', 'Marketing', 'Display'],
				image: images['/src/lib/assets/team/Miller_Austin_291.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Abram Bailey',
				grade: 9,
				roles: ['Construction']
			}}
		/>
		<TeamCard
			props={{
				name: 'Alyson Taylor',
				grade: 6,
				roles: ['Construction']
			}}
		>
			Building things
		</TeamCard>
		<TeamCard
			props={{
				name: 'Caleb Abbey',
				grade: 9,
				roles: ['Construction']
			}}
		>
			I enjoyed the construction of the robot. I love building things and hope to be an engineer one
			day.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Grady Greulich',
				grade: 10,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Greulich_Grady_164.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Domanic Hollyday',
				grade: 9,
				roles: ['Construction', 'Driving', 'Spotting'],
				image: images['/src/lib/assets/team/Hollyday_Domanic_201.jpg']
			}}
		>
			Being able to build a robot, then seeing the robot progress and being able to do more things.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Nathan Stonerook',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook', 'Driving'],
				image: images['/src/lib/assets/team/Stonerook_Nathan_464.jpg']
			}}
		>
			The comradery, and building a robot
		</TeamCard>
		<TeamCard
			props={{
				name: 'Dylan Hemp',
				grade: 7,
				roles: ['Marketing', 'Display']
			}}
		>
			I like being able to share ideas with everyone on my team, I also like how we all work
			together to create different things. I like how I feel working with everyone, it really feels
			like I am part of a team.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Oliver Phommalee',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook'],
				image: images['/src/lib/assets/team/Phommalee_Oliver_352.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Layla Newman',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook'],
				image: images['/src/lib/assets/team/Newman_Layla_321.jpg']
			}}
		>
			My favorite part of robotics is getting to work on a robot and see it perform well at the
			competition. (Also i can send you the drive for photos if you don't have it there's a few good
			ones in there, there's also a video of when we were testing the robot)
		</TeamCard>
		<TeamCard
			props={{
				name: 'Trenton Shaner',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook', 'Driving', 'Spotting', 'Display'],
				image: images['/src/lib/assets/team/Shaner_Trenton_422.jpg']
			}}
		>
			Solving problems and building</TeamCard
		>
		<TeamCard
			props={{
				name: 'Sydney Bell',
				grade: 10,
				roles: ['Marketing', 'Engineering Notebook', 'Display'],
				image: images['/src/lib/assets/team/Bell_Sydney_24.jpg']
			}}
		>
			My favorite part of robotics is being able to learn about a completely different topic every
			year. Eastwood is fortunate enough to welcome experts from their different fields who share
			their knowledge and wisdom. The experiences throughout the club and people I've met is the
			best part of Eastwood Robotics.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Dominic Pearce',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook'],
				image: images['/src/lib/assets/team/Pearce_Dominic_344.jpg']
			}}
			>Building the course and building the robot. Another thing is being a mechanic for the robot.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Eddie Robinson',
				grade: 9,
				roles: ['Construction', 'Driving'],
				image: images['/src/lib/assets/team/Robinson_Eddie_382.jpg']
			}}>Working with a team.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Annie Back',
				grade: 6,
				roles: ['Construction']
			}}
		/>
		<TeamCard
			props={{
				name: 'Alex Back',
				grade: 7,
				roles: ['Marketing']
			}}
		/>
		<TeamCard
			props={{
				name: 'Noah Schuerman',
				grade: 7,
				roles: ['Programming', 'Construction']
			}}
		>
			Programming and seeing how fast the robot came together.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Evie Althaus',
				grade: 8,
				roles: ['Marketing', 'Video']
			}}>Having fun with friends.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Henry Howard',
				grade: 11,
				roles: ['Marketing'],
				image: images['/src/lib/assets/team/Howard_Henry_204.jpg']
			}}
		>
			Learning new things
		</TeamCard>
		<TeamCard
			props={{
				name: 'Noah Sikora',
				grade: 10,
				roles: ['Construction', 'Spotting'],
				image: images['/src/lib/assets/team/Sikora_Noah_437.jpg']
			}}
		>
			The competition</TeamCard
		>
		<TeamCard
			props={{
				name: 'Lauren Ellis',
				grade: 10,
				roles: ['Marketing', 'Display'],
				image: images['/src/lib/assets/team/Ellis_Lauren_126.jpg']
			}}
			>My favorite part of our robotics program is building my public speaking skills and connecting
			with like-minded people.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Nash Stacey',
				grade: 7,
				roles: ['Marketing']
			}}
		>
			Problem solving</TeamCard
		>
		<TeamCard
			props={{
				name: 'Scott McKenzie',
				grade: 9,
				roles: ['Marketing'],
				image: images['/src/lib/assets/team/McKenzie_Scott_277.jpg']
			}}>Showing the slides to sponsors.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Colton Miller',
				grade: 7,
				roles: ['Construction', 'Marketing', 'Display', 'T-Shirt']
			}}
		>
			Remote control car</TeamCard
		>
		<TeamCard
			props={{
				name: 'Lexy Smith',
				grade: 7,
				roles: ['Construction', 'Driving', 'Spotting']
			}}
		>
			My favorite parts of robotics are the actual processes of creating the robot and the course
			from raw materials and being able to see the end result afterwards.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Casen Henline',
				grade: 10,
				roles: ['Construction', 'Driving', 'Spotting'],
				image: images['/src/lib/assets/team/Henline_Casen_188.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Carson Henline',
				grade: 7,
				roles: ['Programming', 'Construction', 'Display']
			}}
		>
			Being part of a big team that all works together!
		</TeamCard>
		<TeamCard
			props={{
				name: 'Landon Porter',
				grade: 12,
				roles: ['Construction', 'Website', 'Engineering Notebook', 'Display'],
				image: images['/src/lib/assets/team/Porter_Landon_359.jpg']
			}}
		>
			Having fun with all of the people that I have gotten the opportunity to bond with over all of
			these years while we all work toward a common goal. I also like to make the website, hello
			there!</TeamCard
		>
		<TeamCard
			props={{
				name: 'William Stark',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook', 'Driving'],
				image: images['/src/lib/assets/team/Stark_William_453.jpg']
			}}
			>Driving the robot with my friends and learning how to design and make the robot.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Lucas Firsdon',
				grade: 10,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Firsdon_Lucas_133.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Elizabeth Hawn',
				grade: 10,
				roles: ['Construction', 'Marketing', 'Display'],
				image: images['/src/lib/assets/team/Hawn_Elizabeth_177.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Luke Marlowe',
				grade: 10,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Marlowe_Luke_268.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Addison Goodlet',
				grade: 10,
				roles: ['Construction', 'Marketing', 'Display'],
				image: images['/src/lib/assets/team/Goodlet_Addison_159.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Antonio Franco',
				grade: 10,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Franco_Antonio_143.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Sophie Sarver',
				grade: 9,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Sarver_Sophia_404.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Caitlyn Stiner',
				grade: 11,
				roles: ['Construction', 'Marketing', 'Display'],
				image: images['/src/lib/assets/team/Stiner_Caitlyn_461.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Jackson Segal',
				grade: 9,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Segal_Jackson_419.jpg']
			}}
		/>
		<TeamCard
			props={{
				name: 'Ethan Headley',
				grade: 9,
				roles: ['Construction'],
				image: images['/src/lib/assets/team/Headley_Ethan_181.jpg']
			}}
			>My favorite part of robotics has been building the practice course and our robot. I also
			enjoy seeing how everyone's hard work comes together in our final product.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Calhoun Sandwisch',
				grade: 6,
				roles: ['Marketing']
			}}
			>Working on all the marketing projects.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Brayden Barnhart',
				grade: 10,
				roles: ['Construction', 'Driving'],
				image: images['/src/lib/assets/team/Barnhart_Brayden_19.jpg']
			}}
			>Working on all the marketing projects.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Emily Ernsthausen',
				grade: 6,
				roles: ['Construction']
			}}
			>Learning about the process of building a robot for competition
		</TeamCard>
	</div>
</main>
