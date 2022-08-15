import React from 'react'
import pic from './me.jpg'
import mail from '../images/mail.png'
import linkedin from '../images/linkedin-.png'
function Info () {
  return (
    <div className='info'> 
<img className='mypic' src={pic} alt="my pic"/>
    <h2>Farah Abdelhedi</h2>
    <h3>ReactJsDeveloper</h3>
    <h6>farahabh.com</h6>
    <div className='buttons'>

    <button> 
        <img className='iconbtn' src={mail} alt='email' width={20}/>Email
    </button>
    <button> 
        <img className='iconbtn' src= {linkedin}alt='linkedin' width={3} height={3} /> Linkedin
    </button>
    
    </div>
    </div>
  );
}

export default Info