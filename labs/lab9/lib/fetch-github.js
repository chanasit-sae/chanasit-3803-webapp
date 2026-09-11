async function setName() {
  try {
    const githubUser = await fetch('https://api.github.com/users/chanasit-sae');
    if (!githubUser.ok) {
      throw new Error(`GitHub API error with status ${githubUser.status}`);
    }
    const githubUserInfo = await githubUser.json();

    const username = githubUserInfo.name;
    const profileUrl = githubUserInfo.html_url;
    const avatar_url = githubUserInfo.avatar_url;

    const headerElement = document.getElementById('name');
    headerElement.textContent = username;

    const imageElement = document.getElementById('avatar-image');
    imageElement.src = avatar_url;

    headerElement.addEventListener("click", () => {
      window.open(profileUrl, "_blank");
    });
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
}

setName();

