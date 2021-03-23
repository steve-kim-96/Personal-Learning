import React from 'react';
import Link from 'next/link';

const Header = () => (
  <>
  <header>
    <Link href='/'><strong>Home</strong></Link>
    <Link href='accessibility'><strong>Accessibility</strong></Link>
    <Link href='code-splitting'><strong>Code Splitting</strong></Link>
  </header>
  </>
)

export default Header