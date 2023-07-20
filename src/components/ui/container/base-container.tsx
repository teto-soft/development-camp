import { Container, ContainerProps } from '@chakra-ui/react';
import { FC } from 'react';

type BaseContainerProps = ContainerProps;

export const BaseContainer: FC<BaseContainerProps> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};
