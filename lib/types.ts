export type TravelCategory = "Beach" | "Adventure" | "Cultural" | "Safari" | "City";

export interface HolidayPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  category: TravelCategory;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
}
