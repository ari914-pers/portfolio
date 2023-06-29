import { APP_TRANSITION_ITEM } from '@/types/app.type';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const usePageTransition = (path: APP_TRANSITION_ITEM['path']) => {
  const router = useRouter();

  const handleTransition: MouseEventHandler = () => {
    router.push(path);
  };

  return [handleTransition] as [typeof handleTransition];
};

export default usePageTransition;
