export interface Van {
  description: string;
  hostId: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
}

export interface Vans {
  vans: Van[];
}
