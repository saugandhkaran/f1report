export interface Circuit {
  circuitId: string;
  circuitName: string;
  Location: {
    country: string,
    lat: string,
    long: string,
    locality: string
  };
}
