'use client'
import React from 'react'
import Button1 from '../components/Button1'
import { MantineProvider } from '@mantine/core'
import Heart from '../components/Heart'

const About = () => {
  return (
    <MantineProvider>
    <div className='w-1/2'>About
      <Button1/>
      <Heart/>
    </div>
    </MantineProvider>
  )
}

export default About