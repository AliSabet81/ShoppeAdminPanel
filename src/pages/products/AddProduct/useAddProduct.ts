import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductService } from "../../../api/services/product";
import { useState } from "react";

const useAddProduct = () => {
    const AddProductSchema = yup.object({
        name: yup.string(),
        price: yup.number(),
        count: yup.number(),
        category: yup.string(),
        weight: yup.string(),
        dimentions: yup.string(),
        colors: yup.string(),
        material: yup.string(),
        description: yup.string(),
    })
    const { register, handleSubmit,formState: { errors } } = useForm<any>({
        resolver: yupResolver(AddProductSchema),
        mode:"onSubmit"
      });
  const [productFile,setProductFile] = useState<FileList | null>()

    const handleAddProduct =async (data:any) => {
        const formData = new FormData()
        formData.append('name',data.name)
        formData.append('price',data.price)
        formData.append('category',data.category)
        formData.append('weight',data.weight)
        formData.append('dimentions',data.dimentions)
        formData.append('colors',data.colors)
        formData.append('material',data.material)
        formData.append('count',data.count)
        formData.append('description',data.description)
        formData.append('img',productFile ? productFile[0] : '')
        console.log(productFile)
        AddProductService(formData)
        console.log(formData);
        
    }
    return {register,handleSubmit,handleAddProduct,setProductFile,errors};
}
 
export default useAddProduct;