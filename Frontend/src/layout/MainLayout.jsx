import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/header/Navbar'


export const Mainlayout = () => {
  return (
    <main className='dark:bg-black overflow-hidden'>
        <NavBar/>
        <Outlet/>
        <footer>Footer</footer>
    </main>
    
  )
}
