'use client'

import { AppScreen } from '@/components/AppScreen'
import Image from 'next/image'


export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        {/* Add children content here */}
        <div>
          <Image
            src="/images/app-demo.png"
            alt="App demo"
            width={375}
            height={812}
            className="rounded-t-2xl"
          />
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
