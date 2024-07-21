import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { GetDetail, Update } from "../../utils/API/api";

export default function ProfileModal({ size, isOpen, onClose, onOpen, id }) {
    const [userData, setUserData] = useState([]);
    const [image, setImage] = useState("");
    const [oldImage, setOldImage] = useState("");
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleImage = (e) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
            console.log(e.target.files[0], "img");
        }
    };
    // onOpen()
    const handleUserUpdate = async () => {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("image", image ? image : oldImage);

        await Update(
            "users/",
            id,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
            "Admin"
        );
        onClose()
        window.location.reload()
    }

    useEffect(() => {
        const getUser = async () => {
            const result = await GetDetail("users/", id);
            setUserData(result.data);
            setOldImage(result.data?.image);
            setName(result.data?.name)
            setPhone(result.data?.phone)
            console.log(result.data, "reswa");
        };
        getUser();

    }, [isOpen]);
    return (
        <>

            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
                backdrop='blur'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Profile Update</ModalHeader>
                            <ModalBody>

                                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
                                    <img
                                        src={
                                            !image.name
                                                ? "http://localhost:5000/upload/" + oldImage.originalname
                                                : "http://localhost:5000/upload/" + image?.name
                                        }
                                        className=" w-[120px] h-[120px] rounded-[50%] border-1 border-slate-400 text-center"
                                    />
                                    <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-3">
                                        <div className='flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1'>
                                            <label className="text-sm font-semibold">Name</label>
                                            <input
                                                type="text"
                                                labelPlacement="outside"
                                                defaultValue={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="border-1 border-slate-300 rounded-md h-10 p-4" />
                                        </div>
                                        <div className='flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1'>
                                            <label className="text-sm font-semibold">Profile</label>

                                            <input
                                                type="file"
                                                placeholder="$.."

                                                labelPlacement="outside"
                                                onChange={handleImage}
                                                className="border-1 border-slate-300 rounded-md h-10"
                                            />
                                        </div>

                                        <div className='flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1'>
                                            <label className="text-sm font-semibold">Phone</label>
                                            <input
                                                type="phone"
                                                labelPlacement="outside"
                                                defaultValue={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="border-1 border-slate-300 rounded-md h-10 p-4" />
                                        </div>
                                        {/* {console.log('http://localhost:5000/upload/' + image?.name, 'immm')} */}

                                    </div>


                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" variant="light" onClick={handleUserUpdate}>
                                    Update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
