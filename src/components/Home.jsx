import React from 'react'
import Card from './Card.jsx'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Home() {
  return (
	<div>
		<Navbar />
		<Card/>
		<Hero/>
		<Footer/>
	</div>
  )
}
