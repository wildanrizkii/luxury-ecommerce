"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  return (
    <div className="max-w-2xl">
      <h2 className="font-serif text-2xl mb-8">Personal Information</h2>

      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName" className="text-xs tracking-wide uppercase text-muted-foreground">
              First Name
            </Label>
            <Input
              id="firstName"
              defaultValue="Alexandra"
              className="mt-2 border-border/50 focus:border-foreground"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-xs tracking-wide uppercase text-muted-foreground">
              Last Name
            </Label>
            <Input
              id="lastName"
              defaultValue="Sinclair"
              className="mt-2 border-border/50 focus:border-foreground"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-xs tracking-wide uppercase text-muted-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            defaultValue="alexandra.sinclair@email.com"
            className="mt-2 border-border/50 focus:border-foreground"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-xs tracking-wide uppercase text-muted-foreground">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            defaultValue="+1 (555) 123-4567"
            className="mt-2 border-border/50 focus:border-foreground"
          />
        </div>

        <div>
          <Label htmlFor="birthday" className="text-xs tracking-wide uppercase text-muted-foreground">
            Birthday
          </Label>
          <Input
            id="birthday"
            type="date"
            defaultValue="1988-06-15"
            className="mt-2 border-border/50 focus:border-foreground"
          />
        </div>

        <div className="pt-4">
          <Button className="px-8 py-6 text-sm tracking-[0.15em] uppercase">Save Changes</Button>
        </div>
      </form>

      {/* Password section */}
      <div className="mt-16 pt-16 border-t border-border">
        <h2 className="font-serif text-2xl mb-8">Change Password</h2>

        <form className="space-y-6">
          <div>
            <Label
              htmlFor="currentPassword"
              className="text-xs tracking-wide uppercase text-muted-foreground"
            >
              Current Password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              className="mt-2 border-border/50 focus:border-foreground"
            />
          </div>

          <div>
            <Label htmlFor="newPassword" className="text-xs tracking-wide uppercase text-muted-foreground">
              New Password
            </Label>
            <Input
              id="newPassword"
              type="password"
              className="mt-2 border-border/50 focus:border-foreground"
            />
          </div>

          <div>
            <Label
              htmlFor="confirmPassword"
              className="text-xs tracking-wide uppercase text-muted-foreground"
            >
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="mt-2 border-border/50 focus:border-foreground"
            />
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="px-8 py-6 text-sm tracking-[0.15em] uppercase bg-transparent"
            >
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
