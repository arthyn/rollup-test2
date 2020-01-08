<template>
	<div style="border: 2px solid red;">
		<test></test>
	</div>
</template>

<script lang="ts">
import axios from 'axios';
import Test from './components/Test.vue';

export default {
	components: {
		Test
	},
	mounted: function() {
		axios.get("https://api.chucknorris.io/jokes/random").then(result => {
			console.log(result)
		})
	}
}
</script>