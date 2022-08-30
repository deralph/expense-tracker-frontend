import React from "react";
import Feature from "./Feature";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdTrackChanges, MdOutlineMonitor } from "react-icons/md";
import "./Features.css";

const Features = () => {
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
    <section className="features">
      <h3>Features</h3>
      <div className="feature-box">
        {feat.map((feats) => (
          <Feature {...feats} key={feats.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
