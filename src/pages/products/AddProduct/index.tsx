import { Button, Fab, Input, InputAdornment, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import useAddProduct from "./useAddProduct";
import React from "react";

const AddProduct = () => {
  const { register, handleSubmit, handleAddProduct, setProductFile, errors } =
    useAddProduct();
  return (
    <div className="w-full h-screen flex flex-col gap-8 p-20 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">Add Product</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="flex flex-col gap-8 px-10">
        
        <label className="!w-full" htmlFor="upload-photo">
          <Input
            sx={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductFile(e.target.files)
            }
            type="file"
          />
          <Fab
            color="info"
            size="large"
            component="span"
            aria-label="add"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductFile(e.target.files)
            }
            className="!w-1/2"
            variant="extended">
            <ImageIcon />
            Upload photo
          </Fab>
        </label>
        <div className="grid grid-cols-2 gap-8">
          <TextField
            {...register("name")}
            error={Boolean(errors.name?.message)}
            label="name"
          />
          <TextField
            {...register("price")}
            error={Boolean(errors.price?.message)}
            label="price"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
          <TextField
            {...register("category")}
            error={Boolean(errors.category?.message)}
            label="Category"
          />
          <TextField
            {...register("weight")}
            error={Boolean(errors.weight?.message)}
            label="weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            {...register("dimentions")}
            error={Boolean(errors.dimentions?.message)}
            label="Dimentions"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
          <TextField
            {...register("colors")}
            error={Boolean(errors.colors?.message)}
            label="colors"
          />
          <TextField
            {...register("material")}
            error={Boolean(errors.material?.message)}
            label="material"
          />
          <TextField
            {...register("count")}
            error={Boolean(errors.count?.message)}
            label="count"
            type="number"
          />
        </div>
        <TextField
          {...register("description")}
          error={Boolean(errors.description?.message)}
          label="Description"
        />
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
