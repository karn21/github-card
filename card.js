  var user = document.getElementById("github-profile-card").getAttribute('github-user')

  // const user = "karn21"
  var url = `https://api.github.com/users/${user}`
  fetch(url)
  .then((resp) => resp.json()) 
  .then(function(data) {
  	
  	document.getElementById("github-name").innerHTML = data.name
  	document.getElementById("github-name").href = data.html_url
  	document.getElementById("github-bio").innerHTML = data.bio
  	var following = document.getElementById("github-following")
  	following.innerHTML = data.following
  	following_url = data.html_url + "/following"
  	following.parentElement.href = following_url
  	var followers = document.getElementById("github-followers")
  	followers.innerHTML = data.followers
  	followers_url = data.html_url + "/followers"
  	followers.parentElement.href = followers_url
  	var repos = document.getElementById("github-repos")
  	repos.innerHTML = data.public_repos
  	repos_url = data.html_url + "?tab=repositories"
  	repos.parentElement.href = repos_url
    console.log(data)
    })

