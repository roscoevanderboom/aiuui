import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import '../css/index.css';
import { AppSidebar } from '@/components/app-sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="h-screen w-full">
            <SidebarTrigger className='float-start' />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
