export interface IJob {
  company: string,
  department: string,
  jobTitle: string
}

export interface IAddress {
  street: string,
  city: string,
  state: string,
  zipCode: string
  country: string
}
export interface IPhone {
  number: string,
  type: string
  isWhatsapp: boolean;
}
export interface IEmail {
  address: string,
  type: string
}
export interface IPerson {
  id: number,
  firstName: string,
  lastName: string,
  birthday: Date,
  job: Partial<IJob>,
  address: Partial<IAddress>,
  phones: IPhone[],
  emails: IEmail[]
}
