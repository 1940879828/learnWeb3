import {useContext} from "react";
import {RefreshContext} from "../TextContext";

const TextContextChild = () => {
  const {refresh} = useContext(RefreshContext)

  const _onClick = () => {
    refresh()
  }

  return (
    <div>
      this is child
      <button style={{"color":"white"}} onClick={_onClick}>click</button>
    </div>
  )
}

export default TextContextChild;