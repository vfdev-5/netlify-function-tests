// Below imports are defined in
// `external_node_modules` of [functions] in netlify.toml
// They are required for this function to run

const { Octokit } = require("@octokit/core");
// import { Octokit } from '@octokit/core';

// This function is the one Netlify function runs on
// https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
exports.handler = async function (event, _) {

  const octokit = new Octokit({});
  const response = await octokit.request("GET /repos/pytorch/ignite/issues")

  return {statusCode: 200, body: "It works, Output: " + response["data"][0]["url"]};
}
