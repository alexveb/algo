import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Showcase = () => (
    <div className="">
      <i style={{ cursor: "pointer" }} onClick={() => {
        window.location.href = "https://www.facebook.com/"}} 
        class="fa-brands fa-facebook socialIcons moveIcon"></i>
      <i style={{ cursor: "pointer" }} onClick={() => {
        window.location.href = "https://www.twitter.com/"}} 
         class="fa-brands fa-twitter socialIcons moveIcon"></i>
      <i style={{ cursor: "pointer" }} onClick={() => {
        window.location.href = "https://www.instagram.com/"}}
         class="fa-brands fa-instagram socialIcons moveIcon"></i>
      <i style={{ cursor: "pointer" }} onClick={() => {
        window.location.href = "mailto:vermpisalexios1988@gmail.com"}} 
         class="fa-solid fa-envelope socialIcons moveIcon"></i>
    </div>
  )

  export default Showcase;