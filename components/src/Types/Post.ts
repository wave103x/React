import { ReactNode } from "react";

interface TPost {
  id: number;
  title: string;
  body: string;
  children?: ReactNode;
};

export default TPost;
