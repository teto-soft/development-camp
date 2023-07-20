import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export type BaseFormItemProps = {
  children?: ReactNode;
  errorMessage?: string;
  isInvalid: boolean;
  isRequired?: boolean;
  label?: string;
  subLabel?: string;
};

export const BaseFormContainer: FC<BaseFormItemProps> = ({
  children,
  errorMessage,
  isInvalid,
  isRequired,
  label,
  subLabel,
}) => {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} minH="95px">
      {label && (
        <Flex alignItems="center" justifyContent="space-between">
          <FormLabel>{label}</FormLabel>
          {subLabel && (
            <Text color="gray.500" fontSize="xx-small">
              {subLabel}
            </Text>
          )}
        </Flex>
      )}
      {children}
      <FormErrorMessage fontSize="xx-small">{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
