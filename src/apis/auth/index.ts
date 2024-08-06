import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponseType } from "../axios.config";
import { redirect } from "react-router-dom";
import { ApiUrl } from "../apiUrl";

export type PayloadLoginModel = {
  phone: string,
  password: string,
  system_code: string,
}

export const login = createAsyncThunk("login", async (data: PayloadLoginModel) => {
  const response = await axios.post(`${ApiUrl.auth}/login`, data);
  const resData: AxiosResponseType = response.data;
  // localStorage.setItem("userInfo", JSON.stringify(resData));
  return resData;
});

export const logout = createAsyncThunk("logout", async () => {
  localStorage.clear();
  return redirect("/login");
});