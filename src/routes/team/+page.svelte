<script lang="ts">
	import TeamCard from '../../components/TeamCard.svelte';

	import placeholder from '$lib/assets/team/placeholder.png';
</script>

<main title="Team">
	<h1 class="text-center mt-16 text-6xl font-bold">The Team</h1>
	<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-4 my-4 mt-16">
		<TeamCard
			props={{
				name: 'Alyson Taylor',
				grade: 6,
				roles: ['Construction'],
				image: placeholder
			}}
		>
			Building things
		</TeamCard>
		<TeamCard
			props={{
				name: 'Caleb Abbey',
				grade: 9,
				roles: ['Construction'],
				image: placeholder
			}}
		>
			I enjoyed the construction of the robot. I love building things and hope to be an engineer one
			day.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Domanic Hollyday',
				grade: 9,
				roles: ['Construction', 'Driving', 'Spotting'],
				image: placeholder
			}}
		>
			Being able to build a robot, then seeing the robot progress and being able to do more things.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Nathan Stonerook',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook', 'Driving'],
				image: placeholder
			}}
		>
			The comradery, and building a robot
		</TeamCard>
		<TeamCard
			props={{
				name: 'Dylan Hemp',
				grade: 7,
				roles: ['Marketing', 'Display'],
				image: placeholder
			}}
		>
			I like being able to share ideas with everyone on my team, I also like how we all work
			together to create different things. I like how I feel working with everyone, it really feels
			like I am part of a team.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Layla Newman',
				grade: 10,
				roles: ['Construction', 'Engineering Notebook'],
				image: placeholder
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
				image: placeholder
			}}
		>
			Solving problems and building</TeamCard
		>
		<TeamCard
			props={{
				name: 'Sydney Bell',
				grade: 10,
				roles: ['Marketing', 'Engineering Notebook', 'Display'],
				image: placeholder
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
				image: placeholder
			}}
			>Building the course and building the robot. Another thing is being a mechanic for the robot.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Eddie Robinson',
				grade: 9,
				roles: ['Construction', 'Driving'],
				image: placeholder
			}}>Working with a team.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Annie Back',
				grade: 6,
				roles: ['Construction'],
				image: placeholder
			}}
		/>
		<TeamCard
			props={{
				name: 'Alex Back',
				grade: 7,
				roles: ['Marketing'],
				image: placeholder
			}}
		/>
		<TeamCard
			props={{
				name: 'Noah Schuerman',
				grade: 7,
				roles: ['Programming', 'Construction'],
				image: placeholder
			}}
		>
			Programming and seeing how fast the robot came together.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Evie Althaus',
				grade: 8,
				roles: ['Marketing', 'Video'],
				image: placeholder
			}}>Having fun with friends.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Henry Howard',
				grade: 11,
				roles: ['Marketing'],
				image: placeholder
			}}
		>
			Learning new things
		</TeamCard>
		<TeamCard
			props={{
				name: 'Noah Sikora',
				grade: 10,
				roles: ['Construction', 'Spotting'],
				image: placeholder
			}}
		>
			The competition</TeamCard
		>
		<TeamCard
			props={{
				name: 'Lauren Ellis',
				grade: 10,
				roles: ['Marketing', 'Display'],
				image: placeholder
			}}
			>My favorite part of our robotics program is building my public speaking skills and connecting
			with like-minded people.
		</TeamCard>
		<TeamCard
			props={{
				name: 'Nash Stacey',
				grade: 7,
				roles: ['Marketing'],
				image: placeholder
			}}
		>
			Problem solving</TeamCard
		>
		<TeamCard
			props={{
				name: 'Scott McKenzie',
				grade: 9,
				roles: ['Marketing'],
				image: placeholder
			}}>Showing the slides to sponsors.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Colton Miller',
				grade: 7,
				roles: ['Construction', 'Marketing', 'Display', 'T-Shirt'],
				image: placeholder
			}}
		>
			Remote control car</TeamCard
		>
		<TeamCard
			props={{
				name: 'Lexy Smith',
				grade: 7,
				roles: ['Construction', 'Driving', 'Spotting'],
				image: placeholder
			}}
		>
			My favorite parts of robotics are the actual processes of creating the robot and the course
			from raw materials and being able to see the end result afterwards.</TeamCard
		>
		<TeamCard
			props={{
				name: 'Carson Henline',
				grade: 7,
				roles: ['Programming', 'Construction', 'Display'],
				image: placeholder
			}}
		>
			Being part of a big team that all works together!
		</TeamCard>
		<TeamCard
			props={{
				name: 'Landon Porter',
				grade: 12,
				roles: ['Construction', 'Website', 'Engineering Notebook', 'Display'],
				image: placeholder
			}}
		>
			Having fun with all of the people that I have gotten the opportunity to bond with over all of
			these years while we all work toward a common goal. I also like to make the website, hello
			there!</TeamCard
		>
	</div>
</main>
