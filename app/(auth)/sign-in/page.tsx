import { Card, CardHeader } from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sign In',
};

const SigInPage = () => {
  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          
            <Image src='/images/logo.svg' width={100} height={100} alt={`${APP_NAME}`} />
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SigInPage;
