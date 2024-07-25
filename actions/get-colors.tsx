import { Color } from "@/type"


const url = `${process.env.NEXT_PUBLIC_URL}/colors`


export default async function getColors(): Promise<Color[]> {

  const res = await fetch(url);

  return res.json()
}
