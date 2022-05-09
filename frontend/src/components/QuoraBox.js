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
              <h2>Post your questions and answers here</h2>
              </div>
     </div>;
}

export default QuoraBox;
