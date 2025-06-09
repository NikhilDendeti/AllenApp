import React from 'react';
import '../stylying/studentsucess.css';

const StudentSuccess = () => {
  return (
    <div className='student-success'>
      <div className='student-success-image'>
        <img
          src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1749239202/jrybl574o3cmkky3a42m.png?_upload_ref=ic_img_tool&__ar__=2.52'
          alt='Student Success'
        />
      </div>

      <div className='whats-trending'>
        <h2>What's Trending</h2>
      </div>

      <div className='image-container'>
        <img
          src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1749186960/gfrmqin1mkcmguq8aegf.png?_upload_ref=ic_img_tool&__ar__=4.00'
          alt='Trending Scholarship'
        />
      </div>

      <div className='whats-trending'>
        <h2>Meet Our 2024 Champions</h2>
      </div>

      <div className='image-container'>
        <img
          src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1748856353/hibbl78evc8dcj2ax0c3.png?_upload_ref=ic_img_tool&__ar__=3.38'
          alt='Trending Scholarship'
        />
      </div>

      </div>
  );
};

export default StudentSuccess;
