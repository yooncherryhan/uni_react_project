import React from "react";
import StudentNav from "./studentNav";
import CardList from "./cardList";
import { useLocation } from "react-router-dom";
import SubjectDetail from "./subjectDetail";
import Footer from "../../Footer";

export default function StudentMain() {
  const location = useLocation();
  return (
    <div>
      <div className="h-auto">
        <StudentNav />
      </div>

      <div className="md:pt-[150px] 2xl:pt-[180px] py-[80px]">
        {location.pathname === "/student" && <CardList />}
        {location.pathname.split("/")[1] === "subject-detail" && (
          <SubjectDetail />
        )}
      </div>
      <Footer />
    </div>
  );
}
