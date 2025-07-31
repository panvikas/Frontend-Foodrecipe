import React, { useState } from 'react'  
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
   <>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Outlet context={{ setMenuOpen }} />
    <Footer/>
   </>
  )
}
