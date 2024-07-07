import { Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { CancelButton } from '../../../../constants/cancelButton'
import { CreateButton } from '../../../../constants/createButton'
import { Post } from '../../../../../utils/API/api'
import { useNavigate } from 'react-router-dom'
export default function CategoryCreate() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleCreate = async () => {
        const data = {
            title: title,
            description: description
        }
        await Post('category', data, { headers: { "Content-Type": "application/json" } }, 'Category')
        navigate('/category')
    }
    return (
        <div className='container flex flex-col gap-4'>
            <div>
                <label>Title</label>
            </div>
            <Input type='text' onChange={(e) => setTitle(e.target.value)} />
            <Textarea type='text' label='Description' labelPlacement='outside' onChange={(e) => setDescription(e.target.value)} />
            <div className='flex gap-2 justify-center'>

                <CancelButton />
                <CreateButton create={handleCreate} />

            </div>

        </div>
    )
}
