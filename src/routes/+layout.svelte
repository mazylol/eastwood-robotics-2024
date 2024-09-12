<script>
    import Navbar from "../components/Navbar.svelte";

    import "../app.css";
</script>

<div class="min-h-screen bg-neutral-700">
    <Navbar />
    <slot />
</div>