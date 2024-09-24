import React from 'react';
import Image from 'next/image';
import logo from '@/public/images/index.svg';
import { socials } from '@/lib/data';
import { RiCopyrightLine } from '@remixicon/react';


const Footer = () => {
  return (
    <div className='relative'>
      <div
        className='grid max-sm:grid-cols-1 max-sm:gap-5 grid-cols-2 justify-between'
      >
        <div className='flex flex-col space-y-3 max-sm:items-center'>
          <div className="flex space-x-3">
            <Image
              src={logo}
              alt="Logo"
              width={25}
            />
            <div className="font-bold">SI Rony</div>
          </div>
          <div>
            Sylhet, Bangladesh
          </div>
        </div>
        <div className="flex max-sm:justify-center md:justify-end">
          <div className='flex flex-col space-y-2 max-sm:items-center'>
            <div className="max-sm:hidden text-2xl">Media</div>
            <div className="flex space-x-2">
              {
                socials.map((social: Social, idx: number) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    className='text-slate-400 hover:text-slate-500 transition-all duration-150'
                    rel='noopener noreferrer'
                  >
                    {
                      React.createElement(social.icon, { size: 25 })
                    }
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:mt-7 mt-4 mb-2 max-sm:text-sm flex justify-center items-center space-x-1 text-slate-400">
        <RiCopyrightLine
          size={20}
          className="md:hidden"
        />
        <RiCopyrightLine
          size={25}
          className="max-sm:hidden"
        />
        <div>Copyright {(new Date).getFullYear()}. Made by Rony</div>
      </div>
    </div>
  )
}

export default Footer