import type { STORAGE_KEY } from "./constants";

export type StringFormatterOptions = {
  removeCharacters?: string[];
  replaceCharactersWith?: string;
};

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

export const onToPascalCase = (
  str: string,
  options?: StringFormatterOptions,
) => {
  let val = str;

  if (options) {
    if (options.removeCharacters) {
      const regex = new RegExp(`[${options.removeCharacters.join("")}]`, "g");
      val = val.replace(regex, options.replaceCharactersWith || "");
    }
  }

  const pascalized = val
    .split(" ")
    .map(s => (!s ? "" : s?.[0]?.toUpperCase() + s?.substring(1).toLowerCase()))
    .join(" ");

  return pascalized;
};
