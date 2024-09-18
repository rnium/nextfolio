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
                        href={nav.path}
                        className={pathname === nav.path ? '' : 'text-stone-400'}
                    >
                        <span className={pathname === nav.path ? 'text-accent' : ''}>#</span>
                        <span className="">
                            {nav.title}
                        </span>
                    </Link>
                ))
            }
        </>
    )
}

export default NavLinks