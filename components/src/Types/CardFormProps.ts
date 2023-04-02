export type CardFormState = {
  name: string | undefined;
  word: string | undefined;
  date: Date;
  heard: string;
  feelings?: string[] | boolean;
  faked: string;
  photo: FileList;
  confirm?: string;
};
