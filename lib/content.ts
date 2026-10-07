/**
 * All copy lives here. Edit this file to update the site content.
 */

export const hero = {
  eyebrow: 'Social Lead & Messaging Platform',
  headline:
    'Every DM answered instantly. Every ad lead in your CRM in real time.',
  subhead:
    'Bots on WhatsApp, Instagram, and Messenger reply, qualify, and capture the lead. Meta, TikTok, and LinkedIn ad leads sync the moment they’re submitted. Both land in HubSpot, Salesforce, Brevo, or your CRM.',
  bullets: [
    'Bots that reply in your brand’s voice, 24/7',
    'Ad leads synced as they’re captured, with alerts if a sync fails',
    'Leads with the same email or phone merged into one profile',
  ],
  cta: 'Start free',
  note: 'Free forever for lead sync up to 100 leads a month · Bots from $39 · Customer Profiles from $99',
};

export const flowDiagram = {
  sources: {
    title: 'Lead Sources',
    items: [
      'Meta',
      'LinkedIn',
      'TikTok',
      'WhatsApp',
      'Instagram DM',
      'Facebook Messenger',
      'Google Sheets',
      'SFTP (CSV files)',
    ],
  },
  hub: {
    title: 'sysConnector',
    subtitle: 'Reply · Sync · Unify',
  },
  destinations: {
    title: 'CRM & Marketing Platforms',
    items: [
      'Adobe Campaign',
      'Brevo',
      'HubSpot',
      'Salesforce CRM',
      'Notion',
      'Google Sheets',
      'SFTP',
      'Webhook',
    ],
  },
};

export const painPoints = {
  heading: 'Your fastest-converting moment is the one you’re missing.',
  intro:
    'Someone messages “price?” on WhatsApp at 11pm, or fills your lead form — and then waits. The chat goes unanswered. The form sits in Meta or a spreadsheet until someone exports it. By the time your team follows up, they’ve already messaged a competitor.',
  negativeList: [
    'Leads sit in ad platforms and inboxes for hours',
    'Zapier chains break silently — you find out when the leads stop coming',
    'Marketing, sales, and agencies each see a different version of the customer',
  ],
};

export const solution = {
  heading: 'From first message or ad click to your CRM — in real time.',
  paragraphs: [
    'Messages get an instant reply from your bot. Form leads land in your CRM the moment they’re submitted, so your CRM’s own assignment rules and notifications kick in straight away. Leads with the same email or phone become one customer profile. No developers, no duct tape.',
    'Bots are live now on WhatsApp, Instagram, and Messenger. They reply, qualify, and turn chats into structured CRM leads. When a customer asks for a person, the bot hands over and emails your team.',
  ],
};

export const whyLayer = {
  heading: 'Why a layer, not another integration',
  subheading:
    'Point-to-point connectors move data from A to B. They don’t tell you who the customer is.',
  items: [
    {
      title: 'One customer across every platform',
      body: 'Meta only sees Meta. TikTok only sees TikTok. Ad platforms have no reason to merge each other’s data — sysConnector does. When the same email turns up in a Meta form, a TikTok form, and a bot conversation, that’s one customer, not three leads.',
    },
    {
      title: 'Control who sees what',
      body: 'Mask personal data for any agency or external user you invite, connection by connection — they can run campaigns without seeing your customers’ details.',
    },
  ],
};

export const features = {
  heading: 'What you get',
  cards: [
    {
      title: 'Give your bot a persona — and rules for what it does next',
      body: 'Define an AI persona so every reply sounds like your brand, then set response rules per keyword: the action to take and the intent behind it — capture a lead, hand over a CTA, send a promo code, or surface your T&Cs. No developer, no flowchart tool.',
      note: 'Your bot handles the first conversation and captures the lead; your team follows up from the CRM.',
    },
    {
      title: 'Real-time sync from every social lead ad platform',
      body: 'Capture and route leads from Meta, LinkedIn, and TikTok as they come in. AI suggests how your fields map to your CRM, and you can combine fields, convert types, and filter out what you don’t need — so your CRM stays consistent from day one.',
      note: 'You get an email the moment a sync fails, with the error logged against the lead.',
    },
    {
      title: 'Unified Customer Profiles across all sources',
      body: 'Every lead from every platform lands in one structured profile. See who\'s converting, from where, across all your campaigns — without building a CDP from scratch.',
      note: 'Your sales team sees where each lead came from before they make the first call.',
    },
    {
      title: 'Project workspaces for every team',
      body: 'Organise your connections, leads, and data into separate workspaces — by client, brand, campaign, or team. Everything stays isolated, nothing bleeds across projects.',
      note: 'Built for agencies, enterprise teams, and anyone managing more than one integration at a time.',
    },
    {
      title: 'Security and data control',
      body: 'Data is encrypted in transit, and connection credentials are encrypted at rest. Role-based permissions mean team members only access what they need. PII masking ensures external users and agencies never see what they shouldn\'t. Sync logs keep a history of every lead.',
      note: 'Built for teams that handle sensitive customer data across multiple clients.',
    },
  ],
};

export const customerProfile = {
  heading: 'Every lead becomes a unified Customer Profile',
  quote:
    'The kind of single customer view across all your ad sources that previously lived only inside enterprise data platforms — now available without a developer or a six-figure contract.',
  caption:
    'Every lead from every source lands in one structured profile — clean, consistent, and ready for attribution, segmentation, and follow-up.',
  aiFeatures: [
    {
      label: 'AI field mapping',
      body: 'sysConnector suggests how your source fields map to your CRM fields — so your data lands clean without manual matching or a developer. Only field names go to the AI, never your customer data.',
    },
    {
      label: 'AI profile insights',
      body: 'Open any profile and get a plain-English summary — engagement history, data completeness gaps, and quality flags. Emails, phone numbers, addresses, and surnames are masked before anything reaches the AI.',
    },
  ],
};

export const targetAudience = {
  heading: 'Built for teams that live on lead ads and DMs',
  intro:
    'Especially if your customers message you before they buy.',
  idealFor: [
    'Agencies running lead ads for several clients — without seeing their customer data',
    'Education: WhatsApp enquiries answered at 11pm, before students apply elsewhere',
    'Property: every launch-campaign lead in the CRM before the sales team asks for it',
    'Automotive: test-drive enquiries from ads and chats captured in one place',
    'Marketing and CRM ops teams tired of babysitting Zapier chains',
  ],
  askYourself: [
    'Do you trust your CRM data… or just tolerate it?',
    'If a sync breaks, do you know immediately — or days later?',
    'Are DMs and WhatsApp messages slipping through the cracks while your team’s attention is elsewhere?',
    'Do you need to collaborate with agencies without exposing PII?',
  ],
  punchline:
    'If you said “yes” more than once… it’s probably time to stop patching and start controlling.',
};

export const testimonials = {
  heading: 'What we hear from marketing teams',
  quotes: [
    '“We’re using Zapier but it randomly stops.”',
    '“Our leads sit in Meta for hours before anyone follows up.”',
    '“Marketing and sales argue because the data doesn’t match.”',
    '“Agencies need access… but they shouldn’t see customer PII.”',
  ],
  outro: [
    'You’re not alone. Most teams still struggle to get their data where it needs to be, in real time, without breaking something.',
    'We built sysConnector to solve these exact problems.',
  ],
};

export const futureIntegrations = {
  heading: 'Future Integrations',
  body: [
    'We’re continuously expanding the ecosystem.',
    'Coming next: Comment-to-DM — when someone comments “price?” on your post, your bot opens a private conversation and captures the lead.',
    'Upcoming integrations will include additional CRMs, marketing tools, and channels beyond WhatsApp, Instagram, and Messenger.',
    'Users can also request integrations.',
  ],
};

export const finalCta = {
  badge: 'Free plan',
  heading: 'See it with your own leads.',
  subhead:
    'Start free with real-time lead sync for up to 100 leads a month. Add bots and Customer Profiles when you’re ready.',
  body: 'Start with the source that’s costing you the most leads today, and add the rest when you’re ready.',
  bullets: [
    'Auto-reply bots that turn conversations into CRM leads — from Starter',
    'Unified Customer Profiles across every source — from Professional',
    'Project workspaces that keep client data isolated',
    'PII masking so agencies never see what they shouldn’t — on Scale',
  ],
  pitch:
    'sysConnector isn’t another connector. It’s the layer that keeps every channel, team, and tool working from the same customer.',
  cta: 'Start free',
};

export const footer = {
  tagline:
    'Built for teams who never want to lose a lead — or lose track of their customers',
  copyright: '© 2026 sysConnector.',
  links: [
    { label: 'Connectors', href: '/connectors' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/blog' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export const signupModal = {
  heading: 'Stop losing leads from your social media campaigns',
  body: 'Start free and see how much lighter lead management feels when everything is in one place.',
  cta: 'Start free',
};

/**
 * Plan limits mirror the tier_plans rows in sysconnector-be
 * (migrations 2026_08_05 ai_messaging_tier_limits + 2026_08_09 starter_ai_messaging),
 * checked against the live GET /api/v1/billing/plans on 2026-10-07.
 * Automations, audit log and API access are plan flags with no working feature yet — keep them off this page until they ship.
 * Update both together.
 */
export const pricing = {
  heading: 'Simple pricing that grows with your leads',
  intro:
    'Start free with real-time lead sync. Upgrade when you need bots, Customer Profiles, or your team on board. Prices in USD.',
  plans: [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Try real-time lead sync on one connection.',
      cta: 'Start free',
      highlights: ['100 leads / month', '1 connection', 'Real-time & batch sync', 'Just you'],
    },
    {
      name: 'Starter',
      price: '$39',
      period: 'per month',
      description: 'Solo operators who want a bot answering enquiries.',
      cta: 'Start with Starter',
      highlights: ['7,500 leads / month', '4 connections', '1 AI bot on WhatsApp, Instagram, or Messenger · 250 messages / month', 'Just you'],
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Marketing and CRM teams who want one view of every customer.',
      cta: 'Start with Professional',
      featured: true,
      highlights: ['30,000 leads / month', '10 connections', 'AI bots on 3 channels · 1,000 messages / month', 'Unified Customer Profiles', 'You + 5 team members'],
    },
    {
      name: 'Scale',
      price: '$379',
      period: 'per month',
      description: 'Agencies and high-volume teams managing several clients.',
      cta: 'Start with Scale',
      highlights: ['150,000 leads / month', 'Unlimited connections', 'AI bots on unlimited channels · 10,000 messages / month', 'PII masking for agencies', 'You + 25 team members'],
    },
  ],
  compareHeading: 'Compare plans',
  // Cell values: true = included, false = not included, string = shown as-is.
  rows: [
    { label: 'Leads per month', values: ['100', '7,500', '30,000', '150,000'] },
    { label: 'Connections', values: ['1', '4', '10', 'Unlimited'] },
    { label: 'Projects', values: ['1', '3', 'Unlimited', 'Unlimited'] },
    { label: 'Team members', values: ['Just you', 'Just you', 'You + 5', 'You + 25'] },
    { label: 'Real-time & batch sync', values: [true, true, true, true] },
    { label: 'Two-way sync', values: [false, false, true, true] },
    { label: 'AI messaging bots', values: [false, '1 bot', '3 channels', 'Unlimited channels'] },
    { label: 'AI messages per month', values: ['—', '250', '1,000', '10,000'] },
    { label: 'Unified Customer Profiles', values: [false, false, true, true] },
    { label: 'Outbound webhooks', values: [false, false, true, true] },
    { label: 'Advanced reporting', values: [false, false, true, true] },
    { label: 'PII masking', values: [false, false, false, true] },
    { label: 'Sync log history', values: ['30 days', '30 days', '60 days', '90 days'] },
    { label: 'Data retention', values: ['6 months', '6 months', '12 months', '24 months'] },
    { label: 'Support', values: ['Community', 'Community', 'Email', 'Priority'] },
  ],
  enterprise: {
    heading: 'Enterprise',
    body: 'Custom limits, an SLA, and dedicated support for larger teams.',
    cta: 'Talk to us',
  },
};

/** Campaign page for WNMY and LinkedIn outreach. Plan and cap live here. */
export const foundingPartners = {
  eyebrow: 'Founding partners · Malaysia',
  headline: 'Join our first 20 founding partners in Malaysia.',
  subhead:
    'Get 3 months of sysConnector Professional free — and we’ll set up your WhatsApp Business account with you, so you skip the part where most teams get stuck.',
  cta: 'Apply in 2 minutes',
  get: {
    heading: 'What you get',
    items: [
      {
        title: '3 months of Professional, free',
        body: 'AI bots on WhatsApp, Instagram, and Messenger, unified Customer Profiles, 30,000 leads a month, and room for 5 teammates. Worth US$297.',
      },
      {
        title: 'WhatsApp setup, done with you',
        body: 'Meta business verification, your WhatsApp number, and your first bot — we work through it with you on a call instead of leaving you in a queue.',
      },
      {
        title: 'A direct line to the team',
        body: 'Message the people building sysConnector. What founding partners ask for shapes what we build next.',
      },
    ],
  },
  ask: {
    heading: 'What we ask in return',
    items: [
      'Use sysConnector on at least one live lead campaign',
      'A 30-minute feedback call once a month',
      'If it works for you, let us share your results (only with your permission)',
    ],
  },
  forWho: {
    heading: 'A good fit if you run lead ads or take enquiries on WhatsApp',
    items: [
      'Education: course and open-day enquiries',
      'Property: launch campaigns and showroom leads',
      'Automotive: test-drive and service enquiries',
      'Agencies running lead ads for clients',
    ],
  },
  steps: {
    heading: 'How it works',
    items: [
      { title: 'Apply', body: 'Tell us what you run lead ads or WhatsApp enquiries for. It takes 2 minutes.' },
      { title: 'Setup call', body: 'We book a call to connect your channels, your CRM, and your first bot.' },
      { title: 'Go live', body: 'Your bot answers enquiries, your leads land in your CRM, and repeat leads merge into one customer profile.' },
    ],
  },
  form: {
    heading: 'Apply to be a founding partner',
    messageLabel: 'What do you run lead ads or WhatsApp enquiries for?',
    submitLabel: 'Apply now',
  },
  smallPrint:
    'Limited to 20 teams, for new sysConnector accounts. After 3 months you can stay on Professional at US$99/month or move to any plan, including Free.',
};
