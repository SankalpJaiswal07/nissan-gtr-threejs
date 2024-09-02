import CanvasContainer from "@/components/CanvasContainer";
import Loader from "@/components/Loader";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";

export default function Home() {
  return (
    <div className="bg-[#f0efef] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-red overflow-scrolling-touch z-[99]">
      <div className="z-50">
        <Loader />
      </div>
      <div className="h-screen w-full fixed top-0 ">
        <CanvasContainer />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
