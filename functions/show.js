// Credit to Josh Comeau 
const { Octokit } = require("@octokit/rest");

exports.handler = async (event) => {

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const { id } = event.queryStringParameters;
  const filename = `${id}.json`;
  console.log(octokit.repos)
  const {data} = await octokit.repos.getContent({
    owner: 'sotoplatero',
    repo: 'db',
    path: filename,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };

};