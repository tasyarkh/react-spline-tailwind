import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoBookOutline, IoTabletPortraitSharp, IoDesktopOutline, IoBusinessOutline} from 'react-icons/io5'


function Experience() {
  return (
    <div>
        <section className='w-full flex items-center justify-center'>
         <VerticalTimeline>
         <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(21, 24, 33)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(120, 104, 230)' }}
           date="2022"
           iconStyle={{ background: 'rgb(21, 24, 33)', color: '#FFF2F9' }}
           icon={<IoBookOutline/>}
           >
           <h3 className="vertical-timeline-element-title">Internship At Kompas Gramedia</h3>
           <h4 className="vertical-timeline-element-subtitle">As UI/UX Designer and Book Author</h4>
           <p>
             Make UI/UX design web Diginusa and created 32 chapters of the book with the title UI / UX in software development
           </p>
           </VerticalTimelineElement>
         <VerticalTimelineElement
           className="vertical-timeline-element"
           contentStyle={{ background: 'rgb(21, 24, 33)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(250, 78, 171)' }}
           date="2021"
           iconStyle={{ background: 'rgb(21, 24, 33)', color: '#FFF2F9' }}
           icon={<IoTabletPortraitSharp/>}
           >
           <h3 className="vertical-timeline-element-title">KKSI competition</h3>
           <h4 className="vertical-timeline-element-subtitle">As UI/UX Designer</h4>
           <p>
           Create a mobile application design for schools under the name SchoolDy
           </p>
           </VerticalTimelineElement>
           <VerticalTimelineElement
           className="vertical-timeline-element"
           contentStyle={{ background: 'rgb(21, 24, 33)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(120, 104, 230)' }}
           date="2021 - 2023"
           iconStyle={{ background: 'rgb(21, 24, 33)', color: '#FFF2F9' }}
           icon={<IoDesktopOutline/>}
           >
           <h3 className="vertical-timeline-element-title">ICT Extraculicular</h3>
           <h4 className="vertical-timeline-element-subtitle">As Secretary and as head of UI/UX division</h4>
           <p>
           Set up ICT extracurricular schedules and teach about UI/UX design
           </p>
           </VerticalTimelineElement>
           <VerticalTimelineElement
           className="vertical-timeline-element"
           contentStyle={{ background: 'rgb(21, 24, 33)', color: '#fff' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(250, 78, 171)' }}
           date="2020 - 2023"
           iconStyle={{ background: 'rgb(21, 24, 33)', color: '#FFF2F9' }}
           icon={<IoBusinessOutline/>}
           >
           <h3 className="vertical-timeline-element-title">intra-school student organization</h3>
           <h4 className="vertical-timeline-element-subtitle">As SEKBID 6 chairman</h4>
           <p>
           Leads and guides sections in hygiene and health 
           </p>
           </VerticalTimelineElement>
         </VerticalTimeline>
       </section>
    </div>
  )
}

export default Experience