export type BikeType = {
  id: number;
  type: string;
  price: string;
  description: string;
}

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  email: string;
}

export type UserBookings = {
  id: number;
  date: string;
  expiration: string;
  price: number;
  state: BookingState
}

export enum BookingState {
  BOOKED = "BOOKED",
  EXPIRED = "EXPIRED"
}
