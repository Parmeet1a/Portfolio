import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>

{['Home','About','Work','Skills','Contact','testimonials','conatct'].map((item,index)=>(


<a
href={`#${item}`}
key={item + index}
className = "app__navigation-dot"
style={active === true ? {backgroundColor: '#313BAC'} : {}}
/>


))}
    </div>
  )
}

export default NavigationDots