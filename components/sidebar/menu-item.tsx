import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { JSX } from 'react'

type Props = {
  size: 'max' | 'min'
  label: string
  icon: JSX.Element
  path?: string
  current?: string
  onSignOut?(): void
}

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  // For sign out items without a path, render as button
  if (onSignOut && !path) {
    const ButtonContent = size === 'max'
      ? <>{icon} {label}</>
      : icon;

    return (
      <button
        onClick={onSignOut}
        className={cn(
          'transition-colors duration-200 rounded-lg my-1 text-left',
          size === 'max'
            ? 'flex items-center gap-2 px-1 py-2'
            : 'flex justify-center items-center py-2',
          'text-muted-foreground hover:text-foreground hover:bg-accent'
        )}
      >
        {ButtonContent}
      </button>
    )
  }

  // For navigation items
  switch (size) {
    case 'max':
      return (
        <Link
          className={cn(
            'flex items-center gap-2 p-2 rounded-lg my-1 transition-colors duration-200',
            !current
              ? 'text-muted-foreground hover:text-foreground hover:bg-accent'
              : current === path
              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-bold'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon} {label}
        </Link>
      )
    case 'min':
      return (
        <Link
          className={cn(
            'flex justify-center items-center rounded-lg p-2 my-1 transition-colors duration-200',
            !current
              ? 'text-muted-foreground hover:text-foreground hover:bg-accent'
              : current === path
              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-bold'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon}
        </Link>
      )
    default:
      return null
  }
}

export default MenuItem