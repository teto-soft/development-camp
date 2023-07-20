import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

export type RouterBackProps = {
  children?: React.ReactNode;
};

export const RouterBack: FC<RouterBackProps> = ({ children }) => {
  const router = useRouter();

  return router.isReady ? (
    <Button
      aria-label="戻る"
      variant="unstyled"
      w={0}
      onClick={() => {
        router.back();
      }}
    >
      {children}
    </Button>
  ) : null;
};
