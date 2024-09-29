import {useNews} from "../../servers/testSwr/useNews.ts";

const Children2 = () => {
  const {data,error,isLoading} = useNews()
  console.log(data,error,isLoading)
  return (
    <div className="bg-gray-500_01 text-gray-900 rounded p-4">
      this is a Children2
      <div>
        {isLoading ? "..." : `title:${data[1].title}`}
      </div>
    </div>
  )
}

export default Children2