export type TSectionPage =
  | "principal"
  | "image"
  | "text"
  | "video"
  | "code"
  | "markdown";

export interface ISectionPageProps {
  sectionPage: TSectionPage;
}
