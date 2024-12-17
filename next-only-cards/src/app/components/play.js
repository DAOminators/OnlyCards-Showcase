import React from 'react'
import Link from 'next/link'

export default function PlayButton() {
  return (
    <Link 
      href="https://github.com/DAOminators/OC"
      className="fixed bottom-8 right-8 z-50 bg-ablue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg text-xl"
    >
      Play Now
    </Link>
  )
}