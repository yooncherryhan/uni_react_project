import { Button, Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectItem, Select } from "@nextui-org/select";
import { Get, Post } from "../../../../../utils/API/api";
import { CancelButton } from "../../../../constants/cancelButton";
import { CreateTypeButton } from "../../../../constants/createTypeButton";
export default function SubjectCreate() {
    const variant = "bordered";
    const [categoryList, setCategoryList] = useState([]);
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState('')
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [refName, setRefName] = useState('');
    // const [data, setData] = useState([]);
    // const dataArr = [...data, instructors?.split(',')]
    // console.log(JSON.stringify({ data: instructors?.split(',') }), 'inst')
    const [videoLinks, setVideoLinks] = useState("");
    const [newVideoLink, setNewVideoLink] = useState([]);

    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('')

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

    const AddVideo = (val) => {
        console.log(val, "val");
        const newData = {
            links: val,
        };
        setNewVideoLink([...newVideoLink, newData]);
        console.log([...newVideoLink, newData], "res");
    };

    const DeleteVideo = async (val) => {
        console.log(val, "val");
        setNewVideoLink(newVideoLink.filter((el) => el.links !== val));
    };
    const create = async () => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("category", category);
        formData.append("description", desc);
        formData.append("image", image);
        formData.append("startDate", fromDate);
        formData.append("endDate", toDate);
        formData.append("price", price);
        formData.append("duration", duration);
        formData.append("refLink", refName);
        formData.append("videoLink", JSON.stringify(newVideoLink));

        await Post('subject', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }, 'Subject')

    };

    useEffect(() => {

        const getSubjectList = async () => {
            const list = await Get('categories')
            setCategoryList(list.data)

        };
        getSubjectList();
    }, []);

    return (
        <div className='gap-4'>
            <form onSubmit={handleSubmit(create)}>
                <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1'>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2'>
                        <label className='text-sm font-semibold'>Subject Name</label>
                        <Input
                            type='text'

                            placeholder=''
                            variant={variant}
                            onChange={(e) => setTitle(e.target.value)}
                            labelPlacement='outside'
                        />
                    </div>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-2 gap-4'>
                        <label className='text-sm font-semibold'>Duration</label>
                        <Input
                            type='text'
                            variant={variant}
                            placeholder="eg: 1,2,3 month or week"
                            onChange={(e) => setDuration(e.target.value)}

                        />

                    </div>

                </div>
                <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1'>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2'>
                        <label
                            className={`text-sm font-semibold ${errors.subject && errors.subject.type === "required"
                                ? "text-[#f31260]"
                                : ""
                                }`}
                        >
                            Category
                        </label>
                        <select
                            {...register("category", {
                                required: true,
                                onChange: (e) => setCategory(e.target.value),
                            })}
                            className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-xl m-0 px-0 py-2 focus:ring-gray-500 focus:border-gray-500 block w-full p-3 dark:bg-default-100 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
                        >
                            <option hidden>Choose Category</option>
                            {categoryList.map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.title}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2'>
                        <label className='text-sm font-semibold'>Price</label>
                        <Input
                            type='number'
                            variant={variant}
                            onChange={(e) => setPrice(e.target.value)}

                        />

                    </div>
                </div>


                <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1'>
                    <div className='flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1'>
                        <label className='text-sm font-semibold'>Subject Photo</label>

                        <input
                            type='file'

                            placeholder='$..'
                            variant={variant}
                            labelPlacement='outside'
                            onChange={handleImage}
                            className='border-1 border-slate-300 rounded-md h-10'
                        />
                    </div>

                    <div className='block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
                        <label className='text-sm font-semibold'> Video Links</label>
                        <Input
                            type='text'
                            variant={variant}
                            onChange={(e) => setVideoLinks(e.target.value)}
                            endContent={
                                <Button
                                    color='light'
                                    className='rounded-none text-sky-600'
                                    onClick={() => AddVideo(videoLinks)}
                                >
                                    Add
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            }
                        />
                        {newVideoLink.map((i) => (
                            <div key={i} className='mt-3'>
                                <Input
                                    type='text'
                                    variant={variant}
                                    value={i.links}
                                    onChange={(e) => videoLinks(e.target.value)}
                                    endContent={
                                        <Button
                                            color='light'
                                            className='rounded-none text-red-700'
                                            onClick={() => DeleteVideo(i.links)}
                                        >
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </Button>
                                    }
                                />
                            </div>
                        ))}
                    </div>

                </div>
                <div className='grid grid-cols-2 mb-6 md:mb-0 gap-4 mt-1'>
                    <Input
                        type='date'
                        label='Start Date'
                        placeholder='Date'
                        variant={variant}
                        labelPlacement='outside'
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <Input
                        type='date'
                        label='End Date'
                        placeholder='Date'
                        variant={variant}
                        onChange={(e) => setToDate(e.target.value)}
                        labelPlacement='outside'
                    />
                    <div></div>
                </div>
                <div className='flex '>

                    <div className='flex flex-col gap-2 w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-1'>
                        <label className='text-sm font-semibold'>Refrence Name</label>
                        <Input
                            type='text'
                            variant={variant}
                            onChange={(e) => setRefName(e.target.value)}

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
                        About Subject
                    </label>
                    <Textarea
                        type='text'
                        placeholder='About this subject'
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
