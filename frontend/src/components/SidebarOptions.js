import { Add } from "@material-ui/icons";
import React from 'react';
import "./css/SidebarOptions.css";

function SidebarOptions() {
    return (
      <div className="sidebarOptions">
        <div className="sidebarOption">
          <img
            src="https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Historical-Fiction-scaled.jpg"
            alt=""
          />
          <p>History</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://www.businessenglishpod.com/wordpress/wp-content/uploads/Business-English-Pod-Learn-Business-English.jpg"
            alt=""
          />
  
          <p>Business</p>
        </div>
        {/* <div className="sidebarOption">
          <img
            src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
            alt=""
          />
          <p>Psychology</p>
        </div> */}
  
        {/* <div className="sidebarOption">
          <img
            src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
            alt=""
          />
          <p>Cooking</p>
        </div> */}
  
        <div className="sidebarOption">
          <img
            src="https://www.spmrf.org/wp-content/uploads/2019/03/Diwakar-Jhurani.jpg"
            alt=""
          />
          <p>Jobs</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://assets.weforum.org/community/image/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg"
            alt=""
          />
          <p>Science</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="http://prod-upp-image-read.ft.com/4bddfb6e-fa84-11e6-9516-2d969e0d3b65"
            alt=""
          />
          <p>Health</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://assets.thehansindia.com/h-upload/2020/08/28/1600x960_994807-it-sector.jpg"
            alt=""
          />
          <p>IT industry</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?fit=bounds&format=jpg&width=960"
            alt=""
          />
          <p>Technology</p>
        </div>
  
        <div className="sidebarOption">
          <img
            src="https://thevideoink.com/wp-content/uploads/2019/08/systemic-evaluation.jpg"
            alt=""
          />
          <p>Education</p>
        </div>
        {/* <div className="sidebarOption">
          <Add />
          <p className="text">Discover Spaces</p>
        </div> */}
      </div>
    );
  }

export default SidebarOptions;
