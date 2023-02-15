import { Octokit } from '@octokit/core';

const name = document.querySelector(".name");

window.changeColor = function () { 
  changeColor();  
}

window.fetchRepos = async function () { 
  await fetchRepos();  
}

async function fetchRepos() {
  console.log("Run fetchRepos");
  // const octo = new Octokit();
  // const data = octo.rest.repos.listForUser({ username: 'vfdev-5' });
  // console.log(data);

  const octokit = new Octokit({});
  const response = await octokit.request("GET /repos/pytorch/ignite/issues");
  
  // response.then(
  //   value => { console.log(value); }
  // );  
  console.log("Response: ");
  console.log(response["data"][0]);
}

function changeColor() {
  name.style.color = "blue";
}
