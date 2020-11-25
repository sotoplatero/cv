/* Import faunaDB sdk */
const faunadb = require('faunadb')
const Hubdb = require('hubdb')
var GithubDB = require('github-db').default;

/* export our lambda function as named "handler" export */
exports.handler = async (event) => {

  const cv = JSON.parse(event.body)
  var personalAccessToken = process.env.GITHUB_PERSONAL_TOKEN;

  var db = Hubdb({
   token: process.env.GITHUB_PERSONAL_TOKEN,
   username: 'sotoplatero',
   repo: 'db',
   branch: 'main'
  });

  db.add(cv, function() {
    db.list(function(err, res) {
      // [{
      //   path: '2e959f35c6022428943b9c96d974498d.json'
      //   data: { grass: 'green' }
      // }]
    });
  });

  // var options = {
  //   owner: 'sotoplatero', // <-- Your Github username
  //   repo: 'db', // <-- Your repository to be used a db
  //   path: 'cvs.json' // <- File with extension .json
  // };

  // // Require GithubDB
  // // Initialize it with the options from above.
  // var githubDB = new GithubDB(options);
  // githubDB.auth(personalAccessToken);
  // githubDB.connectToRepo();
  // githubDB.save(cv);

  /* configure faunaDB db with our secret */
  // const q = faunadb.query
  // const db = new faunadb.Client({
  //   secret: process.env.FAUNA_SERVER_KEY
  // })  
  // /* parse the string body into a useable JS object */

  // /* construct the fauna query */
  // return db.query( q.Create(q.Collection('docs'), { data: cv } ) )
  //   .then((response) => {
  //     console.log('success', response)
  //     /* Success! return the response with statusCode 200 */
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(response)
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('error', error)
  //     /* Error! return the error with statusCode 400 */
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(error)
  //     }
  //   })
}
