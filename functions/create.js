const Hubdb = require('hubdb');
const Octokat = require('octokat');
var hat = require('hat');
var btoa = require('btoa');
var GitHub = require('github-api');
const { Octokit } = require("@octokit/rest");

/* export our lambda function as named "handler" export */
exports.handler = async function(event, context) {

  const cv = JSON.parse(event.body)

  var personalAccessToken = process.env.GITHUB_TOKEN;

  console.log(cv);

  const octokit = new Octokit({
    auth: personalAccessToken,
  });

  try {
    var id = hat();
    var fileName = `${id}.json`;
    var fileContent = btoa( event.body );

    const {data} = await octokit.repos.createOrUpdateFileContents({
        owner: 'sotoplatero',
        repo: 'db',
        path: fileName,
        message: '+',
        content: fileContent,
      })

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }     

  } catch (err) {
    console.error(err)
  }
  // var id = hat() + '.json';
  
  // return repo.contents(id).add({
  //     content: btoa( event.body ),
  //     branch: 'main',
  //     message: '+'
  // }).then( (info) => {
  //   console.log(info)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(id)
  //   }  

  // })
  // .then(null, (err) => console.error(err))



  // var db = Hubdb({
  //   token: process.env.GITHUB_TOKEN,
  //   username: 'sotoplatero',
  //   repo: 'db',
  //   branch: 'main'
  // });

  // console.log(Hubdb)

  // return db.add(cv, function(err, res, id) {

  //   if (err) {
  //     console.log('error', err)

  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(err)
  //     }      
  //   }

  //   console.log('success', id)
  //   /* Success! return the res with statusCode 200 */
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(cv)
  //   }    

  // });

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


}
