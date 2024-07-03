import { Button, Divider, Avatar, Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faBook,
    faRightFromBracket,
    faRightLeft,
    faXmark,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import Logo from '../../../../assets/images/ellogo.png'
import { GetDetail, ImageURL } from '../../../../../utils/API/api';
import Swal from 'sweetalert2';
import IndexPage from './index';

const AdminDashboard = () => {
    const ID = localStorage.getItem('data')
    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(true);
    const [userData, setUserData] = useState([])


    useEffect(() => {
        const getUser = async () => {
            const result = await GetDetail('users/', ID)
            setUserData(result.data)
            console.log(result.data, 'reswa')
        }
        getUser()
    }, [])


    return (
        <>
            {ID && ID !== null ? (
                <div className='flex flex-col'>


                    <div className=''>
                        <IndexPage />

                    </div>

                </div>
            ) : (
                <div className='pt-[300px]'>
                    <Link to='/login' className='flex justify-center items-center'><b className='text-[20px] text-white bg-blue-600 p-2 rounded-lg  '>Please Login</b></Link>
                </div >
            )}
        </>



    )
}
export default AdminDashboard