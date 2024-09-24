import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '@/public/images/index.svg'
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';


const Navbar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                elevation={0}
                component='nav'
                className='backdrop-blur-md'
                sx={{ backgroundColor: '#282C33E6' }}
            >
                <Toolbar
                    className='mx-28 my-1 max-sm:mx-1'
                >
                    <Box flexGrow={1}>
                        <Stack
                            direction="row"
                            spacing={2}
                        >
                            <Link href="/">
                                <Image
                                    src={logo}
                                    width={25}
                                    alt="logo"
                                    quality={100}
                                />
                            </Link>
                            <Link href="/">
                                <h5 className="font-bold md:hidden">
                                    SI Rony
                                </h5>
                                <h5 className="font-bold max-sm:hidden">
                                    Saiful Islam Rony
                                </h5>
                            </Link>
                        </Stack>

                    </Box>
                    <Stack
                        direction='row'
                        spacing={3}
                        className="max-sm:hidden"
                    >
                        <NavLinks />
                    </Stack>
                    <div className='md:hidden'>
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar