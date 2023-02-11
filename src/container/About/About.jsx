import React from 'react';
import {motion} from 'framer-motion'
import {images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const abouts = [

  {title:"Web Development",description:"I am a good making static as well as dynamic website.",imageUrl: images.about01 },
  {title:"Front-end Development",description:"Proficient in Front-end design and structures",imageUrl: images.about02  },
  {title:"Back-end Development",description:"Familiar with databases and backend API's",imageUrl: images.about03  },
  {title:"UI / UX Designer",description:"Able to make better User-Interface for pleasant Useexperience.",imageUrl: images.about04  }
]

const About = () => {
  return (
    <>
    
    <h2 className='head-text'>
      I Know that <span>Good Dev</span><br />means <span>Good Business</span>
    </h2>

    <div className="app__profiles">
    {
      abouts.map((about,index)=>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1}}
      transition={{duration:0.5 , type:'tween'}}
      className="app__profile-item"
      key={about.title + index}
      >
        <img src={about.imageUrl} alt={about.title} srcset="" />
        <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
        <p className='p-text' style={{marginTop:10}}>{about.description}</p>
      </motion.div>
      ))
    }

    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);