import React, { useState } from 'react';
import '../stylying/appadvantages.css';

const AppAdvantage = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const items = [
    {
      title: '400 Lakh+ Questions Practised',
      content: 'Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas',
      image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool',
    },
    {
      title: '10 Lakh+ hours of Learning Content consumed',
      content: 'Watch live or recorded lectures from ALLENs top faculty, covering every topic and difficulty level.',
      image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool',
    },
    {
      title: '10 Lakh+ Doubts Solved',
      content: 'Get instant answers with faculty help & our AI Assistant available 24/7 in any language.',
      image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool',
    },
  ];

  
  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="advantage-wrapper">
      <div className="advantage-section">
        <div className="accordion">
          <h2>ALLEN App Advantage</h2>
          {items.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-title" onClick={() => toggleItem(index)}>
                <span>{item.title}</span>
                <span>{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">{item.content}</div>
              )}
            </div>
          ))}
        </div>

        <div className="advantage-image">
          {activeIndex !== null && (
            <img
              src={items[activeIndex].image}
              alt={`Slide ${activeIndex + 1}`}
            />
          )}
        </div>
      </div>

      <button className="explore-button">Explore More</button>
    </div>
  );
};

export default AppAdvantage;
