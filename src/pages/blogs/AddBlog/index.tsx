import { Button, Fab, InputAdornment, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import useAddBlog from "./useAddBlog";
import React from "react";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    handleAddBlog,
    setBlogFile,
    errors,
  } = useAddBlog();
  return (
    <div className="w-full h-screen flex flex-col gap-8 p-20 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">Add Blog</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleAddBlog)}
        className="flex flex-col gap-10 px-10 mt-10">
        <div className="grid grid-cols-2 gap-12">
          <label className="mx-20" htmlFor="upload-photo">
            <input
            multiple
              id="upload-photo"
              name="upload-photo"
              className="!w-3/4 hidden"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBlogFile(e.target.files)
              }
              type="file"
            />
            <Fab
              color="info"
              size="large"
              component="span"
              aria-label="add"
              className="!w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBlogFile(e.target.files)
              }
              variant="extended">
              <ImageIcon />
              Upload photo
            </Fab>
          </label>
          <TextField
            {...register("title")}
            error={Boolean(errors.title?.message)}
            label="title"
          />
          <TextField
            {...register("author")}
            error={Boolean(errors.author?.message)}
            label="author"
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
          <TextField
            {...register("category")}
            error={Boolean(errors.category?.message)}
            label="Category"
          />
        </div>
        <TextField
          {...register("desc")}
          error={Boolean(errors.desc?.message)}
          label="desc"
          rows={2}
          multiline
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          rows={3}
          multiline
          {...register("description")}
          error={Boolean(errors.description?.message)}
          label="Description"
        />
        <Button type="submit">Add Blog</Button>
      </form>
    </div>
  );
};

export default AddBlog;