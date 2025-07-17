import '@/assets/styles/globals.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log('Root folder layout');
  return <div className='flex-center min-h-screen w-full'>{children}</div>;
}
