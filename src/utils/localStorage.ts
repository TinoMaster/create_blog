import { WritableDraft } from "immer/dist/internal.js";
import { IBlog, ISectionBlog } from "../types/blog.type";

export const localStorage = (key: string, value?: string | object) => {
  if (!value && typeof key === "string") {
    return JSON.parse(window.localStorage.getItem(key)!);
  }
  window.localStorage.setItem(key, JSON.stringify(value));
  return undefined;
};

export const sortIdsbeforeRemove = (
  id: ISectionBlog["id"],
  state: WritableDraft<IBlog>
) => {
  const { sections } = state;
  const newState: IBlog = state;
  if (id !== sections[sections.length - 1].id) {
    const index = sections.findIndex((section) => section.id === id);
    const newSections = sections.slice(index + 1);
    newSections.forEach((section) => {
      section.id = section.id - 1;
    });
    newState.sections = [...sections.slice(0, index), ...newSections];
  } else {
    newState.sections = sections.slice(0, sections.length - 1);
  }
  return newState;
};
