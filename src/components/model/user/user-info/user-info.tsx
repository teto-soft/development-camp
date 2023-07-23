import { SettingsIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface UserInfoProps {
  avatarSrc: string;
  name: string;
}

export default function UserInfo({ avatarSrc, name }: UserInfoProps) {
  return (
    <Flex alignItems="center" mb="4">
      <Avatar mr="4" src={avatarSrc} />
      <Text>{name}</Text>
      <SettingsIcon ml="10px" />
    </Flex>
  );
}
