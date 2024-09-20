import React from 'react';
import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import Image from 'next/image';
import pixelme from '@/public/images/pixelme.png'
import logoOutlined from '@/public/images/logo-outlined.svg'
import dots from '@/public/images/dots.svg'
import qutation from '@/public/images/quotation.svg'

const Hero = () => {
    return (
        <Box
        >
            <Grid
                container
                spacing={10}
                alignItems="center"
            >
                <Grid
                    size={{ xs: 12, md: 6 }}
                >
                    <Stack spacing={4} justifyContent="flex-start">
                        <h2 className='text-3xl font-semibold'>
                            Saiful Islam Rony is a&nbsp;
                            <span className='text-[#C778DD]'>Full Stack Web App Developer</span>
                            &nbsp;and novice&nbsp;
                            <span className="text-[#C778DD]">DevOps Engineer</span>
                        </h2>
                        <h4 className='text-slate-400'>He crafts responsive websites where technology meets creativity</h4>
                        <div>
                            <Link href="/contact-me">
                                <button className='bg-inherit border-2 px-4 py-2 border-solid border-[#C778DD] transition-all duration-200 hover:bg-[#C778DD]/10'>
                                    Contact Options
                                </button>
                            </Link>
                        </div>

                    </Stack>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
                >
                    <div className="relative w-100">
                        <Image
                            width={350}
                            src={pixelme}
                            alt="Pixel Me"
                            className='mx-auto z-20 relative'
                        />
                        <Image
                            src={logoOutlined}
                            alt="Logo Outlined"
                            width={150}
                            className="absolute top-10 left-18 z-10 max-sm:hidden"
                        />
                        <Image
                            src={dots}
                            alt="Dots"
                            width={100}
                            className="absolute bottom-0 right-12 z-10 max-sm:hidden"
                        />
                    </div>
                </Grid>
            </Grid>
            <Stack sx={{ mt: 10 }}
                justifyContent="center"
                alignItems="center"
            >
                <Stack>
                    <div className="relative border-2 border-slate-500 px-10 py-10 text-center font-semibold md:text-2xl">
                        <span>Code is poetry, but debugging is a detective novel.</span>
                        <Image
                            src={qutation}
                            alt="q1"
                            className='absolute -top-3 left-10'
                        />
                        <Image
                            src={qutation}
                            alt="q1"
                            className='absolute -bottom-3 right-10 rotate-180'
                        />
                    </div>
                    <div className="self-end border-2 border-slate-500 px-10 py-5 border-t-0 text-center md:text-2xl">
                        - Dr. Who
                    </div>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Hero