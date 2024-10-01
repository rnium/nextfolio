'use client'

import { useEffect } from 'react'
import { usePost } from '@/hooks/use-api';
import { endpoints } from '@/lib/api_data';


const Logger = () => {
    const {perform_post} = usePost(endpoints.logvisit)

    useEffect(() => {
        perform_post({})
    }, [])

    return (
        <div className='hidden'>
            logger
        </div>
    )
}

export default Logger