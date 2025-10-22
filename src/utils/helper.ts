import type { STORAGE_KEY } from "./constants";

export const onSaveLocalStorage = (key: STORAGE_KEY, val: string) => {
  localStorage.setItem(key, val);
};

export const onGetLocalStorage = (key: STORAGE_KEY) => {
  return localStorage.getItem(key);
};

export const onOpenUrl = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const onScrollToAnchor = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
