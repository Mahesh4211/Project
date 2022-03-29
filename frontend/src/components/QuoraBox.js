import { Avatar } from '@material-ui/core';
import React from 'react';
import { selectUser } from '../feature/userSlice';
import { useSelector } from 'react-redux';
import "./css/QuoraBox.css"
function QuoraBox() {
    const user = useSelector(selectUser);
  return <div className='quoraBox'>
      <div className='quoraBox__info'>
          <Avatar src={user?.photo}/>
          </div>
          <div className='quoraBox__quora'>
              <h5>What is your question or link?</h5>
              </div>
     </div>;
}

export default QuoraBox;
