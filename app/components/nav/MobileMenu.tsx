'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/material';
import menuicon from '@/public/images/menu.svg';
import NavLinks from './NavLinks';

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  return (
    <div>
      <button
        onClick={handleClick}
      >
        <Image
          src={menuicon}
          priority
          alt='Toggle'
          className='cursor-pointer'
        />
      </button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              backgroundColor: "#475569CC",
              color: 'white'
            },
            className: "backdrop-blur"
            
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div
          className="px-4 py-5 flex flex-col space-y-2"
          onClick={handleClose}
        >
          <NavLinks />
        </div>
      </Menu>
    </div>
  )
}

export default MobileMenu;