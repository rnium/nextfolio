'use client'

import { useEffect } from 'react';
import { RiDownloadLine, RiLoader4Line } from '@remixicon/react';
import { useGetFile } from '@/hooks/use-api';
import { endpoints } from '@/lib/api_data';
import { useToast } from '@/hooks/use-toast';


const DownloadResumeBtn = () => {
    const { perform_get, loading, success, error } = useGetFile(endpoints.getresume, 'msi_rony.pdf');
    const { toast } = useToast();
    useEffect(() => {
        if (success) {
            toast({
                title: 'Resume Downloaded',
                description: 'Thank you for your interest!'
            })
        }
        if (error) {
            toast({
                title: 'Sorry.. :(',
                description: 'Cannot download resume at this momemt!',
                variant: 'destructive'
            })
        }
    }, [success, error, toast])
    return (
        <button
            className='btn-primary px-10 disabled:btn-secondary disabled:px-10'
            onClick={() => perform_get()}
            disabled={loading}
        >
            {
                loading ?
                    <RiLoader4Line
                        size={20}
                        className="animate-spin"
                    />
                    :
                    <RiDownloadLine
                        size={20}
                    />
            }
            <span>{loading ? 'Downloading' : 'Resume'}</span>
        </button>
    )
}

export default DownloadResumeBtn