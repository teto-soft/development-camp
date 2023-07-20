type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;

const USER_TABLE_NAME = 'users';

export const TableNames = {
  user: USER_TABLE_NAME,
} as const;
export type TableNameTypes = Unpacked<typeof TableNames>;

const USER_REFERENCE_VIEW_NAME = 'user_reference';

export const ViewNames = {
  userReference: USER_REFERENCE_VIEW_NAME,
};

export type ViewNameTypes = Unpacked<typeof ViewNames>;
