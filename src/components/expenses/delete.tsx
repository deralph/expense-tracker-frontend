import React from "react";
import axios from "../../extras/axios";

interface props{
  id:string 
  setDelete:React.Dispatch<React.SetStateAction<boolean>>
}

const Delete:React.FC<props> = ({ id, setDelete }) => {
  const deleteExpense = async () => {
    try {
      await axios.delete(`expenses/${id}`);
      // console.log(`expense ${id} deleted`);
      setDelete(false);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <section>
      <div className="max-w-[500px] w-[90%] bg-white p-5 absolute border border-solid border-[#0000001a] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <p>Are you sure you want to delete this expense?</p>
        <div className="m-5 flex justify-end">
          <button onClick={() => setDelete(false)} className="py-[10px] px-[10] ml-[30px] border border-solid border-[#0000003c]">no</button>
          <button
            onClick={deleteExpense}
            className="py-[10px] px-[10] ml-[30px] border border-solid border-[#0000003c] bg-[#ff303080]"
          >
            yes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delete;
