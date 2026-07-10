"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// Lazy-load the heavy request form: its chunk is fetched only when a user
// actually opens the modal, keeping it out of the initial bundle of every
// page that links to a gated video.
const RequestAccessDialog = dynamic(
  () => import("./request-access-dialog").then((m) => m.RequestAccessDialog),
  { ssr: false }
)

type RequestAccessModalProps = {
  open: boolean
  onClose: () => void
  defaultVideo?: string
}

export function RequestAccessModal({ open, onClose, defaultVideo }: RequestAccessModalProps) {
  if (!open) return null
  return <RequestAccessDialog onClose={onClose} defaultVideo={defaultVideo} />
}

type RequestAccessTriggerProps = {
  defaultVideo?: string
  className?: string
  children: React.ReactNode
}

export function RequestAccessTrigger({
  defaultVideo,
  className,
  children,
}: RequestAccessTriggerProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={className} onClick={() => setOpen(true)} type="button">
        {children}
      </button>
      <RequestAccessModal defaultVideo={defaultVideo} onClose={() => setOpen(false)} open={open} />
    </>
  )
}
