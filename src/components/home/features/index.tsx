import React from "react";
import Feature from "./Feature";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdTrackChanges, MdOutlineMonitor } from "react-icons/md";

const Features:React.FC = () => {
  const feat = [
    {
      id: 1,
      Icon: MdOutlineMonitor,
      title: "Monitor Your Spendings",
      desc: "Say goodbye to spreadsheet with customizable budget and update your style",
    },
    {
      id: 2,
      Icon: MdTrackChanges,
      title: "Track Your Spending",
      desc: "Stay on top of your finances by seeing where your money goes to",
    },
    {
      id: 3,
      Icon: BsPersonCheckFill,
      title: "Financial Advice",
      desc: "Keep yourself and your mental state ready for your finances with quotes and advices from expert",
    },
  ];
  return (
    <section className="my-[30px] big:my-[100px]" id='features'>
      <h3 className="m-[50px_auto] text-center text-[30px] capitalize font-sans relative pb-1 big:text-[60px]">Features</h3>
      <div className="flex justify-evenly md:flex-col">
        {feat.map((feats) => (
          <Feature {...feats} key={feats.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
