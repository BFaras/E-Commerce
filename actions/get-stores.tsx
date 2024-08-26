import { Store } from "@/type"


const url = `${process.env.NEXT_PUBLIC_URL_CMS}`


export default async function getStores(): Promise<Store[]> {
  const res = await fetch(url);
  return res.json()
}
