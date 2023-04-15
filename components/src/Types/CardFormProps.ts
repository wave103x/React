export type CardFormState = {
  name: string | undefined;
  word: string | undefined;
  date: number;
  heard: string;
  feelings?: string[] | boolean;
  faked: string;
  photo: FileList;
  confirm?: string;
};

export type CardFormSumbit = Omit<CardFormState, 'photo'> & { photo: string };
