<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';
</script>

<div class="min-h-screen bg-neutral-700">
	<Navbar />
	<slot />
	<Footer />
</div>
