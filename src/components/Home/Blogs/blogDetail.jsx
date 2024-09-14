import React, { useEffect, useState } from "react";

import NavBar from "../navbar";
import { Get, GetDetail } from "../../../../utils/API/api";
import Footer from "../../Footer";
import { Link, useLocation } from "react-router-dom";

const BlogDetail = () => {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    const getBlogs = async () => {
      const list = await GetDetail("blogs/", ID);
      setBlogList(list.data);
      console.log(list.data, "bl");
    };
    getBlogs();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container pt-[40px] md:pt-[80px] xl:pt-[110px]">
        <div class="responsive-container-block bigContainer">
          <div class="responsive-container-block Container">
            <div className="w-full">
              <div className="flex sm:flex-row flex-col gap-2 sm:justify-between py-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[40px] font-bold text-[#000]">
                    {blogList?.title}
                  </span>
                  <i className="text-[16px] font-medium text-[#000] ">
                    {blogList?.subTitle}
                  </i>
                </div>
                <i className="text-[16px] font-medium text-[#000]">
                  Created : {blogList?.createdAt}
                </i>
              </div>

              <img
                src={
                  "http://localhost:5000/upload/" +
                  blogList?.image?.originalname
                }
                className=" "
              />
              {blogList.description &&
                JSON.parse(blogList.description).map((item) => (
                  <div className="flex flex-col gap-4">
                    <p className="text-[18px] font-medium text-[#000] py-4">
                      {item?.desc}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default BlogDetail;
