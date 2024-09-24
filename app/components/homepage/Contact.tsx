import React from 'react'
import { Box, Grid2 as Grid } from '@mui/material';
import { RiTelegramFill, RiLinkedinFill } from '@remixicon/react';


const Contact = () => {
    return (
        <Box>
            <div className="flex gap-5 items-center">
                <h4 className='text-3xl font-medium'>
                    <span className='text-[#C778DD]'>#</span>
                    contact-me
                </h4>
                <div className="max-sm:hidden w-96 h-[1px] bg-[#C778DD]" />
            </div>
            <Grid
                container
                sx={{ my: 5 }}
            >
                <Grid
                    size={{ xs: 12, md: 6 }}
                >
                    <div className="text-slate-400">
                        I&apos;m open to collaborative opportunities. If you have any queries
                        feel free to dm me. I welcome your feedback, questions, and suggestions
                        I make an effort to respond to all messages within a few hours,
                        although it may take me longer during busy periods.
                        Thanks again for your interest, and I look forward to hearing from you!
                    </div>
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
                >
                    <div className='flex max-sm:w-full md:justify-end max-sm:mt-5'>
                        <div className='border max-sm:w-full border-slate-400 p-3'>
                            <div>Message me here</div>
                            <div className='mt-3 space-y-1'>
                                <div className="flex space-x-3 items-center text-slate-400">
                                    <RiTelegramFill
                                        size={25}
                                    />
                                    <a
                                        href='https://t.me/si_rony'
                                        target="_blank"
                                        className='hover:underline'
                                    >
                                        t.me/si_rony
                                    </a>
                                </div>
                                <div className="flex space-x-3 items-center text-slate-400">
                                    <RiLinkedinFill
                                        size={25}
                                    />
                                    <a
                                        href='https://www.linkedin.com/in/sirony'
                                        target="_blank"
                                        className='hover:underline'
                                    >
                                        linkedin/sirony
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact