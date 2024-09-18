import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '@/public/images/default.svg'
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import NavLinks from './NavLinks';


const Navbar = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar elevation={0} component='nav' sx={{ backgroundColor: '#282C33' }}>
                <Toolbar
                    className='mx-20 max-sm:mx-0'
                >
                    <Box flexGrow={1}>
                        <Link href="/">
                            <Stack
                                direction="row"
                                spacing={2}
                            >
                                <Image
                                    src={logo}
                                    width={25}
                                    alt="logo"
                                    quality={100}
                                />
                                <h5 className="font-bold">
                                    Saiful Islam Rony
                                </h5>
                            </Stack>
                        </Link>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={3}
                    >
                        <NavLinks />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar