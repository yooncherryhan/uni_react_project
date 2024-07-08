
import {
    Modal,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    useDisclosure,
    Pagination,
    Button,
    Kbd
} from "@nextui-org/react";
// import { Button } from '@nextui-org/button'
import React, { useEffect, useState } from "react";
import api, { Delete, Get, GetDetail, ImageURL } from "../../../../../utils/API/api";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function UserTable() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const ID = localStorage.getItem("data");
    // console.log(ID, "da");
    const [userData, setUserData] = useState([]);
    const [allUserList, setAllUserList] = useState([]);
    const [delID, setDelID] = useState(null);
    const [page, setPage] = React.useState(1);
    const [pages, setPages] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return allUserList.slice(start, end);
    }, [page, allUserList]);

    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter" && isOpen) {
    //         handleDelete();
    //     }
    // };

    const onRowsChange = (event) => {
        const newRowsPerPage = parseInt(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setPages(Math.ceil(allUserList.length / newRowsPerPage));
        setPage(1); // Reset the current page to 1 when rows per page changes
    };

    useEffect(() => {
        const getUser = async () => {
            const result = await GetDetail("users/", ID);
            setUserData(result.data);
            // console.log(result.data, "reswa");
        };

        const getAllUser = async () => {
            const all = await Get("users");
            setAllUserList(all.data);
        };
        getAllUser();
        getUser();
        // document.addEventListener("keydown", handleKeyDown);

        // return () => {
        //     document.removeEventListener("keydown", handleKeyDown);
        // };
    }, [isOpen, rowsPerPage]);

    const handleOpen = (event) => {
        console.log(event)
        onOpen();
        setDelID(event);
    };

    const handleClose = () => {
        onClose();
        setDelID(null);
    };

    const handleDelete = async () => {
        await api.delete("users/" + delID).then(() => {
            setAllUserList(allUserList.filter((item) => item._id !== delID));
            onClose();
        });


    };

    return (
        <>

            <div className='flex justify-between items-center mb-3'>
                <span className='text-default-400 text-small'>
                    Total {allUserList.length} Users
                </span>
                <label className='flex items-center text-default-400 text-small'>
                    Rows per page:
                    <select
                        className='bg-transparent outline-none text-default-400 text-small'
                        onChange={(e) => onRowsChange(e)}
                    >
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                    </select>
                </label>
            </div>
            <Table isHeaderSticky
                aria-label='Example table with client side sorting'
                classNames={{
                    base: "max-h-[719px] ",
                    table: "min-h-[100px]",
                }}
                bottomContent={
                    <div className='flex w-full justify-center'>
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color='primary'
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                }>
                <TableHeader>
                    <TableColumn>Code</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Phone</TableColumn>
                    <TableColumn>Role</TableColumn>
                    <TableColumn>Image</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No Positions to display."}>
                    {items.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item?.name}</TableCell>
                            <TableCell>{item?.email}</TableCell>
                            <TableCell>{item?.phone}</TableCell>
                            <TableCell>{item?.role}</TableCell>
                            <TableCell><img src={'http://localhost:5000/upload/' + item?.image?.originalname} className=' w-[40px] h-[40px] rounded-lg' /></TableCell>
                            <TableCell className='flex gap-2'>
                                {/* <button className='button-warning'>Update</button> */}
                                <button className='text-red-600' onClick={() => handleOpen(item._id)}><FontAwesomeIcon icon={faTrash} size='xl' /></button>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>
            </Table>
            <Modal backdrop='blur' isOpen={isOpen} onClose={handleClose}>
                <ModalContent>
                    {(handleClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>
                                Delete User
                            </ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this position?</p>
                            </ModalBody>
                            <ModalFooter className='flex gap-2'>
                                <button color='default' className='bg-slate-300 p-2 rounded-lg text-[#000]' variant='light' onClick={handleClose}>
                                    No, Cancel
                                </button>
                                <button
                                    color='danger'
                                    className='bg-red-500 p-2 rounded-lg text-[#fff]'
                                    onClick={() => handleDelete()}
                                // onKeyDown={handleKeyDown}
                                >
                                    Yes, I am sure
                                    {/* <Kbd className='bg-danger-500' keys={["enter"]}></Kbd> */}
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
