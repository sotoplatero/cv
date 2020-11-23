<template>
    <button  
    	@click.prevent="create"
	    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">
      Publicar
    </button>    	
</template>
<script>
export default {
	props: [ 'cv' ],
	methods: {
		create() {
		  db.query( q.Create(q.Collection('docs'), { data: this.cv } ) )
		    .then((response) => {
		      console.log('success', response)
		    })
		    .catch((error) => {
		      console.log('error', error)
		    })
		},
	}	
};
</script>