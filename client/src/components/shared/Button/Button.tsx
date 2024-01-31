import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'

type btnProps = {
  clsNames: string
  redirect: string
  children: any
}

const Button = (props: btnProps) => {
  return (
    <Link href={props.redirect}>
      <div className={`${props.clsNames} w-fit hover:to-violet-900 cursor-pointer hover:from-violet-500 bg-gradient-to-r rounded-2xl from-violet-400 to-violet-600`}>
        {props.children}
      </div>
    </Link>
  )
}

export default Button