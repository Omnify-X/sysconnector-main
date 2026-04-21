export type Status = 'live' | 'coming-soon';
export type Category =
  | 'Advertising & Social'
  | 'CRM & Marketing'
  | 'Data & Files'
  | 'Developer';

export interface Connector {
  slug: string;
  name: string;
  category: Category;
  description: string;
  status: Status;
  icon?: string;
}

export const categories: Category[] = [
  'Advertising & Social',
  'CRM & Marketing',
  'Data & Files',
  'Developer',
];

export const connectors: Connector[] = [
  // Advertising & Social
  {
    slug: 'meta',
    name: 'Meta',
    category: 'Advertising & Social',
    description: 'Capture leads from Meta Lead Ads across Facebook and Instagram.',
    status: 'live',
  },
  {
    slug: 'linkedin',
    name: 'LinkedIn',
    category: 'Advertising & Social',
    description: 'Sync leads from LinkedIn Lead Gen Forms in real time.',
    status: 'live',
  },
  {
    slug: 'tiktok',
    name: 'TikTok',
    category: 'Advertising & Social',
    description: 'Pull leads from TikTok Lead Generation campaigns automatically.',
    status: 'live',
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp',
    category: 'Advertising & Social',
    description: 'Route leads captured via WhatsApp Business flows.',
    status: 'live',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    category: 'Advertising & Social',
    description: 'Connect Google Lead Form extensions directly to your CRM.',
    status: 'coming-soon',
  },
  // CRM & Marketing
  {
    slug: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Marketing',
    description: 'Create or update contacts and deals in HubSpot automatically.',
    status: 'live',
  },
  {
    slug: 'brevo',
    name: 'Brevo',
    category: 'CRM & Marketing',
    description: 'Add subscribers and trigger email sequences in Brevo.',
    status: 'live',
  },
  {
    slug: 'adobe-campaign',
    name: 'Adobe Campaign',
    category: 'CRM & Marketing',
    description: 'Push leads into Adobe Campaign for enterprise marketing workflows.',
    status: 'live',
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    category: 'CRM & Marketing',
    description: 'Sync leads and contacts directly into Salesforce CRM.',
    status: 'coming-soon',
  },
  {
    slug: 'mailchimp',
    name: 'Mailchimp',
    category: 'CRM & Marketing',
    description: 'Add subscribers to Mailchimp audiences and automations.',
    status: 'coming-soon',
  },
  // Data & Files
  {
    slug: 'google-sheets',
    name: 'Google Sheets',
    category: 'Data & Files',
    description: 'Read from or write leads to any Google Sheet in real time.',
    status: 'live',
  },
  {
    slug: 'csv',
    name: 'CSV / Flat Files',
    category: 'Data & Files',
    description: 'Import leads from CSV, TSV, or other flat file formats.',
    status: 'live',
  },
  {
    slug: 'sftp',
    name: 'SFTP',
    category: 'Data & Files',
    description: 'Transfer lead files securely over SFTP on a schedule.',
    status: 'live',
  },
  // Developer
  {
    slug: 'web-forms',
    name: 'Web Forms',
    category: 'Developer',
    description: 'Connect any web form via a lightweight JavaScript embed.',
    status: 'live',
  },
  {
    slug: 'webhook',
    name: 'Webhook',
    category: 'Developer',
    description: 'Send or receive lead data over HTTP with a custom webhook.',
    status: 'live',
  },
];
