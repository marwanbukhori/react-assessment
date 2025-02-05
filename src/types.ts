export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}
