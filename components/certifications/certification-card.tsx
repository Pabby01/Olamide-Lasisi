import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { CertificationInterface } from "@/config/certifications";
import { formatDateFromObj } from "@/lib/utils";

interface CertificationCardProps {
  certifications: CertificationInterface[];
}

export default function CertificationCard({
  certifications,
}: CertificationCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {certifications.map((cert, id) => (
        <Link href={cert.certificateLink} target="_blank" key={id}>
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground h-full">
            <Icons.externalLink
              size={35}
              className="absolute top-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground"
            />
            <div className="flex flex-col rounded-md p-4">
              <div className="space-y-3">
                <div className="aspect-video relative w-full overflow-hidden rounded-md">
                  <Image
                    src={cert.certificateImage}
                    alt={cert.title}
                    fill
                    className="object-cover border bg-muted"
                  />
                </div>
                <h3 className="font-bold text-sm line-clamp-2 min-h-[40px]">
                  {cert.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Icons.organization className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="line-clamp-1">{cert.issuer}</span>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Icons.calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{formatDateFromObj(cert.date)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}