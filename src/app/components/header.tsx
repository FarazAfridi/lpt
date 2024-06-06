export default function Header() {
  return (
    <div className="h-[50px] w-full flex justify-center items-center absolute text-2xl gap-10 z-10">
      <span className="text-white text-opacity-70 cursor-pointer">Home</span>
      <span className="text-yellow-500 cursor-pointer">About</span>
    </div>
  )
}