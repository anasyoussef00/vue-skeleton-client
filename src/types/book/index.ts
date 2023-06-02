export interface IBook {
  id: number;
  userId?: number;
  title: string;
  alternativeTitle: string;
  description: string;
  author: string;
  releaseDate: string;
}

// type TGender = 'M' | 'F';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
  birthdate: string;
  gender: string;
}

export interface IBookResp extends IBook {
  user: IUser;
}
