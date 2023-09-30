'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('c031f118-89b9-4fb5-802d-6442a64a639f')
  }, [])

  return null
}
