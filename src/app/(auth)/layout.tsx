import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Button
        asChild
        variant="outline"
        className="absolute top-4 left-4"
      >
        <Link href="/">
          <ArrowLeft className="size-4" />
        </Link>
      </Button>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          CoursePlatform.
        </Link>
        {children}
        <div className=" text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our
          <span className="hover:text-primary hover:underline">
            {' '}
            Terms of Service
          </span>{' '}
          and
          <span className="hover:text-primary hover:underline">
            {' '}
            Privacy Policy.
          </span>
        </div>
      </div>
    </div>
  );
}
