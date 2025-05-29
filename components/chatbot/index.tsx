'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Bot } from 'lucide-react'

type Props = {}

const AiChatBot = (props: Props) => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {botOpened && (
        <div className="animate-in slide-in-from-bottom-4 slide-in-from-right-4 duration-300">
          <BotWindow
            errors={errors}
            setChat={setOnChats}
            realtimeMode={onRealTime}
            helpdesk={currentBot?.helpdesk!}
            domainName={currentBot?.name!}
            ref={messageWindowRef}
            help={currentBot?.chatBot?.helpdesk}
            theme={currentBot?.chatBot?.background}
            textColor={currentBot?.chatBot?.textColor}
            chats={onChats}
            register={register}
            onChat={onStartChatting}
            onResponding={onAiTyping}
          />
        </div>
      )}

      {/* Chat Button */}
      <div
        className={cn(
          'group relative rounded-full cursor-pointer shadow-lg w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground hover:scale-110 transition-all duration-200 hover:shadow-xl',
          loading ? 'invisible' : 'visible'
        )}
        onClick={onOpenChatBot}
      >
        {currentBot?.chatBot?.icon ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
              alt="bot"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <Bot className="w-6 h-6" />
        )}

        {/* Pulse animation when closed */}
        {!botOpened && (
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
        )}
      </div>
    </div>
  )
}

export default AiChatBot