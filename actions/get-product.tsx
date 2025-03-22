import { Product } from "@/type"


const URL = `${process.env.NEXT_PUBLIC_URL}/products`


export default async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${URL}/${id}`);
  const result: Product = await res.json();

  return result?.isArchived === false ? result : null;
}