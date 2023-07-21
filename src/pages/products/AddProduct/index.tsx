import { Fab, Input, InputAdornment, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
const AddProduct = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 p-20 bg-gray-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">Add Product</h1>
      </div>
      <div className="flex flex-col gap-10 px-10">
        <label className="!w-full" htmlFor="upload-photo">
          <Input
            sx={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />
          <Fab
            color="info"
            size="large"
            component="span"
            aria-label="add"
            className="!w-1/2"
            variant="extended">
            <ImageIcon />
            Upload photo
          </Fab>
        </label>
        <div className="grid grid-cols-2 gap-10">
          <TextField label="name" />
          <TextField
            label="price"
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
          <TextField label="Category" />
          <TextField
            label="weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Dimentions"
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
          />
          <TextField label="colors" />
          <TextField label="material" />
          <TextField label="count" type="number" />
        </div>
        <TextField label="Description" sx={{paddingBottom:"40px"}} />
      </div>
    </div>
  );
};

export default AddProduct;
