import React from "react";
import Card from "./Card";
import "./testi.css";

const userData = [
  {
    id: 1,
    img: "/images/IMG-20220606-WA0041_1.jpg",
    testimony:
      "I absolutely LOVE this app! It has a great interface, is super easy to navigate,I love how this app will categorize where all the money goes with percentages and amount and I can look back and identify where I need to make the most appropriate tweaks to save.",
    name: "ogundele anointing",
  },
  {
    id: 2,
    img: "/images/20220501163514.jpg",
    testimony:
      "This app is great for someone who is interested in keeping quick track of their expenses during the course of the day, or the year. Put in the date, category and ammount of your expense. THAT IS QUITE LITTERALLY IT! If you want to add notes, your notes will display, I love it",
    name: "ayomikun endurance",
  },
  {
    id: 3,
    img: "/images/20220501163514.jpg",
    testimony:
      "I just need an app to record my daily expenses, so I know where I am spending the most. This app has all the basics I need. For some straight minded users like me, this is a really good, simple and user friendly app.",
    name: "samuel olabolorunshaye",
  },
];
const Testi = () => {
  return (
    <section className="testi">
      <h3>Testimonial</h3>
      <article className="test1">
        {userData.map((user) => {
          return <Card key={user.id} {...user} />;
        })}
      </article>
    </section>
  );
};

export default Testi;
