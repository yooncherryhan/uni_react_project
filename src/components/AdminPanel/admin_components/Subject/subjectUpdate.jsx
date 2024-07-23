import { Button, Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectItem, Select } from "@nextui-org/select";
import { Get, GetDetail, Post, Update } from "../../../../../utils/API/api";
import { CancelButton } from "../../../../constants/cancelButton";
import { CreateTypeButton } from "../../../../constants/createTypeButton";
export default function SubjectUpdate() {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const variant = "bordered";
  const [categoryList, setCategoryList] = useState([]);
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [title, setTitle] = useState("");
  const [refName, setRefName] = useState("");
  const [desc, setDesc] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [newVideoLink, setNewVideoLink] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState("");
  const [videoLinks, setVideoLinks] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImage = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0], "img");
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
    // console.log(val, "val");
    setNewVideoLink(newVideoLink.filter((el) => el.links !== val));
  };
  const update = async () => {
    const formData = new FormData();
    formData.append("id", ID);
    formData.append("title", title);
    formData.append("category", category ? category : categoryID);
    formData.append("description", desc);
    formData.append("image", image ? image : oldImage);
    formData.append("startDate", fromDate);
    formData.append("endDate", toDate);
    formData.append("price", price);
    formData.append("duration", duration);
    formData.append("refLink", refName);
    formData.append("videoLink", JSON.stringify(newVideoLink));

    await Update(
      "subjects/",
      ID,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
      "Subject"
    );
  };

  useEffect(() => {
    const getSubDetail = async () => {
      const subDetail = await GetDetail("subjects/", ID);
      console.log(subDetail.data, "sub detail");
      setTitle(subDetail.data.title);
      setPrice(subDetail.data?.price);
      setDuration(subDetail.data?.duration);
      setCategoryName(subDetail.data.category?.title);
      setCategoryID(subDetail.data.category?._id);
      setFromDate(subDetail.data?.startDate);
      setToDate(subDetail.data?.endDate);
      setOldImage(subDetail.data?.image);
      setDesc(subDetail.data?.description);
      setNewVideoLink(JSON.parse(subDetail.data?.videoLink));
      setRefName(subDetail.data.refLink ? subDetail.data.refLink : "");
    };
    const getSubjectList = async () => {
      const list = await Get("categories");
      setCategoryList(list.data);
    };
    getSubDetail();
    getSubjectList();
  }, []);

  return (
    <div className="gap-4">
      <form onSubmit={handleSubmit(update)}>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
            <label className="text-sm font-semibold">Subject Name</label>
            <Input
              type="text"
              placeholder=""
              variant={variant}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              labelPlacement="outside"
            />
          </div>
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-2 gap-4">
            <label className="text-sm font-semibold">Duration</label>
            <Input
              type="text"
              variant={variant}
              value={duration}
              placeholder="eg: 1,2,3 month or week"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
            <label className={`text-sm font-semibold`}>Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-xl m-0 px-0 py-2 focus:ring-gray-500 focus:border-gray-500 block w-full p-3 dark:bg-default-100 dark:border-gray-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            >
              <option hidden>{categoryName}</option>
              {categoryList.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
            <label className="text-sm font-semibold">Price</label>
            <Input
              type="number"
              variant={variant}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-1">
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-1">
            <label className="text-sm font-semibold">Subject Photo</label>

            <input
              type="file"
              placeholder="$.."
              variant={variant}
              labelPlacement="outside"
              onChange={handleImage}
              className="border-1 border-slate-300 rounded-md h-10"
            />
            {/* {console.log('http://localhost:5000/upload/' + image?.name, 'immm')} */}
            <img
              src={
                !image.name
                  ? "http://localhost:5000/upload/" + oldImage.originalname
                  : "http://localhost:5000/upload/" + image?.name
              }
              className=" w-[120px] h-[60px] rounded-lg border-1 border-slate-400"
            />
          </div>

          <div className="block w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <label className="text-sm font-semibold"> Video Links</label>
            <Input
              type="text"
              variant={variant}
              onChange={(e) => setVideoLinks(e.target.value)}
              endContent={
                <Button
                  color="light"
                  className="rounded-none text-sky-600"
                  onClick={() => AddVideo(videoLinks)}
                >
                  Add
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              }
            />
            {newVideoLink &&
              newVideoLink.map((i) => (
                <div key={i} className="mt-3">
                  <Input
                    type="text"
                    variant={variant}
                    value={i.links}
                    onChange={(e) => videoLinks(e.target.value)}
                    endContent={
                      <Button
                        color="light"
                        className="rounded-none text-red-700"
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
        <div className="grid grid-cols-2 mb-6 md:mb-0 gap-4 mt-3">
          <Input
            type="date"
            label="Start Date"
            placeholder="Date"
            value={fromDate}
            variant={variant}
            labelPlacement="outside"
            onChange={(e) => setFromDate(e.target.value)}
          />
          <Input
            type="date"
            label="End Date"
            placeholder="Date"
            value={toDate}
            variant={variant}
            onChange={(e) => setToDate(e.target.value)}
            labelPlacement="outside"
          />
          <div></div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-2 w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 mt-1">
            <label className="text-sm font-semibold">Refrence Name</label>
            <Input
              type="text"
              variant={variant}
              value={refName}
              onChange={(e) => setRefName(e.target.value)}
            />
          </div>
        </div>
        <div className=" w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
          <label className={`text-sm font-semibold`}>About Subject</label>
          <Textarea
            type="text"
            placeholder="About this subject"
            value={desc}
            variant={variant}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-10 py-4">
          <CancelButton back={`/subject`} />
          <CreateTypeButton type={`submit`} />
        </div>
      </form>
    </div>
  );
}
