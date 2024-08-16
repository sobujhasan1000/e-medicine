import { authKey } from "@/constants/authKey";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStore,
} from "../localStores";
import { get } from "http";
import { decodedToken } from "../jwt";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  console.log(Object);
  return setToLocalStore(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    // console.log(decodedData);
    return { ...decodedData };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
