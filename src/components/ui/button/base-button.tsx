import { Button, ButtonProps, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

export type BaseButtonPropsType = ButtonProps & {
  isLoading?: boolean;
};

export const BaseButton: FC<BaseButtonPropsType> = ({
  children,
  isLoading,
  ...props
}) => {
  return (
    <Button
      colorScheme="brand"
      leftIcon={isLoading ? <Spinner color="white" size="sm" /> : undefined}
      size="sm"
      {...props}
    >
      {children}
    </Button>
  );
};
