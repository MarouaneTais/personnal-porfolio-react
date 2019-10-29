import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
  render() {
    return (
     <div>
       <Grid>
         <Cell col={4}>
           <div style={{textAlign: 'center'}}>
            <img 
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" 
              alt="avatar"
              style={{height: '200px'}}
              />
           </div>
           <h2 style={{paddingTop :'2em'}}>Marouane Tais</h2>
           <h4 style={{color: 'grey'}}>Web Developer</h4>
           <hr style={{borderTop: '3px solid #19524E', width: '70%'}}/>
           <p>In a world constantly evolving, we, humans get to a point where if you want to succeed in your life you need to do big shifting in order to sustain and prosper, so was my case. From a graphic designer, I managed to learn about web development so that it can help open new doors, new opportunities to shine. Although my job career is a little bit twisted, I can ensure you that I bring 100% to the work I do. My goal is to build a strong, long-lasting relationships to every collaborator I work with.</p>
           <hr style={{borderTop: '3px solid #19524E', width: '70%'}}/>
           <h5>Address</h5>
           <p>Residence Andaloussia, Imm 7 Appt 1 Bd Anoual</p>
           <h5>Phone</h5>
           <p>(212) 629 946 054</p>
           <h5>Email</h5>
           <p>marouane.tais@gmail.com</p>
           <hr style={{borderTop: '3px solid #19524E', width: '70%'}}/>
         </Cell>
         <Cell className="resume-right-col" col={8}>
           <h2>Education</h2>

           <Education 
            startYear={2010}
            endYear={2013}
            schoolName="College Sherbrooke"
            schoolDescription="Graphic Design & Multimedia Bachelor Degree"/>
            <Education 
            startYear="Dec 2018"
            endYear="May 2019"
            schoolName="3W Academy Maroc (4 months)"
            schoolDescription="Full Stack Web Developer Bootcamp"/>
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience 
            startYear="Feb 2017"
            endYear="June 2018"
            jobName="Software Developer (Internship) @ Net-Expansion"
            jobDescription="Building an ERP in C# for a Shipping Agency"/>
            <Experience 
            startYear="June 2019"
            endYear="Oct 2019"
            jobName="Full Stack Web Developer @ Skills Campus"
            jobDescription=" 
            Developping / Customozing 2 Wordpress websites and maintaining them / Creating different types of flyers (A4, A2, ...)"/>
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills 
            skill="HTML/CSS"
            progress={95}/>
            <Skills 
            skill="Javascript"
            progress={75}/>
            <Skills 
            skill="React"
            progress={80}/>
            <Skills 
            skill="Laravel"
            progress={65}/>
            <Skills 
            skill="Wordpress"
            progress={88}/>
            <Skills 
            skill="Photoshop/Illustrator"
            progress={75}/>
         </Cell>
       </Grid>
     </div>
    );
  }
}

export default Resume;
