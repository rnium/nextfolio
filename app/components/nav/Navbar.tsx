import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '@/public/images/default.svg'
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import NavLinks from './NavLinks';


const Navbar = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar elevation={0} component='nav' className='' sx={{ backgroundColor: '#282C33' }}>
                <Toolbar
                    className='mx-28 my-1 max-sm:mx-5'
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
                                <h5 className="font-bold md:hidden">
                                    SI Rony
                                </h5>
                                <h5 className="font-bold max-sm:hidden">
                                    Saiful Islam Rony
                                </h5>
                            </Stack>
                        </Link>
                    </Box>
                    <Stack
                        direction='row'
                        spacing={3}
                        className="max-sm:hidden"
                    >
                        <NavLinks />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar