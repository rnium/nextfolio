'use client'

import React from 'react'
import Link from 'next/link';
import { navlinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
    const pathname = usePathname();
    return (
        <>
            {
                navlinks.map((nav: NavLink, idx: number) => (
                    <Link
                        key={idx}
                        href={nav.path}
                        className={pathname === nav.path ? '' : 'text-slate-400'}
                    >
                        <span className={pathname === nav.path ? 'text-[#C778DD]' : ''}>#</span>
                        <span className="transition-all duration-300">
                            {nav.title}
                        </span>
                    </Link>
                ))
            }
        </>
    )
}

export default NavLinks