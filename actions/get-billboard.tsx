import { Billboard, Category } from "@/type"


const URL = `${process.env.NEXT_PUBLIC_URL}/billboards`


export default async function getBillboard(id:string): Promise<Billboard> {

  const res = await fetch(`${URL}/${id}`);

  return res.json()
}
