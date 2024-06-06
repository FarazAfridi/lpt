import Image from "next/image";

export default function Necklace() {
  return (
    <div className="max-w-[1600px] w-[100% - 80px] mx-auto md:mx-[40px] mt-[50px] flex justify-center">
      <Image className="w-[100% - 80px] h-full object-contain" src={"/necklace.png"} width={800} height={800} alt="necklace"/>
    </div>
  )
}