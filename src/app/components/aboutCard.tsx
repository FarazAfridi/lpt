export default function AboutCard({
  heading,
  text,
  reverse,
}: {
  heading: string;
  text: JSX.Element;
  reverse: boolean;
}) {
  return (
    <div
      className={`w-full lg:flex-col flex gap-x-[35px] mt-[80px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="bg-[#D45F5F] w-[40%] h-full min-w-[500px] min-h-[470px] rounded-lg lg:w-full lg:min-w-[unset]"></div>
      <div className="w-[60%] lg:w-full lg:mt-5">
        <h3 className="alata text-[46px] text-white mb-4 lg:w-full">
          {heading}
        </h3>
        {text}
      </div>
    </div>
  );
}
