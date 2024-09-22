import React from 'react'
import type { Metadata } from 'next';
import { Grid2 as Grid, TextField } from '@mui/material';

export const metadata: Metadata = {
  title: "Contact Me | MSI Rony",
  description: "Get in touch with MSI Rony",
}


const Page = () => {
  return (
    <div className='my-10 space-y-12'>
      <div className="flex flex-col space-y-2">
        <div className="text-4xl font-semibold">
          <span className='text-[#C778DD]'>/</span>contact-me
        </div>
        <div className="text-slate-300">Let's discuss something</div>
      </div>
      <Grid
        container
        spacing={3}
      >
      </Grid>
    </div>
  )
}

export default Page