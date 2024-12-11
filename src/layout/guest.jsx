import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Guest({children}) {
  return (
    <>
    <Nav/>
    {children}
    </>
  )
}
