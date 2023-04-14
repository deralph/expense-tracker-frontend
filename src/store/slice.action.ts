import axios from "../extras/axios";
import { allActions } from "./allSlice";

export const fetcher =  () => {
    return async (dispatch:any)=>{
    try {
      dispatch(allActions.setloading(true));
      const { data } = await axios.get("expenses");
      console.log(data);
     dispatch(allActions.setuser(data.user));
     dispatch(allActions.setuserID(data.userId));
     dispatch(allActions.setloading(false));
      // console.log("in");
    } catch (error: any) {
      // console.log(error);
      if (error.response.status === 401) {
        dispatch(allActions.setloading(false));
        dispatch(allActions.setProbs(true));
      }
      dispatch(allActions.setloading(false));
    }
  }} ;