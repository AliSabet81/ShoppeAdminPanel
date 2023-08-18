import { instance } from "../../constants";

export const AddBlogService = async (data: any) => {
  const res = await instance.post("/blogs/add", data);
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

export const GetBlogsService = async (
  searchAndFilterProps: ISearchAndFilter
) => {
  const queries = searchAndFilterQuery(searchAndFilterProps);
  const res = await instance.get(`/blogs`, { params: { ...queries } });
  return res.data;
};

export const DeleteBlogService = async (id: string) => {
  const res = await instance.delete(`/blogs/delete/${id}`);
  return res.data;
};

