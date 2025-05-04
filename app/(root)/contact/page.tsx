import { Metadata } from "next";
import Link from "next/link";

import PageContainer from "@/components/common/page-container";
import { Icons } from "@/components/common/icons";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icons.gmail className="h-5 w-5 text-muted-foreground" />
                  <Link href="mailto:olamihero@gmail.com" className="hover:underline">
                  olamihero@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.gmail className="h-5 w-5 text-muted-foreground" />
                  <Link href="mailto:lasisiolamide.h@outlook.com" className="hover:underline">
                  lasisiolamide.h@outlook.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.contact className="h-5 w-5 text-muted-foreground" />
                  <Link href="tel:+2348160408614" className="hover:underline">
                    +234 816 040 8614
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href={siteConfig.links.linkedin} target="_blank" className="hover:underline">
                    LinkedIn Profile
                  </Link>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM (WAT)
                </p>
                <p className="text-muted-foreground">
                  Available for virtual consultations by appointment
                </p>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <p className="text-muted-foreground">
                  Lagos, Nigeria
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
