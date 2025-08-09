import Header from "@/components/Header"
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Image from "next/image";

const page = async () => {

  return (
    <div>
      <div className="flex flex-row items-center mx-10 md:mx-30 lg:mx-50 mb-5 mt-5 relative w-fit h-[27px] gap-2">
        <Image
          src="/UI/Logo.svg"
          alt="logo"
          width={15}
          height={15}
          priority
        />
        <p className="text-[22px] font-bold">Pineapple</p>
      </div>
      <Header />
      <Blogs />
      <Footer />
    </div>
  )
}
export default page