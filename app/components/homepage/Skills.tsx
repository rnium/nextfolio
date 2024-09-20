import React from 'react';
import { Box, Grid2 as Grid, Stack } from '@mui/material';
import Image from 'next/image';
import { skillGroupsData } from '@/lib/data';
import patterns from '@/public/images/group36.svg'
import SkillGroupItem from '../(micro)/SkillGroupItem';


const Skills = () => {
    return (
        <Box>
            <div className="flex gap-5 items-center">
                <h4 className='text-3xl font-medium'>
                    <span className='text-[#C778DD]'>#</span>
                    skills
                </h4>
                <div className="w-96 h-[1px] bg-[#C778DD]" />
            </div>
            <Grid
                container
                spacing={2}
                sx={{ my: 5, alignItems: 'center', justifyContent: 'center' }}
            >
                <Grid
                    size={{ xs: 0, md: 4 }}
                >
                    <Image
                        src={patterns}
                        alt="Patterns"
                    />
                </Grid>
                <Grid
                    size={{ xs: 12, md: 7 }}
                >
                    <Box>
                        <Grid
                            container
                            spacing={2}
                        >
                            {
                                skillGroupsData.map((groupList: SkillGroup[], idx) => (
                                    <Grid
                                        key={idx}
                                        size={{ xs: 12, md: 4 }}
                                    >
                                        <Stack
                                            spacing={2}
                                        >
                                            {
                                                groupList.map((group: SkillGroup, i) => (
                                                    <SkillGroupItem
                                                        groupData={group}
                                                        key={i}
                                                    />
                                                ))
                                            }
                                        </Stack>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills