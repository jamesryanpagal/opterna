import type { STORAGE_KEY } from "./constants";

export const onSaveLocalStorage = (key: STORAGE_KEY, val: string) => {
  localStorage.setItem(key, val);
};

export const onGetLocalStorage = (key: STORAGE_KEY) => {
  return localStorage.getItem(key);
};
