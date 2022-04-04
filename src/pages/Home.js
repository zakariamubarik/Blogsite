import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  return (
    <div>
   <div className='banner'>
  <h1>Welcome to my webpage</h1>
  <p>Some Ghanaians on social media have expressed their views after the Blackstars were paired against Uruguay in Friday’s Qatar 2022 World Cup draw.

What makes the draw interesting is the unique history Ghana hasdexpecially with Uruguay in the 2010 World Cup hosted in South Africa.

Then, Black Stars were on the verge of becoming the first African team to reach the last four of the quadrennial showpieces before losing in penalties to Uruguay.

The defeat was made more painful by the fact that Ghana had a penalty in the final seconds of extra time after Luis Suarez of Uruguay used his hand to keep out Dominic Adiyiah’s goal bound header.</p>
  <div className='actions-wrap'>
  <button className='btn-outline' onClick={()=>navigate("./about")}>About</button>
  <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blog</button>

  </div>
  </div>   
  </div>
  )
}

export default withLayout (Home)