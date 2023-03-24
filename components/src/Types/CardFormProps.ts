export type CardFormState = {
  name: string | undefined;
  word: string | undefined;
  date: Date;
  heard: string;
  feelings?: (string | undefined)[];
  faked: boolean;
  photo?: File | boolean;
};
