import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { logout } from "../../extras/functions";
import { useNavigate } from "react-router-dom";
import { allActions } from "../../store/allSlice";
import { useAppDispatch } from "../../hooks";
const Welcome:React.FC = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  return (
    <section className="welcome font-sans h-[100vh] grid place-content-center object-contain ">
      <div className="w-full max-w-[600px] big:max-w-[50vw] slg:w-4/5 mx-auto">
        <p className='text-4xl text-[#333] big:text-[5rem] slg:text-[30px] sm:text-2xl'>
          <span className="block p-5 text-[45px] big:text-[5.5rem]">Welcome</span> Start your journey to tracking your expense in a
          more reliable way with no worries
        </p>
        <div className="w-full max-w-[400px] flex justify-between mt-[50px] big:max-w-[45vw] sm:flex-col">
          <Link className='sm:mt-[30px]' to="/expense-form">
            <button className="p-[10px_30px] text-lg capitalize cursor-pointer rounded transition-all bg-[blueviolet] hover:text-[#ddd] big:text-4xl big:p-[25px_50px]">get started</button>
          </Link>
          <Link className='sm:mt-[30px]' to="/categories">
            <button className="p-[10px_30px] text-lg capitalize cursor-pointer rounded transition-all bg-[blueviolet] hover:text-[#ddd] big:text-4xl big:p-[25px_50px]"> View Categories </button>
          </Link>
        </div>
      </div>{" "}
      <p className="absolute top-10 font-bold left-10 text-black text-xl flex items-center big:text-4xl slg:top-[10px] slg:left-[10px]" onClick={() => {
            dispatch(allActions.setuser(''))
            logout(navigate)
          }}>
        Log Out
        <MdLogout className="ml-[10px]" />
      </p>
    </section>
  );
};

export default Welcome;
