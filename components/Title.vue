<template>
<div class="flex border-b">
	<h2 class="font-bold text-lg">{{label}}</h2>
	<slot></slot>
</div>
</template>
<script>
export default {
	props: [ 'label' ],
};
</script>