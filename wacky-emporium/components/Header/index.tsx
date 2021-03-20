import React from 'react';
import Link from 'next/link';

const Header = () => (
  <>
  <header>
    <Link href='accessibility'><strong>Accessibility</strong></Link>
    <Link href='/'><strong>Home</strong></Link>
  </header>
  </>
)

export default Header