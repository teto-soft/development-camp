import { Box, ContainerProps } from '@chakra-ui/react';
import { forwardRef, ReactElement } from 'react';

import { BaseContainer } from '@/components/ui/container';

type BaseLayoutPropsType = {
  footer?: ReactElement;
  header?: ReactElement;
} & ContainerProps;

export const BaseLayout = forwardRef<HTMLDivElement, BaseLayoutPropsType>(
  ({ children, footer, header, ...containerProps }, ref) => {
    return (
      <Box h="100%" ref={ref}>
        {header && header}
        <BaseContainer {...containerProps}>{children}</BaseContainer>
        {footer && footer}
      </Box>
    );
  },
);

BaseLayout.displayName = 'BaseLayout';
