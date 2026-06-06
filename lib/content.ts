/**
 * All copy lives here. Edit this file to update the site content.
 * Strings are kept verbatim from the original sysconnector.com homepage.
 */

export const hero = {
  headline: 'Purpose-built for social lead ads and messaging apps.',
  subhead:
    'Capture leads in real time from every social lead ad platform and messaging app — WhatsApp today, more to come. sysConnector builds unified Customer Profiles across every source and routes them to HubSpot, Salesforce, Adobe Campaign, and more.',
  bullets: [
    'Real-time sync from every social lead ad platform.',
    'Messaging bots that capture leads without an ad form.',
    'Unified Customer Profiles across all your sources.',
  ],
  cta: 'Create Free Account',
};

export const flowDiagram = {
  sources: {
    title: 'Lead Sources',
    items: [
      'Meta',
      'LinkedIn',
      'TikTok',
      'WhatsApp',
      'Google Sheets',
      'Web Forms',
      'Flat Files',
    ],
  },
  hub: {
    title: 'sysConnector',
    subtitle: 'Lead Sync + Customer Profiles',
  },
  destinations: {
    title: 'CRM & Marketing Platforms',
    items: [
      'Adobe Campaign',
      'Brevo',
      'HubSpot',
      'Salesforce CRM',
      'Google Sheets',
      'SFTP',
      'Webhook',
    ],
  },
};

export const problemIntro = {
  heading: 'Built for teams running lead generation campaigns',
  paragraphs: [
    'Modern marketing teams rely on dozens of tools to run campaigns and manage customer data.',
    'But those systems rarely talk to each other properly.',
    'So teams end up dealing with:',
  ],
  list: [
    'leads stuck in disconnected platforms',
    'manual exports into spreadsheets',
    'integrations that silently break',
    'CRM data that becomes outdated',
    'delayed follow-ups',
    'messy customer data',
    'hours spent troubleshooting data sync issues',
  ],
  closing: [
    'Your tools were supposed to make marketing easier.',
    'Instead, your team spends too much time just trying to keep them connected.',
    'sysConnector was built to fix this',
  ],
};

export const painPoints = {
  heading: 'Your leads are scattered everywhere.',
  intro: 'Modern lead generation happens across many platforms:',
  sources: [
    'Meta Lead Ads',
    'LinkedIn Lead Forms',
    'TikTok campaigns',
    'WhatsApp conversations',
    'Google Sheets',
    'SFTP files',
    'CSV files',
  ],
  middleLead: 'But most teams still manage these manually.',
  middleFollow: 'Which means:',
  negativeList: [
    'leads sit inside ad platforms',
    'response time becomes slow',
    'data becomes inconsistent',
    'teams lose visibility',
  ],
  punchline:
    'By the time your team responds, the prospect may already be talking to a competitor.',
  pullquote:
    'It probably feels like your integrations are held together by duct tape.',
  pullquoteFollow:
    'And if something breaks, you’re the one who finds out… after leads go missing.',
  familiarHeading: 'Sound familiar?',
  familiarQuotes: [
    '“We’re using Zapier but it randomly stops.”',
    '“Our CRM is full of duplicates and incomplete records.”',
    '“Marketing and sales argue because the data doesn’t match.”',
    '“Agencies need access… but they shouldn’t see customer PII.”',
  ],
  closingQuestion:
    'What if your team didn’t have to babysit syncs ever again?',
};

export const breakingLeadFlow = {
  heading: 'What’s actually breaking your lead flow today',
  subheading:
    'Most teams don’t lose leads because of bad campaigns — they lose them because their systems don’t work together.',
  items: [
    {
      title: 'Patchy syncs & silent failures',
      body: 'Most tools fail quietly. You only notice when the campaign performance drops or follow-up is too late.',
    },
    {
      title: 'Leads scattered across tools – no single customer view',
      body: 'Leads come from Meta, LinkedIn, TikTok, WhatsApp, and more – but each lives in a different system. Most integration tools just move data between workflows, so you still don’t get a clear, unified view of your customers.',
    },
    {
      title: 'Field mismatches, messy data, duplicate records',
      body: 'Your systems don’t agree on what a “lead” looks like. So your data becomes inconsistent and your reporting is never clean.',
    },
    {
      title: 'No simple way to transform/enrich data before sync',
      body: 'Need to split names, standardise phone formats, or map custom fields? That usually means another tool… or a developer.',
    },
    {
      title: 'Too many workflows across teams and clients',
      body: 'Every integration ends up as its own little monster. Multiply that by 5 systems and 10 projects and it becomes impossible to manage.',
    },
    {
      title: 'Debugging is a nightmare',
      body: 'Something failed again? No logs. No alerts. Just lost data and a guessing game.',
    },
    {
      title: 'Risky access control (especially with agencies)',
      body: 'Giving access shouldn’t mean exposing sensitive customer data. But most setups don’t give you that control.',
    },
    {
      title: 'Security risks you can’t ignore',
      body: 'Handling customer data through fragile or manual processes increases compliance risk.',
    },
  ],
};

export const solution = {
  heading: 'Built differently — because the problem needed a different tool.',
  paragraphs: [
    'Most sync tools move data between workflows. sysConnector is built specifically for social lead ads and messaging apps — and it goes further than any sync tool has before.',
    'It expands where leads come from — native messaging bots turn conversations into structured CRM leads without an ad form. WhatsApp is the start; more messaging platforms are on the way. It syncs every source in real time. And it builds unified Customer Profiles across all your ad and messaging sources — the kind of visibility that previously only existed inside enterprise data platforms.',
    'One platform. Four tools replaced.',
  ],
};

export const features = {
  heading: 'What makes sysConnector different',
  cards: [
    {
      title: 'Messaging bots: turn conversations into leads',
      body: 'Build a bot with your qualifying questions. Someone messages it, answers your questions, and their responses arrive in your CRM as a structured lead — no ad form required. Starting with WhatsApp, with more messaging platforms to follow.',
      note: 'The only lead sync platform with native messaging bots as a lead source.',
    },
    {
      title: 'Real-time sync from every social lead ad platform',
      body: 'Capture and route leads from Meta, LinkedIn, and TikTok the moment they submit — no polling, no delays, no missed enquiries. Fields are transformed and cleaned in transit so your CRM stays consistent from day one.',
      note: 'Stays connected even when ad platforms update their APIs.',
    },
    {
      title: 'Unified Customer Profiles across all sources',
      body: 'Every lead from every platform lands in one structured profile. See who\'s converting, from where, across all your campaigns — without building a CDP from scratch.',
      note: 'The kind of visibility that used to require an enterprise data platform and a developer.',
    },
    {
      title: 'Enterprise-grade security',
      body: 'Data is encrypted at rest and in transit. Role-based permissions mean team members only access what they need. PII masking ensures external users and agencies never see what they shouldn\'t. Full audit logs give you a complete record of every sync and every change.',
      note: 'Built for teams that handle sensitive customer data across multiple clients.',
    },
    {
      title: 'Project workspaces for every team',
      body: 'Organise your connections, leads, and data into separate workspaces — by client, brand, campaign, or team. Everything stays isolated, nothing bleeds across projects.',
      note: 'Built for agencies, enterprise teams, and anyone managing more than one integration at a time.',
    },
    {
      title: 'Full sync visibility and instant alerts',
      body: 'See every sync, every failure, and every field mismatch in real time. Know the moment something breaks — before your client does.',
      note: 'No more finding out days later that leads went missing.',
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
      body: 'Open any profile and get a plain-English summary — engagement history, data completeness gaps, and quality flags. PII is masked before anything reaches the AI.',
    },
  ],
};

export const targetAudience = {
  heading: 'Is this you?',
  intro:
    'sysConnector works best for teams running lead generation campaigns.',
  idealFor: [
    'Agencies managing multiple client stacks',
    'Teams managing multiple lead generation campaigns',
    'Businesses running social media ads',
    'Marketing Ops teams',
    'CRM admins',
    'Growth & demand gen teams',
    'Sales ops teams who want clean pipeline data',
  ],
  askYourself: [
    'Do you trust your CRM data… or just tolerate it?',
    'If a sync breaks, do you know immediately — or days later?',
    'Are you tired of “almost working” integrations?',
    'Do you need to collaborate with agencies without exposing PII?',
    'Are you managing multiple clients, brands, or projects under one roof?',
  ],
  punchline:
    'If you said “yes” more than once… it’s probably time to stop patching and start controlling.',
};

export const testimonials = {
  heading: 'Why Teams Are Excited About sysConnector',
  quotes: [
    '“It shouldn’t be this hard to sync leads from a form to my CRM.”',
    '“That’s exactly our problem — syncs fail and we only find out when it’s too late.”',
    '“We needed one place to manage integrations across clients without exposing PII.”',
    '“Finally something that lets us clean and map data before it hits the CRM.”',
  ],
  outro: [
    'You’re not alone. Modern teams still struggle to get their data where it needs to be, in real time, without breaking something.',
    'We’ve listened. And we’ve built sysConnector to solve these exact problems.',
  ],
};

export const futureIntegrations = {
  heading: 'Future Integrations',
  body: [
    'We’re continuously expanding the ecosystem.',
    'Upcoming integrations will include additional CRMs, marketing tools, and messaging platforms.',
    'Users can also request integrations.',
  ],
};

export const finalCta = {
  heading: "One platform. Four tools replaced.",
  subhead:
    "Most teams running social lead ad campaigns are stitching together a lead sync tool, messaging bots, a customer data platform, and an agency workspace tool. sysConnector is all four.",
  body: "If you’re juggling several systems, campaigns, or client stacks — sysConnector gives you one place to manage everything cleanly.",
  bullets: [
    "Messaging bots that turn conversations into CRM leads — WhatsApp first, more coming",
    "Unified Customer Profiles across every ad source",
    "Project workspaces that keep client data isolated",
    "PII masking so agencies never see what they shouldn’t",
  ],
  pitch:
    "sysConnector isn’t just a sync tool. It’s the marketing data hub lean teams have been stitching together across four products.",
  cta: "Get Started Free",
  closingItalic:
    "The only question is: Would it be helpful to stop worrying whether your syncs are working?",
};

export const footer = {
  tagline:
    'Built for teams who never want to lose a lead — or lose track of their customers',
  copyright: '© 2026 sysConnector.',
  links: [
    { label: 'Connectors', href: '/connectors' },
    { label: 'Resources', href: '/blog' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export const signupModal = {
  heading: 'Stop losing leads from your social media campaigns',
  body: 'Try SysConnector early access and see how much lighter integration management feels when everything is in one place.',
  cta: 'Request For Free Access',
};
