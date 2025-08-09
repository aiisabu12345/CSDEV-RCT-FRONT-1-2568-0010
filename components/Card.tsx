import Image from "next/image"
import { Micro_5 } from "next/font/google";

const micro5 = Micro_5({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Micro_5',
});

type Data = {
  id: string;
  title: string;
  description: string;
  category: string[];
  thumbnail: string;
  date: string;
}

type CardProps = {
  item: Data;
};


const Card = ({ item }:CardProps) => {
    return (
        <div
    className="flex flex-col md:flex-row items-stretch bg-white text-black rounded-xl shadow-md overflow-hidden mx-20 mt-10 min-w-[300px] lg:min-w-[900px] max-w-[900px] min-h-[330px]"
>
    <div className="relative w-full md:w-1/2 min-h-[25px] md:min-h-[330px]">
        <Image
            src={item.thumbnail}
            alt="img"
            fill
            className="object-cover"
            unoptimized
        />
    </div>

    <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
        <div>
            <p className={`${micro5.className} text-[20px] md:text-[30px] lg:text-[40px] text-purple-500`}>{item.category.join(' ')}</p>
            <h3 className="text-[32px] font-bold mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-[20px] text-gray-700 mb-4 line-clamp-3">{item.description}</p>
        </div>
        <button className="mr-auto px-4 py-2 bg-orange-400 text-zinc-800 font-bold text-[20px] rounded-full hover:bg-purple-800 transition">
            Read more
        </button>
    </div>
</div>


    )
}
export default Card