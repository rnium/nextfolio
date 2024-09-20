import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2'
import Project from '../(shared)/Project';
import { projects } from '@/lib/data';

const Projects = () => {
    return (
        <Box>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <h4 className='text-3xl font-medium'>
                        <span className='text-[#C778DD]'>#</span>
                        projects
                    </h4>
                    <div className="max-sm:hidden w-96 h-[1px] bg-[#C778DD]" />
                </div>
                <div>
                    <Link href="/my-works" className="transition-all duration-200 hover:text-slate-400">
                        View All ~~&gt;
                    </Link>
                </div>
            </div>
            <Grid
                container
                spacing={3}
                sx={{my: 3}}
            >
                {
                    projects.slice(0,3).map((data: ProjectData, idx: number) => (
                        <Grid
                            key={idx}
                            size={{ xs: 12, sm: 6, md: 4 }}
                        >
                            <Project 
                                data = {data} 
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Projects