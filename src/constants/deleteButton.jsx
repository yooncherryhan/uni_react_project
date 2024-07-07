import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const DeleteButton = ({ Trash }) => {
    return (
        <button className=' p-2 rounded-lg text-red-500' onClick={Trash}><FontAwesomeIcon icon={faTrash} size='lg' /></button>
    );
};

