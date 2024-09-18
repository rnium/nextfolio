import React from 'react';
import Image from 'next/image';

import { headers } from 'next/headers';
import logo from '@/public/images/default.svg'
import { Stack } from '@mui/material';
import NavLinks from './NavLinks';




const Navbar = () => {
    return (
        <div className='navbar flex max-w-6xl mx-auto px-4 sm:px-8 md:px-0 py-7'>
            <Stack
                className='grow'
                direction="row"
                spacing={2}
            >
                <Image
                    src={logo}
                    width={25}
                    alt="logo"
                    quality={100}
                />
                <h5>
                    Saiful Islam Rony
                </h5>
            </Stack>
            <Stack
                direction='row'
                spacing={3}
            >
                <NavLinks />
            </Stack>

        </div>
    )
}

export default Navbar