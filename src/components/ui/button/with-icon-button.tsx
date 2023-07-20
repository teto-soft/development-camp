import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

export type WithIconButtonProps = Omit<ButtonProps, 'variant'> & {
  variant?: ButtonProps['variant'] | 'menu';
};

export const WithIconButton: FC<ButtonProps> = ({
  children,
  leftIcon,
  ...props
}) => {
  return (
    <Button
      alignItems="center"
      display="flex"
      fontWeight="normal"
      gap="0.5rem"
      {...props}
    >
      <Box pt="0.1rem">{leftIcon}</Box>
      <Box>{children}</Box>
    </Button>
  );
};
