import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddBlogService } from "../../../api/services/blog";
import { useState } from "react";

const useAddBlog = () => {
  const AddBlogSchema = yup.object({
    title: yup.string().required(),
    author: yup.string().required(),
    category: yup.string().required(),
    desc: yup.string().required(),
    description: yup.string(),
  });
  interface IAddBlog {
    title: string,
    author: string,
    category: string,
    desc: string,
    description: string | undefined,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddBlog>({
    resolver: yupResolver(AddBlogSchema),
    mode: "onSubmit",
  });
  const [blogFile, setBlogFile] = useState<FileList | null>();

  const handleAddBlog = async (data: any) => {
    const formData = new FormData();
    const date = Date.now().toString()
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("category", data.category);
    formData.append("desc", data.desc);
    formData.append("description", data.description);
    formData.append("date", date);
    formData.append("img", blogFile ? blogFile[0] : "");
    formData.append("img2", blogFile ? blogFile[0] : "");
    AddBlogService(formData);
  };
  return {
    register,
    handleSubmit,
    handleAddBlog,
    setBlogFile,
    errors,
  };
};

export default useAddBlog;
