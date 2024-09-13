import { Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { CancelButton } from '../../../../constants/cancelButton'
import { CreateButton } from '../../../../constants/createButton'
import { Post } from '../../../../../utils/API/api'
import { useNavigate } from 'react-router-dom'
export default function CategoryCreate() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const handleCreate = async () => {
        const data = {
            title: title,
            code: code,
            description: description
        }
        await Post('category', data, { headers: { "Content-Type": "application/json" } }, 'Category')
        navigate('/category')
    }
    return (
        <div className='container flex flex-col gap-4'>
            <div>
                <label>Code</label>
                <Input type='text' onChange={(e) => setCode(e.target.value)} />
            </div>
            <div>
                <label>Title</label>
                <Input type='text' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label>Description</label>
                <Textarea type='text' label='' labelPlacement='outside' onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='flex gap-2 justify-center'>

                <CancelButton back={`/category`} />
                <CreateButton create={handleCreate} />

            </div>

        </div>
    )
}
