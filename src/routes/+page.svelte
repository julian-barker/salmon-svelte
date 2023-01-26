<script>
	import salmon_gif from '$lib/images/salmon.gif';
	import chinook from '$lib/images/chinook.jpg';
	import cutter from '$lib/images/cutter.jpeg';
	import family from '$lib/images/family.jpg';
	import fish from '$lib/images/fish.jpg';
	import salmon from '$lib/images/salmon.png';
	import frosted_cookie from '$lib/images/frosted-cookie.jpg';
	import shirt from '$lib/images/shirt.jpg';
	import Carousel from 'svelte-carousel';

	let carousel;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="hero">
		<img class="static" src={salmon_gif} alt="A nice salmon.">
	</div>
	<h1>Slammin' Salmon Cookies</h1>

	<h2>Image Gallery</h2>
	<div class="carousel">
		<Carousel
			bind:this={carousel}
		>
			<img src={chinook} alt="chinook">
			<img src={cutter} alt="cutter">
			<img src={family} alt="family">
			<img src={fish} alt="fish">
			<img src={frosted_cookie} alt="frosted-cookie">
			<img src={salmon} alt="salmon">
			<img src={shirt} alt="shirt">
		</Carousel>
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
		color:coral
	}

	h2{
		margin-top: 4rem;
		font-size: 2rem;
	}

	.carousel {
		width: 50%;
	}

	.carousel img {
		object-fit: contain;
	}
</style>
