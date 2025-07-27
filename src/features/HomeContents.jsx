import { Link } from "react-router-dom";

function HomeContents() {
  return (
    <>
    <div className="flex flex-col items-center justify-between px-2 py-34 mx-auto md:flex-row md:items-start md:space-x-12 gap-32">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-lg font-normal tracking-widest uppercase opacity-80 md:text-xl">
          So you want to travel to
        </h1>
        <span className="text-6xl font-bold uppercase md:text-8xl">Space</span>
        <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out  of this world
          experience!
        </p>
      </div>

      {/* Explore Circle */}
      <div className="flex items-center justify-center mt-12 md:mt-0">
        <Link
          to="/destination"
          className="relative flex items-center justify-center w-40 h-40 text-lg font-serif text-black uppercase transition-all duration-200 ease-in-out bg-white  rounded-full hover:tracking-widest md:w-48 md:h-48"
        ><span className="text-black font-bold ">
          Explore
        </span>
          <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out bg-white/50 rounded-full scale-100 hover:scale-125"></span>
        </Link>
      </div>
    </div>
    </>
  );
}

export default HomeContents;