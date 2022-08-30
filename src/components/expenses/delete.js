import React from "react";
import axios from "../../extras/axios";

const Delete = ({ id, setDelete }) => {
  const deleteExpense = async () => {
    try {
      await axios.delete(`expenses/${id}`);
      console.log(`expense ${id} deleted`);
      setDelete(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
    // className="single-main"
    // style={{ background: "rgba(225,225,225,0,4)" }}
    >
      <div className="delete">
        <p>Are you sure you want to delete this expense?</p>
        <div className="del-btns">
          <button onClick={() => setDelete(false)}>no</button>
          <button
            onClick={deleteExpense}
            style={{ background: "rgba(250, 4, 4, 0.7)" }}
          >
            yes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delete;
