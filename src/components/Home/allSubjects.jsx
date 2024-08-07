import React, { useEffect, useState } from 'react'

import NavBar from './navbar'
import { Get } from '../../../utils/API/api'
import Footer from '../Footer'

const AllSubject = () => {
    const [subjectList, setSubjectList] = useState([])

    useEffect(() => {
        window.scroll(0, 0)
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
            <div className='responsive-container-block bigContainer'>
                <div class="responsive-container-block Container">
                    <div className='container pt-[40px] md:pt-[80px] 2xl:pt-[100px]'>
                        <p class="text-blk heading text-center">
                            Subjects For You
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 '>

                            {

                                subjectList[0] && subjectList.map((item, index) => (
                                    <div key={index} className='flex flex-col gap-2 w-full sm:w-[250px] shadow-md p-2 hover:-translate-y-1 hover:scale-105 duration-700'>

                                        <img src={
                                            "http://localhost:5000/upload/" + item?.image?.originalname
                                        } className='border-1 border-slate-400 rounded-md w-full h-full sm:w-[250px] sm:h-[200px] lg:w-[200px] lg:h-[150px]' />
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

                </div>

            </div>

            <div className=''>
                <Footer />
            </div>

        </div>

    )
}
export default AllSubject