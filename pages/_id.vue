<template>
  <div>
  	<Header />
    <h1>{{ cv.fullname }}</h1>
    <p>{{ cv.email }}</p>
  </div>
</template>

<script>
const faunadb = require('faunadb')
const q = faunadb.query
const db = new faunadb.Client({
  secret: process.env.FAUNA_ADMIN_KEY
})  

export default {
    data() {
      return {
        cv: {}
      }
    },	
	async fetch({$http, params }) {
		await $http.get( '/api/show?id=' + params.id )
		// db.query(
		//   q.Get(q.Ref(q.Collection('docs'), this.$nuxt.context.params.id ))
		// )
		// .then((ret) => this.cv = ret.data )
	}
};
</script>