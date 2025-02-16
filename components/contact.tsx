import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import BlurFade from "./magicui/blur-fade";


interface ContactProps {
    BLUR_FADE_DELAY: number;
}

export default function Contact({ BLUR_FADE_DELAY }: ContactProps) {
    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-6 mt-10">
                <BlurFade delay={BLUR_FADE_DELAY * 16}>
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-black text-white dark:bg-neutral-100 dark:text-black px-3 py-1 text-sm">
                            Contact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-neutral-500">
                            Want to chat? Just shoot me a dm
                        </p>
                    </div>
                </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <Card className="max-w-lg mx-auto shadow-none bg-white dark:bg-neutral-900">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">Contact Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                            <Input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_KEY_CONTACT_FORM} />
                            <div className="space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    type="name"
                                    required
                                    className="dark:border-neutral-400"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                    className="dark:border-neutral-400"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    rows={4}
                                    required
                                    className="dark:border-neutral-400"
                                />
                            </div>
                            <Button size={"lg"} variant={"default"} type="submit" className="w-full rounded-full">
                                {"Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </BlurFade>
        </section>
    );
}
