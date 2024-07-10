import { Button, Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Get, Post } from "../../../../../utils/API/api";
import { CancelButton } from "../../../../constants/cancelButton";
import { CreateTypeButton } from "../../../../constants/createTypeButton";
import formattedDate from "../../../../../utils/dateFormat";
export default function BlogCreate() {
    const variant = "bordered";
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [desc, setDesc] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleImage = (e) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const create = async () => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("subTitle", subTitle);
        formData.append("description", desc);
        formData.append("createdAt", formattedDate);
        formData.append("image", image);
        await Post('blog', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }, 'Blog')

    };

    return (
        <div className='gap-4'>
            <form onSubmit={handleSubmit(create)}>
                <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1'>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2'>
                        <label className='text-sm font-semibold'>Blog Title</label>
                        <Input
                            type='text'

                            placeholder='Enter title'
                            variant={variant}
                            onChange={(e) => setTitle(e.target.value)}
                            labelPlacement='outside'
                        />
                    </div>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-2 gap-4'>
                        <label className='text-sm font-semibold'>Sub Title</label>
                        <Input
                            type='text'
                            variant={variant}
                            placeholder="Enter sub-title"
                            onChange={(e) => setSubTitle(e.target.value)}

                        />

                    </div>

                </div>

                <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1'>
                    <div className='flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1'>
                        <label className='text-sm font-semibold'>Blog Photo</label>

                        <input
                            type='file'

                            placeholder='$..'
                            variant={variant}
                            labelPlacement='outside'
                            onChange={handleImage}
                            className='border-1 border-slate-300 rounded-md h-10'
                        />
                    </div>



                </div>

                <div className=' w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2'>
                    <label
                        className={`text-sm font-semibold ${errors.description && errors.description.type === "required"
                            ? "text-[#f31260]"
                            : ""
                            }`}
                    >
                        Blog Description
                    </label>
                    <Textarea
                        type='text'
                        placeholder='About this blog'
                        variant={variant}
                        {...register("description", {
                            required: true,
                            onChange: (e) => setDesc(e.target.value),
                        })}
                    />
                </div>

                <div className='flex justify-center gap-10 py-4'>
                    <CancelButton back={`/subject`} />
                    <CreateTypeButton type={`submit`} />
                </div>
            </form >
        </div >
    );
}
