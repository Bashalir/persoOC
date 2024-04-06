import { useDispatch } from "react-redux";
import { debugCheckBox } from "../app/features/debugCheckbox/debugCheckboxSlice";

export default function DebugCheckbox() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(debugCheckBox(e.target.checked))
  }

  return (
    //TODO css with margin 0 padding 0
    <input type="checkbox" id="debug" onClick={handleClick} className="" />
  );
}
