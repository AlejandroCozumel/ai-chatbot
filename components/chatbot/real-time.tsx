import React from 'react'
import { Card } from '../ui/card'
import { useRealTime } from '@/hooks/chatbot/use-chatbot'

type Props = {
  chatRoomId: string
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        role: 'user' | 'assistant'
        content: string
        link?: string | undefined
      }[]
    >
  >
}

const RealTimeMode = ({ chatRoomId, setChats }: Props) => {
  useRealTime(chatRoomId, setChats)

  return (
    <Card className="px-3 rounded-full py-1 bg-success text-success-foreground font-bold text-sm shadow-md">
      Real Time
    </Card>
  )
}

export default RealTimeMode