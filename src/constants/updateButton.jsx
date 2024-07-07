import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const UpdateButton = ({ update }) => {
    return (
        <Link to={update} className='p-2  text-center rounded-lg text-yellow-500' ><FontAwesomeIcon icon={faEdit} size='lg' /></Link>
    );
};
