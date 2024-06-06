import Image from "next/image";

export default function VideoBanner() {
  return (
    <div className="w-full h-[900px] relative md:h-[500px] mt-[50px] max-w-[1600px] mx-auto">
      <Image className="h-full object-cover md:object-right" src={"/videobanner.webp"} alt="video banner" fill/>
    </div>
  )
}