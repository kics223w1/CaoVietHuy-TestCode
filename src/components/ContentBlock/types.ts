export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: {
    title: string;
    color?: string;
  }[];
  t: any;
  id: string;
  direction: "left" | "right";
  imagePosition?: "left" | "right"; // Add this new prop
}
