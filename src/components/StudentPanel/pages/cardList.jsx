import React, { useEffect, useState } from "react";
import { Get } from "../../../../utils/API/api";
import StudentMain from ".";
import { Link } from "react-router-dom";

const CardList = () => {
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      const list = await Get("subjects");
      setSubjectList(list.data);
      console.log(list.data, "sub");
    };
    getSubjects();
  }, []);
  return (
    <div className='container'>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-0 items-center'>
          <h4 className=" text-blk heading text-center">Subjects We Offer</h4>
          {/* <p> The freedom to learn what you want, when you want, absolutely free!</p> */}
        </div>

      </div>
      <div className="grid grid-cols-4 gap-2 lg:gap-5 ">

        {subjectList.map((item, index) => (
          <Link
            to={"/subject-detail/" + item._id}
            key={index}
            className="flex flex-col gap-2 w-[250px] shadow-md p-2 hover:-translate-y-1 hover:scale-105 duration-700"
          >
            <img
              src={"http://localhost:5000/upload/" + item?.image?.originalname}
              className="border-1 border-slate-400 rounded-md"
            />
            <span className="text-[20px] font-semibold text-[#000]">
              {item?.title}
            </span>
            <p className="w-full">{item?.description.substring(0, 10)}...</p>
            <div className="flex flex-col gap-2">
              <span>
                <b>Duration</b> : {item?.duration}
              </span>
              <span>
                <b>Price</b> : {item?.price}MMK
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
};
export default CardList;
