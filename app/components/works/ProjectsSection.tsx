import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
import Project from '../(shared)/Project';

const ProjectsSection = (
    {
        title,
        projects
    }: {
        title: string,
        projects: ProjectData[]
    }
) => {
    return (
        <Box>
            <h4 className='max-sm:text-xl text-3xl font-medium'>
                <span className='text-[#C778DD]'>#</span>
                {title}
            </h4>
            <Grid
                container
                spacing={3}
                sx={{ my: 3 }}
            >
                {
                    projects.map((data: ProjectData, idx: number) => (
                        <Grid
                            key={idx}
                            size={{ xs: 12, sm: 6, md: 4 }}
                        >
                            <Project
                                data={data}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ProjectsSection;