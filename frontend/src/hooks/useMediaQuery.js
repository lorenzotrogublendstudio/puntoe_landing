import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
  const getMatches = () => window.matchMedia?.(query).matches ?? false;

  const [matches, setMatches] = useState(() => getMatches());

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener('change', listener);
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
