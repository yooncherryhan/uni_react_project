import { Button, Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Get, GetDetail, Post, Update } from "../../../../../utils/API/api";
import { CancelButton } from "../../../../constants/cancelButton";
import { CreateTypeButton } from "../../../../constants/createTypeButton";
import formattedDate from "../../../../../utils/dateFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
export default function BlogUpdate() {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const variant = "bordered";
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [newDesc, setNewDesc] = useState([]);
  const [oldDesc, setOldDesc] = useState("");
  const [code, setCode] = useState('')
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

  const handleAdd = (val) => {
    const newData = {
      desc: val,
    };
    setNewDesc([...newDesc, newData]);
    console.log([...newDesc, newData], "res");
  };

  const DeleteDesc = async (val) => {
    console.log(val, "val");
    setNewDesc(newDesc.filter((el) => el.desc !== val));
  };

  const create = async () => {
    const formData = new FormData();
    formData.append("id", ID);
    formData.append("title", title);
    formData.append("code", code);
    formData.append("subTitle", subTitle);
    formData.append("description", JSON.stringify(newDesc));
    formData.append("createdAt", formattedDate);
    formData.append("image", image ? image : oldImage);
    await Update(
      "blogs/",
      ID,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
      "Blog"
    );
  };

  useEffect(() => {
    const getSubDetail = async () => {
      const blogDetail = await GetDetail("blogs/", ID);
      // console.log(blogDetail.data, 'sub detail')
      setTitle(blogDetail.data.title);
      setSubTitle(blogDetail.data?.subTitle);
      setOldImage(blogDetail.data?.image);
      setDesc(blogDetail.data?.description);
      setOldDesc(blogDetail.data?.description);
      setCode(blogDetail.data?.code)
      setNewDesc(JSON.parse(blogDetail.data?.description));
    };

    getSubDetail();
  }, []);
  return (
    <div className="gap-4">
      <form onSubmit={handleSubmit(create)}>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
            <label className="text-sm font-semibold">Code</label>
            <Input
              type="text"
              placeholder="Enter code"
              variant={variant}
              value={code}

              onChange={(e) => setCode(e.target.value)}
              labelPlacement="outside"
            />
          </div>
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
            <label className="text-sm font-semibold">Blog Title</label>
            <Input
              type="text"
              placeholder="Enter title"
              variant={variant}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              labelPlacement="outside"
            />
          </div>

        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-2 gap-4">
            <label className="text-sm font-semibold">Sub Title</label>
            <Input
              type="text"
              variant={variant}
              value={subTitle}
              placeholder="Enter sub-title"
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1">
            <label className="text-sm font-semibold">Blog Photo</label>

            <input
              type="file"
              placeholder="$.."
              variant={variant}
              labelPlacement="outside"
              onChange={handleImage}
              className="border-1 border-slate-300 rounded-md mt-2 h-10"
            />
            <img
              src={
                !image.name
                  ? "http://localhost:5000/upload/" + oldImage.originalname
                  : "http://localhost:5000/upload/" + image?.name
              }
              className=" w-[120px] h-[60px] rounded-lg border-1 border-slate-400"
            />
          </div>
        </div>
        {/* <div className=" w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
          <label className="text-sm font-semibold">Blog Description</label>
          <Textarea
            type="text"
            placeholder="About this blog"
            variant={variant}
            value={oldDesc}
          />
        </div> */}
        <div className=" w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
          <label className="text-sm font-semibold">Blog Description</label>
          <div className="flex gap-2 items-center">
            <Textarea
              type="text"
              placeholder="About this blog"
              variant={variant}
              onChange={(e) => setDesc(e.target.value)}
              endContent={
                <Button
                  color="light"
                  className="rounded-none text-sky-600"
                  onClick={() => handleAdd(desc)}
                >
                  Add
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              }
            />
          </div>
          {newDesc &&
            newDesc.map((i, ind) => (
              <div key={ind} className="mt-3">
                <Textarea
                  type="text"
                  variant={variant}
                  value={i.desc}
                  onChange={(e) => setDesc(e.target.value)}
                  endContent={
                    <Button
                      color="light"
                      className="rounded-none text-red-700"
                      onClick={() => DeleteDesc(i.desc)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                  }
                />
              </div>
            ))}
        </div>

        <div className="flex justify-center gap-10 py-4">
          <CancelButton back={`/blog`} />
          <CreateTypeButton type={`submit`} />
        </div>
      </form>
    </div>
  );
}
