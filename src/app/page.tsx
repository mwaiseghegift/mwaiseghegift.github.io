import LeftPanel from '@/components/LeftPanel';
import RightPanel from '@/components/RightPanel';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:col-span-4 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
            <LeftPanel />
          </header>
          <main className="pt-24 lg:col-span-8 lg:py-24">
            <RightPanel />
          </main>
        </div>
      </div>
    </>
  );
}
