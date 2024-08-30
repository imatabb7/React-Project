import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
  return (
    <>

    <AnimatedCursor 
      innerSize={0}
      outerSize={10}
      color='8, 16, 229'
      outerAlpha={1}
      innerScale={0}
      outerScale={1}
      showSystemCursor={true}
      clickables={[
        // 'a',
        // 'input[type="text"]',
        // 'input[type="email"]',
        // 'input[type="number"]',
        // 'input[type="submit"]',
        
        // 'label[for]',
        // 'select',
        // 'textarea',
        // 'button',
        // '.link',
        {
          target: '.custom',
          options: {
            innerSize: 0,
            outerSize: 10,
            color: '58, 16, 229',
            outerAlpha: 1,
            // innerScale: 0.7,
            outerScale: 1,
            
          }
        }
      ]}
    />
      
    </>
  )
}

export default Cursor

{/* <AnimatedCursor
color='0,0,0'
// color="#fff"
innerSize={8}
outerSize={35}
innerScale={1}
outerScale={1.7}
outerAlpha={0}
showSystemCursor={true}

outerStyle={{
  mixBlendMode: 'exclusion'
}}
/> */}