'use client'

import React, { useState } from "react";
import Iframe from 'react-iframe';


export default function bitb() {

  const [keyValue, setKeyValue] = useState(false);

  const toggleIframe = () => {
    setKeyValue(!keyValue)
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <div>
        { !keyValue && (
          <button onClick={toggleIframe} className="flex m-5 w-full justify-center rounded-md bg-gradient-to-r from-red-700 via-orange-500 to-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        )}
      
      {
        keyValue && (
          <iframe 
          src="./okta.html"
          width="600"
          height="800"
          className="m-5"
        >
        </iframe>
        )
      }

      </div>
    </main>
  )
}