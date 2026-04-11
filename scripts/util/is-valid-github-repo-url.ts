import { t } from 'try';

export const isValidGithubRepoUrl = (url: string): boolean => {
  const [ok, _, result] = t(() => new URL(url));

  if (!ok) {
    return false;
  }

  const { protocol, hostname, pathname, search, hash } = result;

  if (protocol !== 'https:' || hostname !== 'github.com' || search !== '' || hash !== '') {
    return false;
  }

  const segments = pathname.split('/').filter((segment) => segment.length > 0);
  return segments.length === 2 && segments[0] === 'DockyardMods';
};
