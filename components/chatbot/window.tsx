import { ChatBotMessageProps } from "@/schemas/conversation.schema";
import React, { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RealTimeMode from "./real-time";
import Image from "next/image";
import TabsMenu from "../tabs";
import { BOT_TABS_MENU } from "@/constants/menu";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import Bubble from "./bubble";
import { Responding } from "./responding";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Paperclip, Send, X, Minimize2 } from "lucide-react";
import { Label } from "../ui/label";
import { CardDescription, CardTitle } from "../ui/card";
import Accordion from "../accordion";
import UploadButton from "../upload-button";

type Props = {
  errors: any;
  register: UseFormRegister<ChatBotMessageProps>;
  chats: { role: "assistant" | "user"; content: string; link?: string }[];
  onChat(): void;
  onResponding: boolean;
  domainName: string;
  theme?: string | null;
  textColor?: string | null;
  help?: boolean;
  realtimeMode:
    | {
        chatroom: string;
        mode: boolean;
      }
    | undefined;
  helpdesk: {
    id: string;
    question: string;
    answer: string;
    domainId: string | null;
  }[];
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        role: "user" | "assistant";
        content: string;
        link?: string | undefined;
      }[]
    >
  >;
};

export const BotWindow = forwardRef<HTMLDivElement, Props>(
  (
    {
      errors,
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      helpdesk,
      realtimeMode,
      setChat,
      textColor,
      theme,
      help,
    },
    ref
  ) => {
    return (
      <div className="w-96 h-[600px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col justify-between">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 border-2 border-primary-foreground/20">
              <AvatarImage src="https://github.com/shadcn.png" alt="Sales Rep" />
              <AvatarFallback className="bg-primary-foreground text-primary text-sm font-semibold">
                SR
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">Sales Rep</h3>
              <p className="text-xs opacity-90">Web Prodigies</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs opacity-75">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary-foreground/10">
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary-foreground/10">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Real-time mode indicator */}
        {realtimeMode?.mode && (
          <div className="bg-green-50 border-b border-green-200 px-4 py-2">
            <RealTimeMode
              setChats={setChat}
              chatRoomId={realtimeMode.chatroom}
            />
          </div>
        )}

        {/* Tabs */}
        <TabsMenu
          triggers={BOT_TABS_MENU}
          className="bg-transparent border-0 px-4 pt-2"
        >
          <TabsContent value="chat" className="mt-0 flex-1 flex flex-col">
            {/* Chat Messages */}
            <div
              className="flex-1 px-4 py-4 overflow-y-auto space-y-4 chat-window"
              style={{
                background: theme || "",
                color: textColor || "",
              }}
              ref={ref}
            >
              {/* Welcome message */}
              {chats.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Sales Rep" />
                      <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    👋 Welcome to {domainName.split(".com")[0]}!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    How can we help you today?
                  </p>
                </div>
              )}

              {chats.map((chat, key) => (
                <Bubble key={key} message={chat} />
              ))}
              {onResponding && <Responding />}
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-background">
              <form onSubmit={onChat} className="p-4">
                <div className="flex items-end gap-2">
                  <div className="flex-1 min-h-[40px] max-h-32 bg-muted rounded-2xl border border-border flex items-center px-4">
                    <Input
                      {...register("content")}
                      placeholder="Type your message..."
                      className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground resize-none"
                    />
                    <Label htmlFor="bot-image" className="cursor-pointer p-2 hover:bg-background rounded-full transition-colors">
                      <Paperclip className="h-4 w-4 text-muted-foreground" />
                      <Input
                        {...register("image")}
                        type="file"
                        id="bot-image"
                        className="hidden"
                      />
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="h-10 px-4 rounded-2xl bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="helpdesk" className="mt-0 flex-1">
            <div className="h-full overflow-y-auto p-4 space-y-4">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  💡 Frequently Asked Questions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Browse common questions and get instant answers.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                {helpdesk.map((desk) => (
                  <Accordion
                    key={desk.id}
                    trigger={desk.question}
                    content={desk.answer}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </TabsMenu>

        {/* Footer */}
        <div className="px-4 py-3 bg-muted/30 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            Powered by <span className="font-medium text-primary">Dalia Empower</span>
          </p>
        </div>
      </div>
    );
  }
);