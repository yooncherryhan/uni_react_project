import React, { useEffect, useState } from 'react'

import NavBar from '../navbar'
import { Get } from '../../../../utils/API/api'
import Footer from '../../Footer'
import { Link } from 'react-router-dom'

const BlogPage = () => {
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        window.scroll(0, 0)
        const getBlogs = async () => {
            const list = await Get('blogs')
            setBlogList(list.data)

        }
        getBlogs()
    }, [])
    return (
        <div>
            <NavBar />
            <div className='responsive-container-block bigContainer'>
                <div class="responsive-container-block Container">
                    <div className='container pt-[40px] md:pt-[80px]'>
                        <p class="text-blk heading text-center">
                            Blogs For You
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>

                            {

                                blogList[0] && blogList.map((item, index) => (
                                    <Link to={'/blog-detail/' + item._id} key={index} className='flex flex-col gap-2 w-full sm:w-[250px] shadow-md p-2 hover:-translate-y-1 hover:scale-105 duration-700'>

                                        <img src={
                                            "http://localhost:5000/upload/" + item?.image?.originalname
                                        } className='border-1 border-slate-400 rounded-md w-full h-full sm:w-[250px] sm:h-[200px] lg:w-[200px] lg:h-[150px]' />
                                        <span className='text-[20px] font-semibold text-[#000]'>{item?.title}</span>
                                        <p className='w-full'>{item?.description.substring(0, 50)}...</p>
                                        <div className='flex flex-col gap-2'>
                                            <span><b>Created</b> : {item?.createdAt}</span>

                                        </div>
                                    </Link>
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
export default BlogPage