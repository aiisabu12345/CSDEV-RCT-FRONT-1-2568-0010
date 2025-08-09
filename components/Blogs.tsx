import Card from "./Card"

const url = 'https://recruit.cskmitl.com/blog/list'
const fetchBlog = async () => {
  await new Promise((resolve) => setInterval(resolve, 200))

  const res = await fetch(url);
  const data = await res.json();
  return data.data
}

type Data = {
  id: string;
  title: string;
  description: string;
  category: string[];
  thumbnail: string;
  date: string;
}

const Blogs = async () => {
  const data: Data[] = await fetchBlog();
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between w-[330px] lg:w-[900px]">
        <h1 className="font-bold text-3xl">Blogs</h1>
        <button className="bg-white text-black font-bold rounded-full px-5 py-2">View all</button>
      </div>

      {data.map((item:Data, index: number) => (
        <Card key={index} item={item}/>
      ))}

    </div>
  )
}
export default Blogs