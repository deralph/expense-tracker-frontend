import { res } from "../pages/dashboard";
import axios from "./axios";

interface color {
  Clothes: string;
  Grocery: string;
  Drinks: string;
  Electric: string;
  Home: string;
  Transport: string;
  Micellenous: string;
  Foods: string;
  Others: string;
  Accesories: string;
}

export const Category_colors: color | any = {
  Clothes: "#993377",
  Grocery: "skyblue",
  Drinks: "rgba(165, 42, 42, 0.514)",
  Electric: "blueviolet",
  Home: "yellowgreen",
  Transport: "grey",
  Micellenous: "yellow",
  Foods: "peachpuff",
  Others: "rgb(255, 0, 157)",
  Accesories: "burlywood",
};

export const sets = (set: res[], type: string) => [
  ...new Set(set.map((expense: any) => expense[type])),
];

export const months_and_their_figure: any = {
  "01": "january",
  "02": "febuary",
  "03": "march",
  "04": "april",
  "05": "may",
  "06": "june",
  "07": "july",
  "08": "august",
  "09": "september",
  10: "october",
  11: "november",
  12: "december",
};
export type mAf = { month: string; monthInFigure: string };

export const getMonth = (result: res[]) => {
  let month_and_figure: mAf[] = [];
  const monthFigure = [
    ...new Set(result.map((result: res) => (result.date!).split("-")[1])),
  ];
  monthFigure.map((monthInFigure) => {
    const month = months_and_their_figure[monthInFigure];
    const new_info = { month, monthInFigure };
   return month_and_figure.push(new_info);
  });

  return month_and_figure;
};

export const reduceFunction = (group: any[]) => {
  const percent = group.reduce((acc, real) => {
    const { productNo, price } = real;
    const productNum = parseInt(productNo);
    const productPrice = parseInt(price);
    const realTotal = productNum * productPrice;
    return acc + realTotal;
  }, 0);
  return percent;
};

export const logout = async (navigate: Function, setuser: Function) => {
  // e.preventDefault();
  try {
     await axios.get("auth/logout");
    // console.log(data);
    setuser("");
    navigate("/signin");
  } catch (error) {
    console.log(error);
  }
};
