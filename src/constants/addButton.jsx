import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const AddButton = ({ add }) => {
    return (
        <Link to={add} className='bg-blue-600 p-2 w-[70px] text-center rounded-lg text-[#fff]' ><FontAwesomeIcon icon={faPlus} size='lg' />&nbsp;Add</Link>
    );
};
