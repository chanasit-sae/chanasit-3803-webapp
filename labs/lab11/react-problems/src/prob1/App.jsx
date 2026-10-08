// src/App.jsx

function GitHubAvatar() {
  return (
    <img
      src="https://github.com/chanasit-sae.png"
      alt="My GitHub avatar"
      width="150"
      height="150"
    />
  );
}

function GitHubRepoURL() {
  return (
    <a
      href="https://github.com/chanasit-sae"
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub repository
    </a>
  );
}

export default function GitHubInfo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}
