import Link from 'next/link'
import * as React from 'react'

interface liPorps {
  body: string
  customStyle?: string
  href: string
}

export const Li = ({ body, customStyle, href, ...pres }: liPorps) => {
  return (
    <li className={`transition-all hover:text-emerald-300 cursor-pointer `}>
      <Link href={href} {...pres}>
        {body}
      </Link>
    </li>
  )
}
