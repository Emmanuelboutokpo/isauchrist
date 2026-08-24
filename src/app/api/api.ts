"use server";
import { API } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export async function getProducts() {
  let data = null;
  const { userId, getToken } = await auth();
  const token = await getToken();

await axios
    .get(API, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "X-User-Id": userId,
      },
    })
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
    
  if(data === null || undefined){
		    return null;
  }
	return data; 
    
}