import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface pageProps{
    params:{name:string}
}

const slug:FC<pageProps> = ({params}) => {
    console.log("params are:",params)

  return <div>Post :
    <h1>
    {params.name}
    </h1>
  </div>
}

export default slug