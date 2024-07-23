import React, { useEffect, useState } from "react";
import { Get, GetDetail } from "../../../../utils/API/api";
import { Link, useLocation } from "react-router-dom";
import { ScrollShadow } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

const SubjectDetail = () => {
  const location = useLocation();
  const ID = location.pathname.split("/")[2];
  const [subjectList, setSubjectList] = useState([]);
  const [showVideoList, setShowVideoList] = useState([]);
  const [videoID, setVideoID] = useState("");

  useEffect(() => {
    const getSubjects = async () => {
      const list = await GetDetail("subjects/", ID);
      setSubjectList(list.data);
      setShowVideoList(JSON.parse(list.data.videoLink));
      // console.log(list.data, 'sub')
    };
    getSubjects();
  }, []);

  const handleClickID = (id) => {
    setVideoID(id);
  };
  return (
    <div className="container">
      <div className="flex justify-between py-5">
        <Link to="/student">
          <FontAwesomeIcon icon={faCircleLeft} size="2xl" className="py-5" />
        </Link>
        <div className="flex gap-2 py-5">
          <span className="text-[17px] font-semibold">Refrence By :</span>
          <i className="text-[17px] font-semibold underline">
            {subjectList?.refLink}
          </i>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 ">
        <div className="flex flex-col gap-2">
          {showVideoList[0] && (
            <div>
              {videoID ? (
                <iframe
                  src={
                    "https://www.youtube.com/embed/" +
                    videoID.links?.split("/")[3]
                  }
                  //   title={assignList.name}
                  allowFullScreen
                  className="border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[600px] xl:w-[700px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // style={{ width:'1400px',height:'500px' }}
                ></iframe>
              ) : (
                <iframe
                  src={
                    "https://www.youtube.com/embed/" +
                    showVideoList[0]?.links?.split("/")[3]
                  }
                  //   title={assignList.name}
                  allowFullScreen
                  className="border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[600px] xl:w-[700px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // style={{ width:'1400px',height:'500px' }}
                ></iframe>
              )}
            </div>
          )}

          <div className="flex flex-col gap-4 w-full lg:w-[600px]">
            <span className="text-[20px] font-semibold text-[#000]">
              {subjectList?.title}
            </span>
            <span className="text-[14px] text-[#000]">
              {subjectList?.description}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" shadow-md py-[20px]">
            <span className="text-[25px] p-2 font-semibold text-[#000]">
              {" "}
              Related Videos
            </span>
          </div>
          <ScrollShadow
            orientation="horizontal"
            className="shadow-lg max-w-[400px] max-h-[400px] rounded-xl p-5 flex flex-col gap-2 "
          >
            {showVideoList[0] &&
              showVideoList.map((video) => (
                <div
                  onClick={() => handleClickID(video)}
                  key={video}
                  className="flex lg:flex-row flex-col gap-2 justify-start lg:items-center w-[300px] p-1 rounded-md lg:border-1 lg:border-slate-400 "
                >
                  <iframe
                    src={
                      "https://www.youtube.com/embed/" +
                      video.links?.split("/")[3]
                    }
                    //   title={assignList.name}
                    allowFullScreen
                    className="border w-[350px] h-[136px] sm:w-[600px] sm:h-[250px] md:w-[640px] md:h-[306px] lg:w-[250px] lg:h-[100px] xl:w-[150px] xl:h-[90px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    // style={{ width:'1400px',height:'500px' }}
                  ></iframe>
                  <div className="flex flex-col gap-4">
                    <span className="text-[20px] font-semibold text-[#000]">
                      {subjectList?.title}
                    </span>
                    <span className="text-[14px] text-[#000]">
                      {subjectList?.description.substring(0, 20)}...
                    </span>
                  </div>
                </div>
              ))}
          </ScrollShadow>
        </div>
        {/* <ScrollShadow className="w-[300px] h-[400px]"></ScrollShadow> */}
      </div>
    </div>
  );
};
export default SubjectDetail;
