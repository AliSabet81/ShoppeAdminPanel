import { instance } from "../../constants"


export const AddProductService =async (data:any) => {
    const res = await instance.post("/products/add",data)
    return res.data
}