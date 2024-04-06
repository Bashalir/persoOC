import React from 'react';
import { Link } from 'react-router-dom';
import DebugUserInfo from './DebugUserInfo';
import DebugCheckbox from './DebugCheckbox';

// pas sur de ça
import { useSelector, useDispatch } from "react-redux";


function DebugMenu() {

  let separator = <span>&nbsp;&nbsp;</span>;
  let separator2 = <span>&nbsp; &nbsp;-&nbsp; &nbsp;</span>;

  //  const isDebug = useSelector((state) => state.debugCheckbox.value);
  const isDebug = true;

  return isDebug ? (
    <div className='flex-container'>
      <DebugCheckbox />
      <div>
        <Link to="/">HOME</Link>{separator2}
        <Link to="/1-CV/">PIERRE</Link>{separator2}
        <Link to="/2-Bank/">BANK</Link>{separator2}
        <Link to="/3-Shop/">SHOP</Link>{separator2}
        <Link to="/4-Wikitime/">WIKITIME</Link>{separator2}
      </div>
      <DebugUserInfo />
    </div>
  ) : null;
}

export default DebugMenu;
