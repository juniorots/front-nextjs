import React from 'react';
import Link from 'next/link';

const links = [
    { href:"/tempo", text: 'Consultar o Tempo' },
    { href:"/cep", text: 'Consulta por CEP' },
    { href:"/contato", text: 'Contatos' },
]

const Navbar = () => {
    return (
        <nav className="bg-base-300">
            <div className="navbar max-w-4xl mx-auto flex-row sm-flex-row">
                <ul className="menu md:ml-6 flex-col sm:flex-row">
                    {
                        links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="font-bold">
                                    {link.text}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;