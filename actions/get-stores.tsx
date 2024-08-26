import { Store } from "@/type";

export default async function getStores(): Promise<Store[]> {
  const URL = `${process.env.NEXT_PUBLIC_GO_BACKEND}/stores`;

  const res = await fetch(URL);

  return res.json();
}
