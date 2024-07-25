import { Size } from "@/type"


const url = `${process.env.NEXT_PUBLIC_URL}/sizes`


export default async function getSizes(): Promise<Size[]> {

  const res = await fetch(url);

  return res.json()
}
