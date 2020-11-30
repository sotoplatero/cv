<template>
	<Btn color="red" @click.native.prevent="create"> 
		<svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
		</svg>    
		Guardar
	</Btn>
</template>
<script>
// import	Btn from './Btn'
export default {
	props: [ 'cv' ],
	// components: { Btn },
	methods: {
		async create() {
			let id;
			let cv = await this.$http.post( '/api/create', this.cv ).then( res => res.json() )
			this.$emit('on-save', cv)
		},
	}	
};
</script>