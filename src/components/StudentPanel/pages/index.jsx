import React from 'react'
import StudentNav from './studentNav'
import CardList from './cardList'
import { useLocation } from 'react-router-dom'
import SubjectDetail from './subjectDetail'


export default function StudentMain() {
    const location = useLocation()
    return (
        <div>
            <div className='h-auto'>
                <StudentNav />
            </div>

            <div className='pt-[200px]'>

                {location.pathname === '/student' && (<CardList />)}
                {location.pathname.split('/')[1] === 'subject-detail' && (<SubjectDetail />)}
            </div>


        </div>
    )
}
