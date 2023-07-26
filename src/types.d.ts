interface Food {
  available: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  price: string;
}

type FoodInput = Omit<Food, "available" | "id">;
