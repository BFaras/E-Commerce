import { Category } from "@/type"


const URL = `${process.env.NEXT_PUBLIC_URL}/categories`


export default async function getCategory(id:string): Promise<Category> {

  const res = await fetch(`${URL}/${id}`);

  return res.json()
}
