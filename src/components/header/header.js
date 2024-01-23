import Link from 'next/link';
import Image from 'next/image';
import HeaderBackground from './header-background';
import NavLink from './nav-link';

import logoImage from '@/assets/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="a plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
