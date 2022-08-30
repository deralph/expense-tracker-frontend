import { GiMoneyStack, GiClothes } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import {
  MdLocalGroceryStore,
  MdOutlineFoodBank,
  MdElectricalServices,
  MdToys,
  MdOutlineEmojiTransportation,
} from "react-icons/md";
import { BiDrink } from "react-icons/bi";

const useIcons = () => {
  const allIcons = [
    {
      title: "Clothes",
      Icon: GiClothes,
      color: "#993377",
    },
    {
      title: "Grocery",
      Icon: MdLocalGroceryStore,
      color: "skyblue",
    },
    {
      title: "Drinks",
      Icon: BiDrink,
      color: "rgba(165, 42, 42, 0.514)",
    },
    {
      title: "Foods",
      Icon: MdOutlineFoodBank,
      color: "peachpuff",
    },
    {
      title: "Electric",
      Icon: MdElectricalServices,
      color: "blueviolet",
    },
    {
      title: "Home",
      Icon: FaHome,
      color: "yellowgreen",
    },
    {
      title: "Transport",
      Icon: MdOutlineEmojiTransportation,
      color: "grey",
    },
    {
      title: "Accesories",
      Icon: GiClothes,
      color: "rgb(255, 0, 157)",
    },
    {
      title: "Micellenous",
      Icon: MdToys,
      color: "yellow",
    },
    {
      title: "Others",
      Icon: GiMoneyStack,
      color: "rgb(255, 0, 157)",
    },
  ];
  return allIcons;
};
export default useIcons;
