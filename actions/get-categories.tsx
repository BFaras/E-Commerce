import { Category } from "@/type"


const url = `${process.env.NEXT_PUBLIC_URL}/categories`


export default async function getCategories(): Promise<Category[]> {

  console.log(process.env.NEXT_PUBLIC_URL)
  const res = await fetch(url);

  return res.json()
}
