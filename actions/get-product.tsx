import { Product } from "@/type"


const URL = `${process.env.NEXT_PUBLIC_URL}/products`


export default async function getProduct(id:string): Promise<Product> {

  const res = await fetch(`${URL}/${id}`);

  return res.json()
}
