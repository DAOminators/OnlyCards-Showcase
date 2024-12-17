import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-6xl font-bold mb-8">Only <span className="text-ablue">Cards</span></h2>
          <div className="flex space-x-6 mb-8">
            <Link href="https://twitter.com" className="hover:text-ablue transition-colors">
              Preetham
            </Link>
            <Link href="https://discord.com" className="hover:text-ablue transition-colors">
              Biresh
            </Link>
            <Link href="https://github.com/DAOminators" className="hover:text-ablue transition-colors">
              Subrojyoti
            </Link>
            <Link href="https://github.com/DAOminators" className="hover:text-ablue transition-colors">
                Sreeyansh
            </Link>
          </div>
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} DAOminators. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}