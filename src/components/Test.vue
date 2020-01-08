<template>
	<div>{{ test }}</div>
</template>

<script lang="ts">
import upperAnswer from '../answer';

export default {
	data: function() {
		text: upperAnswer
	},
	mounted: function() {
		console.log('hello');
	}
}
</script>