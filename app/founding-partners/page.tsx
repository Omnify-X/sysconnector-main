import { CampaignPage } from '@/components/sections/CampaignPage';
import { foundingPartners } from '@/lib/content';

export const metadata = {
  title: 'Founding partners — sysConnector',
  description:
    '3 months of sysConnector Professional free, plus WhatsApp Business setup done with you. Limited to 20 teams in Malaysia.',
};

export default function FoundingPartnersPage() {
  return <CampaignPage content={foundingPartners} formSource="Founding partner" />;
}
