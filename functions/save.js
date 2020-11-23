/* Import faunaDB sdk */
const faunadb = require('faunadb')

/* export our lambda function as named "handler" export */
exports.handler = async (event) => {
  /* configure faunaDB db with our secret */
  const q = faunadb.query
  const db = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY
  })  
  /* parse the string body into a useable JS object */
  const cv = JSON.parse(event.body)
  console.log('CV', cv)

  /* construct the fauna query */
  return db.query( q.Create(q.Collection('docs'), { data: cv } ) )
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    })
    .catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
