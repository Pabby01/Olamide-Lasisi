import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CertificationCard from "@/components/certifications/certification-card";
import { Certifications } from "@/config/certifications";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: "Certifications | Olamide Lasisi",
  description: "Professional certifications and achievements",
};

export default function CertificationsPage() {
  return (
    <PageContainer
      title="Certifications"
      description="A collection of professional certifications, training completions, and achievements across legal, technology, and professional development domains."
    >
      <div className="container py-8">
        <CertificationCard certifications={Certifications} />
      </div>
    </PageContainer>
  );
}