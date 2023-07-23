type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;

const USER_TABLE_NAME = 'user';
const TODO_TABLE_NAME = 'todos';
const SENTENCE_TABLE_NAME = 'sentence';
const STORY_TABLE_NAME = 'story';

export const TableNames = {
  sentence: SENTENCE_TABLE_NAME,
  story: STORY_TABLE_NAME,
  todo: TODO_TABLE_NAME,
  user: USER_TABLE_NAME,
} as const;
export type TableNameTypes = Unpacked<typeof TableNames>;

const USER_REFERENCE_VIEW_NAME = 'user_reference';

export const ViewNames = {
  userReference: USER_REFERENCE_VIEW_NAME,
};

export type ViewNameTypes = Unpacked<typeof ViewNames>;
