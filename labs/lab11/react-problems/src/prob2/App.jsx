import { GitHubAvatar, GitHubRepoURL } from '../shared/GitHubComponents.jsx';
import './App.css';

export default function App() {
  const userInfo = {
    url: 'https://github.com/chanasit-sae',
    imgURL: 'https://avatars.githubusercontent.com/u/188834428',
    alt: 'Chanasit Saetkhong',
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} /><br/>
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
