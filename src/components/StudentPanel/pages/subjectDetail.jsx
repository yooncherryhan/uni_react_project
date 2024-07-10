import React, { useEffect, useState } from 'react'
import { Get, GetDetail } from '../../../../utils/API/api'
import { useLocation } from 'react-router-dom'


const SubjectDetail = () => {
    const location = useLocation()
    const ID = location.pathname.split('/')[2]
    const [subjectList, setSubjectList] = useState([])
    const [showVideoList, setShowVideoList] = useState([])
    const [videoID, setVideoID] = useState('')

    useEffect(() => {
        const getSubjects = async () => {
            const list = await GetDetail('subjects/', ID)
            setSubjectList(list.data)
            setShowVideoList(JSON.parse(list.data.videoLink));
            // console.log(list.data, 'sub')
        }
        getSubjects()
    }, [])

    const handleClickID = (id) => {
        setVideoID(id)
    }
    return (
        <div className='flex gap-20 container'>
            <div className='flex flex-col gap-2 '>


                {showVideoList[0] && (

                    <div >
                        {videoID ? (
                            <iframe
                                src={
                                    "https://www.youtube.com/embed/" +
                                    videoID.links?.split("/")[3]
                                }
                                //   title={assignList.name}
                                allowFullScreen
                                className='border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[600px] xl:w-[750px]'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            // style={{ width:'1400px',height:'500px' }}
                            ></iframe>
                        ) : (
                            <iframe
                                src={
                                    "https://www.youtube.com/embed/" +
                                    showVideoList[0]?.links?.split("/")[3]
                                }
                                //   title={assignList.name}
                                allowFullScreen
                                className='border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[600px] xl:w-[750px]'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            // style={{ width:'1400px',height:'500px' }}
                            ></iframe>
                        )}

                    </div>
                )}
                <span className='text-[20px] font-semibold text-[#000]'>{subjectList?.title}</span>
            </div>
            <div className='shadow-lg w-full h-auto rounded-xl p-5 flex flex-col gap-2 '>
                {showVideoList[0] && (
                    showVideoList.map((video) => (
                        <div onClick={() => handleClickID(video)} key={video} className='flex gap-2 justify-start items-center w-[300px] p-1 rounded-md border-1 border-slate-400'>
                            <iframe
                                src={
                                    "https://www.youtube.com/embed/" +
                                    video.links?.split("/")[3]
                                }
                                //   title={assignList.name}
                                allowFullScreen
                                className='border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[600px] xl:w-[150px] xl:h-[90px]'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            // style={{ width:'1400px',height:'500px' }}
                            ></iframe>
                            <div className='flex flex-col gap-4'>
                                <span className='text-[20px] font-semibold text-[#000]'>{subjectList?.title}</span>
                                <span className='text-[14px] text-[#000]'>{subjectList?.description.substring(0, 20)}...</span>
                            </div>

                        </div>
                    )))}
            </div>
        </div>

    )
}
export default SubjectDetail