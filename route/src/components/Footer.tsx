import React from 'react'

interface FooterLinks {
    heading: string,
    links?: string[]
}

const Footer: React.FC<{FooterLinks: FooterLinks[]}> = ({FooterLinks}) => {
  return (
    <div className='flex gap-16 fixed bottom-0 left-0 w-screen h-max justify-start p-8 items-start border-t'>
        {
            FooterLinks.map((footer)=>(
                <div className='flex flex-col items-center text-left gap-5'>
                    <div className='font-semibold text-xl'>{footer.heading}</div>
                    <div className='flex flex-col items-center'>{footer.links?.map((link)=>(
                        <p className='hover:bg-gray-200 rounded-none w-full cursor-pointer hover:outline-1 hover:outline-slate-500 p-2'>{link}</p>
                    ))}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Footer