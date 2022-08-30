export const Category_colors = {
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

export const sets = (set, type) => [
  ...new Set(set.map((expense) => expense[type])),
];

export const months_and_their_figure = {
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
export const getMonth = (result) => {
  const month_and_figure = [];
  const monthFigure = [
    ...new Set(result.map((result) => result.date.split("-")[1])),
  ];
  monthFigure.map((monthInFigure) => {
    const month = months_and_their_figure[monthInFigure];
    const new_info = { month, monthInFigure };
    month_and_figure.push(new_info);
  });

  return month_and_figure;
};

export const reduceFunction = (group) => {
  const percent = group.reduce((acc, real) => {
    const { productNo, price } = real;
    const productNum = parseInt(productNo);
    const productPrice = parseInt(price);
    const realTotal = productNum * productPrice;
    return acc + realTotal;
  }, 0);
  return percent;
};
