import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConnectorsGrid } from '@/components/connectors/ConnectorsGrid';
import { connectors } from '@/lib/connectors';

export const metadata: Metadata = {
  title: 'Connectors — sysConnector',
  description:
    'Browse all supported integrations — lead sources, CRMs, marketing tools, and developer options.',
};

export default function ConnectorsPage() {
  return (
    <>
      <Header />
      <main>
        <ConnectorsGrid connectors={connectors} />
      </main>
      <Footer />
    </>
  );
}
