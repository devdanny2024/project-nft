import { Button } from '@/components/ui/button'
import React from 'react'

const DealTitle = () => {
  return (
    <div className='flex items-center justify-between pt-10'>
        <div className="space-y-4">
            <div className="">
                <h1 className="text-3xl font-bold">Deals</h1>
            </div>
            <div className="text-gray-400">Check what deals other Traders have made</div>
        </div>
        <div className="">
            <Button className='text-sm bg-[#33BBC5]' size={'lg'}>Create Trade</Button>
        </div>
    </div>
  )
}

export default DealTitle