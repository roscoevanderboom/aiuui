import Link from 'next/link';
import React from 'react';

export type AppLayoutProps = {
  children?: React.ReactNode;
}

const Navbar = () => (
  <nav className='navbar'>
    <Link href="/" className='nav-link'>Home</Link>
    <Link href="/vercel" className='nav-link'>Vercel</Link>
  </nav>
);

export default function AppLayout(props: AppLayoutProps) {
  return (
    <div className='app-layout'>
      <Navbar />
      {props.children}
    </div>
  )
}
