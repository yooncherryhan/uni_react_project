
import {

    Divider,
    Avatar,
    Image,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import { Button } from '@nextui-org/button'
import React, { useEffect, useState } from "react";
import { Get, GetDetail, ImageURL } from "../../../../../utils/API/api";
export default function UserTable() {
    const ID = localStorage.getItem("data");
    // console.log(ID, "da");
    const [userData, setUserData] = useState([]);
    const [allUserList, setAllUserList] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            const result = await GetDetail("users/", ID);
            setUserData(result.data);
            console.log(result.data, "reswa");
        };

        const getAllUser = async () => {
            const all = await Get("users");
            setAllUserList(all.data);
        };
        getAllUser();
        getUser();
    }, []);
    return (
        <>
            <Table removeWrapper aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Code</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Phone</TableColumn>
                    <TableColumn>Role</TableColumn>
                    <TableColumn>Image</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {allUserList.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item?.name}</TableCell>
                            <TableCell>{item?.email}</TableCell>
                            <TableCell>{item?.phone}</TableCell>
                            <TableCell>{item?.role}</TableCell>
                            <TableCell><img src={'http://localhost:5000/upload/' + item?.image?.originalname} className=' w-[40px] h-[40px] rounded-lg' /></TableCell>
                            <TableCell className='flex gap-2'>
                                <button className='button-warning'>Update</button>
                                <button className='button-delete'>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}


                </TableBody>
            </Table>
        </>
    )
}
