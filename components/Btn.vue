<template>
  <button :class="klass">
    <slot></slot>
  </button>	
</template>

<script>
export default {
	props: [ 'color' ],
	name: 'Btn',
	data() {
		return {
			klass: `inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-${this.color || 'gray'}-700 hover:bg-${this.color || 'gray'}-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${this.color || 'gray'}-600`,
		}
	},	
};
</script>