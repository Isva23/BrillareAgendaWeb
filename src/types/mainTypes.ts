//Servicios type

export interface ServicesType{
    id : string
    category : string
    date : string
    description : string
    imageBase64 : string
    name : string
    price : number
}

// Citas type 
export interface Appointment {
    name: string;
    email: string;
    date: string;
    time: string;
    service : string;
  }