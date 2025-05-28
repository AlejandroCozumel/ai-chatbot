'use client'
import Section from '@/components/section-label'
import { Copy } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

type Props = {
  id: string
}

const CodeSnippet = ({ id }: Props) => {
  let snippet = `
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }

    iframeStyles('
        .chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
        }
    ')

    iframe.src = "http://localhost:3000/chatbot"
    iframe.classList.add('chat-frame')
    document.body.appendChild(iframe)

    window.addEventListener("message", (e) => {
        if(e.origin !== "http://localhost:3000") return null
        let dimensions = JSON.parse(e.data)
        iframe.width = dimensions.width
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("${id}", "http://localhost:3000/")
    })
        `

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet)
    toast.success('Code copied to clipboard!', {
      description: 'You can now paste the code inside your website'
    })
  }

  return (
    <div className="mt-10 flex flex-col gap-5 items-start">
      <Section
        label="Code snippet"
        message="Copy and paste this code snippet into the header tag of your website"
      />
      <div className="bg-muted px-10 rounded-lg inline-block relative">
        <Copy
          className="absolute top-5 right-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
          onClick={handleCopyCode}
        />
        <pre>
          <code className="text-muted-foreground">{snippet}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeSnippet