import Children1 from "./Children1.tsx";
// import Children2 from "./Children2.tsx";

const index = () => {
  return (
    <div className="flex justify-center pt-4 text-gray-100 w-full h-full">
      <div className="flex flex-col gap-3 justify-center border border-gray-200 p-4 rounded">
        this is a test swr page
        <Children1 />
        {/*<Children2 />*/}
      </div>
    </div>
  )
}

export default index