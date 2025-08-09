import Image from "next/image"

// components/Footer.tsx
const Footer = () => {
  return (
    <footer className=" text-white mt-12 flex justify-center">
      <div className="rounded-[40px] w-[1084px] h-[253px] bg-violet-500 px-25 pt-8 pb-15 flex flex-col justify-between">
        <Image
        src={'/UI/Group.svg'}
        alt="group"
        priority
        width={250}
        height={78}
        />
        <p className="text-[12px] md:text-[16px] lg:text-[20px] font-bold">Ⓒ Copyright 2025 CSDEV KMITL. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
