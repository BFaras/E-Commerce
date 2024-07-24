import { Product } from "@/type"
import queryString from "query-string";


const URL = `${process.env.NEXT_PUBLIC_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}


export default async function getProducts(query:Query): Promise<Product[]> {
    const url = queryString.stringifyUrl({
        url:URL,
        query: {
            colorId: query.colorId,
            sizeId:query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    })
  const res = await fetch(url);

  return res.json()
}
