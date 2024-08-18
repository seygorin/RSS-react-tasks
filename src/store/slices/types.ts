export interface FormUserData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  termsAccepted: boolean;
  picture: File | null;
  country: string;
}

export interface StoredUserData {
  name: string;
  age: number | null;
  email: string;
  password: string;
  gender: string;
  termsAccepted: boolean;
  picture: string | null;
  country: string;
}
