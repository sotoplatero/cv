const { v4: uuidv4 } = require('uuid');
const { Octokit } = require("@octokit/rest");

/* export our lambda function as named "handler" export */
exports.handler = async function(event, context) {

  let cv = JSON.parse(event.body)
  const date = Date();

  cv = {
    ...cv,
    updated_at: date,
    created_at: date,
    ip: event.headers['client-ip'],
  };

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  try {

    var id = uuidv4();
    var fileName = `${id}.json`;
    var fileContent = Buffer.from( JSON.stringify(cv), 'utf8' ).toString('base64') 

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

    return {
      statusCode: 400,
      body: JSON.stringify(err)
    }

  }


}
