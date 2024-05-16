import { courses } from "../constants";
import Card from "./Card";

const Courses = () => {
  return (
    <section className="bg-gradient-bg pt-6 md:pt-9 lg:pt-[7.8rem] pb-[5rem] md:pb-[5.4rem] lg:pb-[8.8rem]">
      <div className="container grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-14 lg:gap-y-20 gap-x-3 lg:gap-x-[1.9rem]">
        <div className="max-w-[350px] bg-gradient-1 rounded-[10px] px-7 md:px-8 pt-7 md:pt-[3.7rem] lg:pt-[4rem] pb-9">
          <h2 className="headingS lg:headingM md:leading-8 lg:leading-10 text-white">
            Check out our most popular courses!
          </h2>
        </div>

        {courses.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
