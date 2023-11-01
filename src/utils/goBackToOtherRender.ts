import { RENDER_ALL_BLOG } from "../data/const";

export const goBackToOtherRender = (render: string): string => {
  const sectionID = Number(render[render.length - 1]);
  if (sectionID === 1) {
    return RENDER_ALL_BLOG;
  } else {
    return `section${sectionID - 1}`;
  }
};
