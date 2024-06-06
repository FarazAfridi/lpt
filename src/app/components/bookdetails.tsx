import Image from "next/image";

export default function BookDetails() {
  return (
    <div className=" flex flex-wrap justify-center">
    <div className="flex relative w-[700px] h-[700px] md:w-full sm:h-[400px]">
      <Image
        className="w-full object-contain"
        src={"/girl_with_animals.png"}
        width={1000}
        height={1000}
        alt=""
      />
    </div>
    <div className="w-[700px] relative flex flex-col justify-center items-center gap-y-6 md:w-full">
      <Image
        className="w-[300px] sm:w-[200px]"
        src={"/logo.png"}
        width={300}
        height={300}
        alt=""
      />
      <button className="text-black px-1 py-4 font-bold w-[300px] border-[3px] text-xl border-black alata">
        COMING SOON
      </button>
      <div className="flex w-[400px] justify-around">
        <Image
          className=""
          src={"/amazon_logo.svg"}
          width={150}
          height={100}
          alt=""
        />
        <Image
          className="h-[60px]"
          src={"/target_logo.svg"}
          width={150}
          height={100}
          alt=""
        />
        <Image src={"/walmart_logo.svg"} width={150} height={100} alt="" />
      </div>
      <div className="flex ">
        <Image src={"/barnes__noble_logo.svg"} width={280} height={200} alt="" />
      </div>
    </div>
  </div>
  )
}