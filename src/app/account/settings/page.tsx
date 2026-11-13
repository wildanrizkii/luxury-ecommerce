"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      {/* Email Preferences */}
      <section className="mb-12">
                  <h2 className="font-serif text-2xl mb-6">Email Preferences</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">New Arrivals</Label>
                        <p className="text-xs text-muted-foreground mt-1">Be the first to know about new collections</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">Exclusive Offers</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Receive special promotions and private sales
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">Order Updates</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Shipping confirmations and delivery notifications
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">Editorial Content</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stories, styling tips, and behind-the-scenes
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </section>

                {/* Privacy */}
                <section className="mb-12">
                  <h2 className="font-serif text-2xl mb-6">Privacy</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">Personalized Recommendations</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Allow us to suggest items based on your preferences
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <div>
                        <Label className="text-sm font-medium">Analytics Cookies</Label>
                        <p className="text-xs text-muted-foreground mt-1">Help us improve your experience</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </section>

                {/* Danger Zone */}
                <section className="pt-8 border-t border-border">
                  <h2 className="font-serif text-2xl mb-6">Account</h2>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                      <div>
                        <Label className="text-sm font-medium">Download Your Data</Label>
                        <p className="text-xs text-muted-foreground mt-1">Request a copy of all your personal data</p>
                      </div>
                      <Button variant="outline" className="text-sm tracking-widest uppercase bg-transparent">
                        Request Data
                      </Button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                      <div>
                        <Label className="text-sm font-medium text-red-600">Delete Account</Label>
                        <p className="text-xs text-muted-foreground mt-1">
                          Permanently delete your account and all data
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="text-sm tracking-widest uppercase text-red-600 border-red-600/30 hover:bg-red-600/10 hover:text-red-600 bg-transparent"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
  )
}
