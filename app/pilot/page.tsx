import { CampaignPage } from '@/components/sections/CampaignPage';
import { pilot } from '@/lib/content';

export const metadata = {
  title: 'Pilot programme — sysConnector',
  description:
    'A 30-day sysConnector pilot on one live campaign, set up with your team. Book a 15-minute briefing.',
};

export default function PilotPage() {
  return <CampaignPage content={pilot} formSource="Pilot briefing" />;
}
