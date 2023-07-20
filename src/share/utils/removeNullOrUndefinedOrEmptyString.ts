export const removeNullOrUndefinedOrEmptyString = (obj: object) => {
  return Object.fromEntries(
    Object.entries(obj ?? {}).filter(
      ([_, value]) => value != null && value !== '',
    ),
  );
};
