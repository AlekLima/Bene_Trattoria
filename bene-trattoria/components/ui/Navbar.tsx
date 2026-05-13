import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/Logo.svg'

const navItems = [
  { label: 'Página Inicial', href: '/' },
  { label: 'A Pizzaria', href: '/pizzaria' },
  { label: 'Cardápio', href: '/menu' },
  { label: 'Reservas', href: '/reservas' },
  { label: 'Contato', href: '/contato' },
]

export function Navbar() {
  return (
    <nav className="nav" aria-label="Navegação principal">
      <div className="navbar">
        <Link  href="/" aria-label="Bene Trattoria">
          <Image src={Logo} width={60} height={60} alt="" priority />
        </Link>

        <div className="navbar__links">
          {navItems.map((item) => (
            <Link className='link' key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
