import { instance } from "../../constants";

export const AddProductService = async (data: any) => {
  const res = await instance.post("/products/add", data);
  return res.data;
};

interface ISearchAndFilter {
  pageNumber?: number;
  pageSize?: number;
  searchWord?: string;
}

export const searchAndFilterQuery = (
  searchAndFilterProps: ISearchAndFilter
) => {
  const { pageNumber, pageSize, searchWord } = searchAndFilterProps;
  if (searchWord) {
    return {
      pageNumber: pageNumber,
      pageSize: pageSize,
      searchWord: searchWord,
    };
  }
  return {
    pageNumber: pageNumber,
    pageSize: pageSize,
  };
};

export const GetProductsService = async (
  searchAndFilterProps: ISearchAndFilter
) => {
  const queries = searchAndFilterQuery(searchAndFilterProps);
  const res = await instance.get(`/products`, { params: { ...queries } });
  return res.data;
};

// export const GetProductsService = async () => {
//   const res = await instance.get("/products");
//   return res.data;
// };

export const GetSingleProductService = async (id: string): Promise<any> => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};

export const UpdateProductService = async (id: string, data: any) => {
  const res = await instance.put(`/products/update/${id}`, data);
  return res.data;
};

export const DeleteProductService = async (id: string) => {
  const res = await instance.delete(`/products/delete/${id}`);
  return res.data;
};

