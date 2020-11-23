<template>


		<div class="w-full">
			<label 
				:for="name" 
				class="block font-medium text-gray-500 mb-1"
				v-if="label"
			>
				{{label}}
			</label>
			<input 
				:type="type || 'text'" 
				:id="name" 
				class="block w-full border-gray-300 rounded"
				:placeholder="placeholder"
				v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)"			
			>
		</div>
		
	
</template>
<script>
export default {
	props: ['value', 'label', 'name', 'type', 'placeholder'],
};
</script>