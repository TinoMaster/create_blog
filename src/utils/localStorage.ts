export const localStorage = (key: string, value?: string | object) => {
  if (!value && typeof key === "string") {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
  window.localStorage.setItem(key, JSON.stringify(value));
  return undefined;
};
