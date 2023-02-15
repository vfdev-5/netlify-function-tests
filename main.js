import { Octokit } from '@octokit/core';
const output_text = document.querySelector(".output_text");

window.fetchRepos = async function () { 
  await fetchRepos();  
}

async function fetchRepos() {
  console.log("Run fetchRepos");

  const octokit = new Octokit({});
  const response = await octokit.request("GET /repos/pytorch/ignite/issues");
  
  console.log("Response: ");
  console.log(response["data"][0]);
  output_text.innerHTML = "It works, Output: " + response["data"][0]["url"];
}
