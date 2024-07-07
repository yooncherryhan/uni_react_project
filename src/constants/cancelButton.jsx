import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CancelButton = ({ back }) => {
    return (
        <Link to={back} className='bg-slate-300 p-2 w-[70px] text-center rounded-lg text-red-500' >Cancel</Link>
    );
};
