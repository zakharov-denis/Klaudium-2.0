"use client";

import { useState } from "react";
import { EnrollModal } from "./EnrollModal";

interface EnrollButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function EnrollButton({ className, children }: EnrollButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <EnrollModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
