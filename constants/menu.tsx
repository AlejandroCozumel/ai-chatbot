import React from 'react'
import {
  Calendar,
  MessageCircle,
  LayoutDashboard,
  Mail,
  HelpCircle,
  Puzzle,
  Settings,
  Star,
  Timer
} from 'lucide-react'

type SIDE_BAR_MENU_PROPS = {
  label: string
  icon: React.ReactElement
  path: string
}

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard />,
    path: 'dashboard',
  },
  {
    label: 'Conversations',
    icon: <MessageCircle />,
    path: 'conversation',
  },
  {
    label: 'Integrations',
    icon: <Puzzle />,
    path: 'integration',
  },
  {
    label: 'Settings',
    icon: <Settings />,
    path: 'settings',
  },
  {
    label: 'Appointments',
    icon: <Calendar />,
    path: 'appointment',
  },
  {
    label: 'Email Marketing',
    icon: <Mail />,
    path: 'email-marketing',
  },
]

type TABS_MENU_PROPS = {
  label: string
  icon?: React.ReactElement
}

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'unread',
    icon: <Mail />,
  },
  {
    label: 'all',
    icon: <Mail />,
  },
  {
    label: 'expired',
    icon: <Timer />,
  },
  {
    label: 'starred',
    icon: <Star />,
  },
]

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'help desk',
  },
  {
    label: 'questions',
  },
]

export const APPOINTMENT_TABLE_HEADER = [
  'Name',
  'RequestedTime',
  'Added Time',
  'Domain',
]

export const EMAIL_MARKETING_HEADER = ['Id', 'Email', 'Answers', 'Domain']

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'chat',
    icon: <MessageCircle />,
  },
  {
    label: 'helpdesk',
    icon: <HelpCircle />,
  },
]