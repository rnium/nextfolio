import { Box, Grid2 as Grid, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import about_img from '@/public/images/group50.png'


const About = () => {
  return (
    <Box>
      <div className="flex gap-5 items-center">
        <h4 className='text-3xl font-medium'>
          <span className='text-[#C778DD]'>#</span>
          about-me
        </h4>
        <div className="max-sm:hidden w-96 h-[1px] bg-[#C778DD]" />
      </div>
      <Grid 
        container
        spacing={5}
        alignItems="center"
      >
        <Grid
          size={{ xs: 12, md: 7 }}
          className="max-sm:mt-5"
        >
          <Stack
            spacing={4}
          >
            <div className='text-slate-400'>
              Hello, I'm Rony
            </div>
            <div className='text-slate-400'>
              I'm a full-stack developer based in Sylhet, Bangladesh.
              I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </div>
            <div className='text-slate-400'>
              Transforming my ideas into a solution has been my passion for over four years.
              I have been helping various government and private organizations modernize their traditional workflows and establish their online presence. I always strive to learn about the newest technologies and frameworks.
            </div>
            <div>
              <Link href="/about-me">
                <button className='btn-primary'>
                  Learn More --&gt;
                </button>
              </Link>
            </div>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
        >
          <Stack
            alignItems="flex-end"
          >
            <Image
              src={about_img}
              alt="About Me"
              width={300}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About