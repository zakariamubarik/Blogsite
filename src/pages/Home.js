import React from 'react'
import withLayout from './withLayout'
function Home() {
  return (
    <div>
   <h1>Welcome to my homepage</h1>
   <div>
   <p>There are 12 pre-verification sites around campus open
    from 10 a.m. to 3 p.m. on game day that can be found here.
    Once at the site, you can show one of three things: your original COVID-19 vaccination card, 
    a digital verification source such as the LA Wallet app or your negative COVID-19 PCR test.
    You will be given a wristband that gives you access to your assigned Tiger Stadium entry gate.</p>
   
   <p>There are 12 pre-verification sites around campus open from 10 a.m. to 3 p.m. on game day that can be found here.
    Once at the site, you can show one of three things: your original COVID-19 vaccination card,
     a digital verification source such as the LA Wallet app or your negative COVID-19 PCR test.
      You will be given a wristband that gives you access to your assigned Tiger Stadium entry gate.</p>

   <p>There are 12 pre-verification sites around campus open from 10 a.m. to 3 p.m. on game day that can be found here.
    Once at the site, you can show one of three things: your original COVID-19 vaccination card,
     a digital verification source such as the LA Wallet app or your negative COVID-19 PCR test. 
     You will be given a wristband that gives you access to your assigned Tiger Stadium entry gate.</p>
   </div>

    </div>
  )
}

export default withLayout(Home)