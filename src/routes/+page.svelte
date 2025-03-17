<script lang="ts">
	let name = '';
	let email = '';
	let message = '';
</script>

<form class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
	<h2 class="text-2xl font-semibold text-center mb-6">Contact Us</h2>

	<div class="mb-4">
		<label for="name" class="block text-lg font-medium mb-2">Name</label>
		<input
			type="text"
			id="name"
			bind:value={name}
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Enter your name"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="email" class="block text-lg font-medium mb-2">Email</label>
		<input
			type="email"
			id="email"
			bind:value={email}
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Enter your email"
			required
		/>
	</div>

	<div class="mb-4">
		<label for="message" class="block text-lg font-medium mb-2">Message</label>
		<textarea
			id="message"
			bind:value={message}
			class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			placeholder="Your message"
			rows="4"
			required
		></textarea>
	</div>

	<div class="flex justify-center">
		<button
			type="submit"
			class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-bold uppercase shadow-2xl hover:scale-105 active:scale-95"
		>
			Send Message
		</button>
	</div>
</form>
