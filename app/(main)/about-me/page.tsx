import React from 'react';
import { Grid2 as Grid } from '@mui/material';
import type { Metadata } from 'next';
import Image from 'next/image';
import { aboutme_details } from '@/lib/data';
import myPhoto from '@/public/images/photo1.jpg';
import { RiDownloadLine } from '@remixicon/react';


export const metadata: Metadata = {
  title: "About Me | MSI Rony",
  description: "Learn more about MSI Rony",
}

const Page = () => {
  return (
    <div className="my-10 space-y-12">
      <div className="flex flex-col space-y-2">
        <div className="text-4xl font-semibold">
          <span className='text-[#C778DD]'>/</span>about-me
        </div>
        <div className="text-slate-300">Who am I?</div>
      </div>
      <Grid
        container
        spacing={{ xs: 5, md: 15 }}
      >
        <Grid
          size={{ xs: 12, md: 7 }}
        >
          <div className="flex flex-col space-y-5">
            {
              aboutme_details.map((data: string, idx: number) => (
                <div
                  key={idx}
                  className="text-slate-400"
                >
                  {data}
                </div>
              ))
            }
            <div className="flex pt-5 max-sm:justify-center">
              <button
                className='btn-primary px-10'
              >
                <RiDownloadLine 
                  size={20}
                />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
        >
          <div
            className='flex justify-end relative'
          >
            <Image
              src={myPhoto}
              placeholder="blur"
              alt='Me'
              className='rounded-xl border z-0 border-slate-600 drop-shadow-xl'
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page