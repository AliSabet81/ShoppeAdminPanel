import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UpdateProductService,
} from "../../api/services/product";
interface IEditModal {
  id: string;
  img: string;
  name: string;
  price: string;
  count: string;
  onSubmit: () => void;
}
const EditProductSchema = yup.object({
  name: yup.string().required(),
  price: yup.number().required(),
  count: yup.number().required(),
});
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};
const EditProductModal = (i: IEditModal) => {
  const { register, handleSubmit, reset } = useForm<any>({
    resolver: yupResolver(EditProductSchema),
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    reset({ name: i.name, price: i.price, count: i.count });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleEditProduct = React.useCallback(async (data: { name: string | Blob; price: string | Blob; count: string | Blob; }) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("count", data.count);
    await UpdateProductService(i.id, formData);
    i.onSubmit();
    setOpen(false);
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        sx={{ borderRadius: 2 }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box display={"flex"} gap={6} sx={style}>
            <img className="w-60 rounded-lg" src={i.img} alt="" />
            <Box
              component={"form"}
              onSubmit={handleSubmit(handleEditProduct)}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
              <TextField {...register("name")} fullWidth />
              <TextField {...register("price")} fullWidth />
              <TextField {...register("count")} fullWidth />
              <Button type="submit" size="large" variant="contained">
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditProductModal;
