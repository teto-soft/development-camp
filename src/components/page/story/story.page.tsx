import { HStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { memo, useEffect, useState } from 'react';

import StoryDetail from '@/components/page/story/story-detail/story-detail';
import StoryManagementPanel from '@/components/page/story/story-management-panel/story-management-panel';
import { BaseLayout } from '@/components/ui';
import { useAppStore } from '@/share/store';
import { useFetchUser } from '@/share/usecase/user';

export interface Sentence {
  name: string;
  src: string;
  text: string;
}

const StoryPage: NextPage = memo(() => {
  const fetchUser = useFetchUser();
  const user = useAppStore((state) => state.user);

  const [sentences, setSentences] = useState<Sentence[]>([
    {
      name: 'Dan Abrahmov',
      src: 'https://bit.ly/dan-abramov',
      text: 'Hello World',
    },
    {
      name: 'Kola Tioluwani',
      src: 'https://bit.ly/tioluwani-kolawole',
      text: 'This day is beautiful. I am happy. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
    {
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
      text: 'I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap I am happy to be here today. I am learning Chakra UI today and it makes me hap',
    },
  ]);

  useEffect(() => {
    fetchUser('mock-id');
  }, []);

  return (
    <BaseLayout mx="0" overflowX="hidden" px="0">
      <HStack h="100vh" overflowX="hidden" spacing="12">
        <StoryManagementPanel sentences={sentences} />
        <StoryDetail sentences={sentences} />
      </HStack>
    </BaseLayout>
  );
});

StoryPage.displayName = 'TopPage';

export default StoryPage;
