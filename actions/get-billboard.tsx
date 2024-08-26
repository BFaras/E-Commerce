import { Billboard} from "@/type"


const URL = `${process.env.NEXT_PUBLIC_URL}/billboards`



export default async function getBillboard(storeId:string): Promise<Billboard> {

  const URL = `${process.env.NEXT_PUBLIC_GO_BACKEND}/stores/${storeId}/billboards/active`

  const res = await fetch(URL);

  return res.json()
}
