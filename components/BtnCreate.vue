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
		async create() {
			// this.$http.post('https://micurriculum.netlify.com/api/create', this.cv)
		//   db.query( q.Create(q.Collection('docs'), { data: this.cv } ) )
		//     .then((response) => {
		//       console.log('success', response)
		//     })
		//     .catch((error) => {
		//       console.log('error', error)
		//     })
			fetch('https://mycurriculum.netlify.com/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},				
			}).then(res => console.log(res))
			// const data = await res.json()
			// console.log(data)
		},
	}	
};
</script>