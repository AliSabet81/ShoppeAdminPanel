import { instance } from "../../constants"


export const AddProductService =async (data:any) => {
    const res = await instance.post("/products/add",data)
    return res.data
}

export const GetProductsService =async () => {
    const res = await instance.get('/products')
    return res.data
}

export const GetSingleProductService = async (id: string): Promise<any> => {
    const res = await instance.get(`/products/${id}`);
    return res.data;
};

export const UpdateProducService = async (id: string, data: any) => {
    const res = await instance.put(`/products/update/${id}`,data);
    return res.data;
  };