import { useLayoutEffect, useEffect } from 'react';
import { useRouter } from 'next/router';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = ({ children }) => {
  const router = useRouter();
  const pathname = router.asPath;

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
};

export default ScrollToTop;
