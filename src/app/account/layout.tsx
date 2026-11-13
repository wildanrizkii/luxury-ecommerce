"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { AccountSidebar } from "@/components/account-sidebar"

const subtitleMap: Record<string, string> = {
  "/account/profile": "Manage your profile and preferences",
  "/account/orders": "View your order history",
  "/account/addresses": "Manage your shipping addresses",
  "/account/settings": "Manage your preferences and settings",
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const subtitle = subtitleMap[pathname] || "Manage your account"

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
          {/* Static page header - no replaying initial motion animation */}
          <div className="mb-12">
            <h1 className="font-serif text-3xl lg:text-4xl mb-2">My Account</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <AccountSidebar />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </main>
      <PremiumFooter />
    </>
  )
}
