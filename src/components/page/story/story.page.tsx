import { HStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { memo, useEffect } from 'react';

import StoryDetail from '@/components/page/story/story-detail/story-detail';
import StoryManagementPanel from '@/components/page/story/story-management-panel/story-management-panel';
import { BaseLayout } from '@/components/ui';
import { useAppStore } from '@/share/store';
import { useSentenceStore } from '@/share/store/sentence-store/sentence.store';
import { useFetchSentences } from '@/share/usecase/sentences/use-fetch-sentences';
import { useFetchUser } from '@/share/usecase/user';

export const useSentenceList = () => {
  const sentences = useSentenceStore((store) => store.sentences);
  const fetchSentences = useFetchSentences();

  useEffect(() => {
    fetchSentences();
  }, [fetchSentences]);

  return { sentences };
};

const StoryPage: NextPage = memo(() => {
  const fetchUser = useFetchUser();
  const user = useAppStore((state) => state.user);

  const { sentences } = useSentenceList();

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
