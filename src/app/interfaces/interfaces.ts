export interface Menu{
  icon:string;
  name:string;
  redirectTo:string;
}

export interface Usuario{
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  password?:string;
}
