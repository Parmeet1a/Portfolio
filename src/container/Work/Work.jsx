import React,{useState} from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import {motion} from 'framer-motion'

import {AppWrap,MotionWrap} from '../../wrapper'

import './Work.scss';

const Work = () => {

  const [animateCard] = useState({y:0,opacity:1})


 

  return (
    <>

<h2 className='head-text'>
     My Creative <span>Portfolio </span>Section
    </h2>

    {/* <div className="app__work-filter">

      {['UI/UX','Web App','Mobile App','React JS','All'].map((item,index)=>(

        <div
        key={index}
        onClick={()=>{handleWorkFilter(item)}}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : " "}`}>
          {item}
        </div>

        
      ))}
    </div> */}

<motion.div

animate={animateCard}
transition={{duration:0.5,delayChildren:0.5}}
className='app__work-portfolio'
>


{[
  {title:"Todo App with backend",
  img:'https://www.pngitem.com/pimgs/m/245-2456104_png-transparent-icon-todo-list-png-download.png',
  git : 'https://github.com/Parmeet1a/Todo--frontend',
  desc : 'A todo app with full backend'
  },

  {title:"Login and Signup Form (with Backend)",
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDXVXUEUFuIQaUgBSlSDBMf1H-LeD0CTV_Q&usqp=CAU',
  git : 'https://github.com/Parmeet1a/Chat-App',
  desc : 'A todo app with full backend'
  },

  {title:"Working UI of Chat App",
  img:'data:image/png;base64,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',
  git : 'https://github.com/Parmeet1a/Chat-App',
  desc : 'A todo app with full backend'
  }
].map((work,index)=>(


  <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.img} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.git} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text"></p>
              </div>
            </div>
          </div>
        ))}







</motion.div>





    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);