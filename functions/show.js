// Credit to Josh Comeau 
const { Octokit } = require("@octokit/rest");

exports.handler = async (event) => {

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { id } = event.queryStringParameters;
  const filename = `${id}.json`;
  console.log(event.headers['client-ip'])
  const {data} = await octokit.repos.getContent({
    owner: 'sotoplatero',
    repo: 'db',
    path: filename,
  });

  // let bufferObj = Buffer.from(data.content, "base64"); 
  
  // Encode the Buffer as a utf8 string 
  let cv = Buffer.from(data.content, 'base64').toString('utf8')  

  return {
    statusCode: 200,
    body: cv,
  };

};