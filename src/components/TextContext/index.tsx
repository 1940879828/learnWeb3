import TextContextChild from "../TextContextChild";
import {createContext} from "react";

export const RefreshContext = createContext<{
  refresh: () => void
}>({
  refresh: () => {}
})

const TextContext = () => {

  const refresh = () => {
    console.log("refresh");
  }

  return (
    <RefreshContext.Provider value={{refresh}}>
      <div>
        <TextContextChild></TextContextChild>
      </div>
    </RefreshContext.Provider>
  )
}

export default TextContext;