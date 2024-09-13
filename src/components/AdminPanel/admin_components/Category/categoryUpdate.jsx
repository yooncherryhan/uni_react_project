import { Input, Textarea } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { CancelButton } from '../../../../constants/cancelButton'
import { CreateButton } from '../../../../constants/createButton'
import { GetDetail, Post, Update } from '../../../../../utils/API/api'
import { useLocation, useNavigate } from 'react-router-dom'
export default function CategoryUpdate() {
    const navigate = useNavigate()
    const location = useLocation()
    const ID = location.pathname.split('/')[2]
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const handleUpdate = async () => {
        const data = {
            id: ID,
            title: title,
            code: code,
            description: description
        }
        await Update('categories/', ID, data, { headers: { "Content-Type": "application/json" } }, 'Category')
        navigate('/category')
    }
    useEffect(() => {
        const getUpdate = async () => {
            const updateData = await GetDetail('categories/', ID)
            setTitle(updateData.data.title)
            setCode(updateData.data?.code)
            setDescription(updateData.data.description)
        }
        getUpdate()
    }, [])
    return (
        <div className='container flex flex-col gap-4'>
            <div>
                <label>Code</label>
                <Input type='text' value={code} onChange={(e) => setCode(e.target.value)} />
            </div>
            <div>
                <label>Title</label>
                <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label>Description</label>
                <Textarea type='text' label='Description' value={description} labelPlacement='outside' onChange={(e) => setDescription(e.target.value)} />
            </div>



            <div className='flex gap-2 justify-center'>

                <CancelButton back={`/category`} />
                <CreateButton create={handleUpdate} />

            </div>

        </div>
    )
}
