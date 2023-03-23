export type CardFormState = {
  name: string;
  word: string;
  date: Date;
  heard: string;
  feelings?: (string | undefined)[];
  faked: boolean;
  photo?: FileList | boolean;
};
