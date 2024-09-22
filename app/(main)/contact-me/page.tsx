import React from 'react'
import type { Metadata } from 'next';
import { Grid2 as Grid } from '@mui/material';
import { socials } from '@/lib/data';
import ContactForm from '@/app/components/contact/ContactForm';

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
        sx={{alignItems: 'center'}}
      >
        <Grid
          size={{ xs: 12, md: 8 }}
          className="space-y-5"
        >
          <div className='text-slate-400'>
            Whether you have a question, feedback, or just want to say hello,
            I'd love to hear from you! Please feel free to reach out by filling
            out the message form below, or use any of the other contact methods listed.
            I'll get back to you as soon as possible.
          </div>
          <ContactForm />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
        >
          <div className='flex max-sm:w-full md:justify-end max-sm:mt-5'>
            <div className='border max-sm:w-full border-slate-400 p-3'>
              <div>Connect me with</div>
              <div className='mt-3 space-y-1'>
                {
                  socials.map((social: Social, idx: number) => (
                    <div
                      key={idx}
                      className="flex space-x-3 items-center text-slate-400"
                    >
                      {
                        React.createElement(social.icon, { size: 25 })
                      }
                      <a
                        href={social.url}
                        target="_blank"
                        className='hover:underline'
                        rel="noreferreer"
                      >
                        {
                          social.title
                        }
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page