export interface ReviewType {
  date: string,
  id: number,
  comment: string,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }
}
