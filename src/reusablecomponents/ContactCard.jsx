import React, { useState } from 'react'

const ContactCard = ({icon , title , listItem1 , listItem2 , item1, item2}) => {
  // const [style, setStyle] = useState({});

  // const handleMouseMove = (e) => {
  //   const card = e.currentTarget;
  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left; 
  //   const y = e.clientY - rect.top;  

  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;

  //   const rotateX = (y - centerY) / 10; 
  //   const rotateY = (x - centerX) / 10;

  //   setStyle({
  //     transform: ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setStyle({
  //     transform: 'rotateX(0deg) rotateY(0deg)', 
  //   });
  // };onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={style}

  return (
    <>
    <div className='card-box' >
      <div className='card-items'>
        <div className='item-icon'>
          <img src={icon}/>
        </div>
        <div className='item-content'>
          <h3 className='item-title'>{title}</h3>
          <ul className='item-list'>
            <li>{item1}
            <a href="#!">{listItem1}</a>
            </li>
            <li>{item2}
            <a href="#!">{listItem2}</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default ContactCard