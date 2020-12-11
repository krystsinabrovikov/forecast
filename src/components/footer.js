import React from 'react'

const Footer = ()=>{
  const name = 'KriSti';
  const year = new Date().getFullYear()
return(
  <div className ="footer">
    <p>Created by <span className ="name">{name}</span></p>
    <p>Copyright {year}</p>
  </div>
)
}
export default Footer;



