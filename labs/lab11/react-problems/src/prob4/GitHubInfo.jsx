import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  const { imgURL, alt, url, followers } = userInfo;
  return (
    <li>
      <GitHubAvatar imgURL={imgURL} alt={alt} size={80} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {' '}{alt}
      </a>
      {followers > 10000 && ` (${followers} followers)`}
    </li>
  );
}
