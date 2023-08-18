import { instance } from "../../constants";

export const GetUsersService = async () => {
  const res = await instance.get("/user");
  return res.data;
};

export const DeleteUserService = async (id: string) => {
  const res = await instance.delete(`/user/delete/${id}`);
  return res.data;
};
