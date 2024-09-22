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
                        <h4 className='text-slate-400'>He crafts responsive web applications where technology meets creativity</h4>
                        <div>
                            <button className='btn-primary'>
                                <Link href="/contact-me">
                                    Contact Options
                                </Link>
                            </button>
                        </div>

                    </Stack>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
                >
                    <div className="relative w-100">
                        <div className='max-w-[400px] mx-auto flex flex-col items-center'>
                            <Image
                                width={350}
                                src={pixelme}
                                alt="Pixel Me"
                                quality={100}
                                className='z-20 relative'
                            />
                            <div
                                className='px-4 py-1 border border-slate-400 flex justify-center items-center space-x-3'
                            >
                                <div
                                    className='relative'
                                >
                                    <div
                                        className='absolute animate-ping h-3 w-3 bg-[#C778DD] rounded-full'
                                    />
                                    <div
                                        className='h-3 w-3 bg-[#C778DD] rounded-full'
                                    />
                                </div>
                                <div className='text-slate-400 max-sm:text-center'>
                                    Currently Working at&nbsp;
                                    <a
                                        href='https://hificomputerbd.com/'
                                        target="_blank"
                                        className='text-white'
                                    >
                                        HiFi Computer
                                    </a>
                                </div>
                            </div>
                        </div>
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
                            className="absolute bottom-20 right-12 z-10 max-sm:hidden"
                        />
                    </div>

                </Grid>
            </Grid>
            <Stack sx={{ mt: 10 }}
                justifyContent="center"
                alignItems="center"
            >
                <Stack>
                    <div className="relative border-2 border-slate-500 px-10 py-7 text-center font-semibold md:text-2xl">
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
                    <div className="self-end border-2 border-slate-500 px-10 max-sm:py-3 py-5 border-t-0 text-center md:text-2xl">
                        - Dr. Who
                    </div>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Hero