<template>
	<div class="w-full">
		<label 
			:for="name" 
			class="block font-semibold text-gray-700 mb-1"
			v-if="label"
		>
			{{label}}
		</label>
		<select 
			:id="name" 
			class="block w-full border-gray-300 border-2 rounded"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"			
		>
			<option v-for="option in options" value="option">
				{{option}}
			</option>
		</select>
	</div>
</template>
<script>
export default {
	props: ['value', 'label', 'name', 'options'],
};
</script>