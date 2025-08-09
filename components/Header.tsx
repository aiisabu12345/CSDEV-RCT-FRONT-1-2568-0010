import Image from "next/image"


const Header = () => {
    return (
        <div className="mx-5 md:mx-20 lg:mx-50 mb-10 flex flex-row">

            <Image
                src="/UI/star_1.svg"
                alt="star1"
                width={55}
                height={55}
                priority
                className="absolute object-cover z-10 left-25 mt-20 w-[55px] h-[55px]"
            />

            <div className="bg-black relative w-full h-auto min-h-[609px] flex flex-row items-center justify-center overflow-hidden rounded-[40px]">
                <Image
                    src="/UI/Frame_8.svg"
                    alt="pineapple background"
                    fill
                    priority
                    className="object-cover z-1"
                />

                <div className="mx-10 my-10 w-[972px] min-h-[497px] relative z-10 bg-white rounded-[40px] grid-row-2 justify-between">
                    <div className="text-black mx-10 my-5">
                        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-bold">Pineapple_</h1>
                        <p className="mt-1 lg:mt-2 text-[18px] md:text-[24px] lg:text-[32px]">
                            Considered Space for Design Discourse.
                        </p>

                        <h1 className="mt-2 lg:mt-4 text-[12px] md:text-[15px] lg:text-[20px]">
                            A little corner of the internet for exploring the juicy parts of<br />
                            web design and UX. Want in on the fun? Join the newsletter!
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
                        <div className="flex flex-col items-center justify-center lg:justify-end lg:mb-10 lg:ml-10">
                            <button className="text-[12px] md:text-[15px] lg:text-[18px] bottom-[0px] px-8 py-2 bg-purple-600 h-[60px] text-white rounded-full font-bold hover:bg-purple-800 transition">
                                Join the Mailing List
                            </button>
                        </div>

                        <div className="flex items-end justify-center">
                            <Image
                                src="/UI/Frame.svg"
                                width={383}
                                height={383}
                                priority
                                alt="pineapple"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Image
                src="/UI/star_2.svg"
                alt="star2"
                width={55}
                height={55}
                priority
                className="absolute object-cover z-0 right-25 w-[55px] h-[55px]"
            />

        </div>


    )
}
export default Header