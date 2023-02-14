// Below imports are defined in
// `external_node_modules` of [functions] in netlify.toml
// They are required for this function to run

import { Octokit } from '@octokit/core'

// This function is the one Netlify function runs on
// https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
exports.handler = async function (event, _) {

  const octokit = new Octokit();
  const response = await octokit.request("GET /orgs/{org}/repos", {
        org: "vfdev-5",
        type: "public",
      });

  return {
    statusCode: 200,
    body: response
  }
}