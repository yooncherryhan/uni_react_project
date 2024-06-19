import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
    const navigate = useNavigate()
    const [showSidebar, setShowSidebar] = useState(false);

    const logout = () => {
        localStorage.removeItem('data')
        navigate('/')
    }

    return (
        <div className='flex flex-col'>

            <div className='shadow-lg h-[100px] overflow-auto'>
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className={`fixed  z-30 flex items-center cursor-pointer ${showSidebar ? 'left-[250px] translate-x-[100px]' : 'left-[200px] -translate-x-[100px]'} top-6`}

                    width="40"
                    height="40"
                >
                    hee
                </button>
                <button
                    onClick={logout}


                    width="40"
                    height="40"
                >
                    logout
                </button>
            </div>
            <div className='flex py-20 '>
                <div
                    className={`top-28 left-0 w-[25vw] bg-blue-600  p-10  text-white fixed h-[480px] scroll-smooth overflow-y-scroll z-40  ease-in-out duration-300 ${showSidebar ? " translate-x-0" : " -translate-x-[250px]"
                        }`}
                >
                    {showSidebar ? (
                        <>
                            <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
                            <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
                            <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
                            <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
                        </>

                    ) : (
                        <>
                            <h3 className="mt-20 text-4xl text-end font-semibold text-white">1</h3>
                            <h3 className="mt-20 text-4xl text-end font-semibold text-white">2</h3>
                            <h3 className="mt-20 text-4xl text-end font-semibold text-white">2</h3>
                            <h3 className="mt-20 text-4xl text-end font-semibold text-white">2</h3>
                        </>
                    )}


                </div>
                <div className={`top-28 right-0  bg-blue-600 flex p-10  text-white fixed overflow-scroll scroll-smooth h-[480px] z-40  ease-in-out duration-300 ${showSidebar ? " translate-x-0 w-[74vw]" : "  -translate-x-[10px] w-[92vw]"
                    }`}>body</div>
            </div>

        </div>

    )
}
export default AdminDashboard