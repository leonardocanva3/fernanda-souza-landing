"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type WhatsAppEvent =
  | "hero_whatsapp"
  | "menu_whatsapp"
  | "middle_whatsapp"
  | "final_whatsapp"
  | "floating_whatsapp";

type TrackedWhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: WhatsAppEvent;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export function TrackedWhatsAppLink({
  eventName,
  children,
  onClick,
  ...props
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.gtag?.("event", eventName, {
          event_category: "whatsapp",
          event_label: props["aria-label"]?.toString() ?? eventName,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

