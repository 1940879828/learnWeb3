import {useNews} from "../../servers/testSwr/useNews.ts";
import React from "react";

const Children1 = React.memo(() => {
  const {data,isLoading} = useNews()

  return (
    <div className="bg-gray-500_01 text-gray-900 rounded p-4">
      this is a Children1:
      <div>
        {isLoading ? "..." : `title:${data[0].title}`}
      </div>
    </div>
  )
})

export default Children1