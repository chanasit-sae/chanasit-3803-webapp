import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <div className="info">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={100} /><br/>
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
