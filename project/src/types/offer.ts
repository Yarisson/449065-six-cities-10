export interface Location {
  latitude: number;
  longitude: number;
}

export interface Offer {
  id: number,
  img: string,
  name: string,
  price: number,
  type: string,
  premium: boolean,
  active: boolean,
  rating: number,
  isFavorite: boolean,
  location: Location,
  city: string,
}
