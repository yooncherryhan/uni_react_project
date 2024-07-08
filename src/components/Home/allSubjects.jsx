import React, { useEffect, useState } from 'react'

import NavBar from './navbar'
import { Get } from '../../../utils/API/api'

const AllSubject = () => {
    const [subjectList, setSubjectList] = useState([])

    useEffect(() => {
        const getSubjects = async () => {
            const list = await Get('subjects')
            setSubjectList(list.data)
            console.log(list.data, 'sub')
        }
        getSubjects()
    }, [])
    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-4 gap-2 container pt-[200px]'>
                {

                    subjectList.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2 w-[250px] shadow-md p-2 hover:-translate-y-1 hover:scale-105 duration-700'>

                            <img src={
                                "http://localhost:5000/upload/" + item?.image?.originalname
                            } className='border-1 border-slate-400 rounded-md' />
                            <span className='text-[20px] font-semibold text-[#000]'>{item?.title}</span>
                            <p className='w-full'>{item?.description.substring(0, 10)}...</p>
                            <div className='flex flex-col gap-2'>
                                <span><b>Duration</b> : {item?.duration}</span>
                                <span><b>Price</b> : {item?.price}MMK</span>
                            </div>
                        </div>
                    ))

                }



            </div>
        </div>

    )
}
export default AllSubject