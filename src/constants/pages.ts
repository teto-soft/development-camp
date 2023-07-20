type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;

// 共通
const ROOT_PAGE = '/';

export const Pages = {
  root: ROOT_PAGE,
} as const;
export type PageTypes = Unpacked<typeof Pages>;
