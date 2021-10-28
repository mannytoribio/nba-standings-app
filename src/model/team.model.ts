import { ObjectId } from "mongodb";

export interface Team {
  _id?: ObjectId,
  name: string,
  city: string,
  logo: string
}