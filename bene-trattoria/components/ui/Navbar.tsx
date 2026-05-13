import Link from 'next/link'
 
export default function Home() {
  return 
}

export function Navbar() {
  return (
    <nav className="bg-pizza-green h-14 flex items-center justify-center gap-10 text-white italic bg-red-500 ">
      <div className="w-10 h-10 rounded-full bg-pizza-orange flex items-center justify-center text-xs">
        Logo
      </div>

      <Link href="/dashboard">Pagina Inicial</Link>
      <Link href="/dashboard">A Pizzaria</Link>
      <Link href="/menu">Cardápio</Link>
      <Link href="/dashboard">Reservas</Link>
      <Link href="/dashboard">Contato</Link>
    </nav>
  );
}