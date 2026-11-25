/**
 * Hero mockup — minimalist recreation of the actual Customer Profiles
 * screen in app.sysconnector.com (layout as of Nov 2026): workspace
 * switcher, sidebar nav, filter card with score buttons and toggles, and
 * the customers table. Demo data only — no real customers.
 *
 * Purely decorative (aria-hidden). Adapts to dark mode via CSS tokens.
 */

import Image from 'next/image';
import {
  LayoutGrid,
  Folder,
  Database,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  CircleHelp,
  Building2,
  Search,
  ChevronDown,
  Mail,
  Phone,
  Eye,
  Trash2,
  CheckCircle2,
  CircleAlert,
  Clock,
} from 'lucide-react';

type Source = 'WhatsApp Bot' | 'Facebook Lead Forms' | 'Google Sheets' | 'SFTP Source';
type Score = 'High' | 'Medium' | 'Low';
type Status = 'synced' | 'not_synced_yet' | 'sync_failed';

interface Customer {
  name: string;
  email: string;
  phone: string;
  source: Source;
  project: string;
  lastSeen: string;
  score: Score;
  status: Status;
}

const customers: Customer[] = [
  {
    name: 'Aisyah Rahman',
    email: 'aisyah.r@example.com',
    phone: '+60 12 ••• 4821',
    source: 'WhatsApp Bot',
    project: 'Open Day 2026',
    lastSeen: 'Nov 24, 2026',
    score: 'High',
    status: 'synced',
  },
  {
    name: 'Daniel Tan',
    email: 'daniel.tan@example.com',
    phone: '+60 17 ••• 1730',
    source: 'Facebook Lead Forms',
    project: 'Property Launch',
    lastSeen: 'Nov 24, 2026',
    score: 'Medium',
    status: 'synced',
  },
  {
    name: 'Priya Nair',
    email: 'priya.nair@example.com',
    phone: '+65 9 ••• 9042',
    source: 'Facebook Lead Forms',
    project: 'Property Launch',
    lastSeen: 'Nov 23, 2026',
    score: 'Medium',
    status: 'not_synced_yet',
  },
  {
    name: 'Jason Lim',
    email: 'jason.lim@example.com',
    phone: '+60 11 ••• 3315',
    source: 'Google Sheets',
    project: 'Test Drive Q4',
    lastSeen: 'Nov 22, 2026',
    score: 'Low',
    status: 'synced',
  },
  {
    name: 'Mei Ling Wong',
    email: 'meiling.w@example.com',
    phone: '+60 16 ••• 6208',
    source: 'SFTP Source',
    project: 'Partner Imports',
    lastSeen: 'Nov 21, 2026',
    score: 'Medium',
    status: 'sync_failed',
  },
];

export function HeroMockup() {
  return (
    <div aria-hidden className="relative w-full">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-16 -bottom-8 h-40 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl shadow-black/5 dark:shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-border bg-bg-sunken px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <div className="ml-4 flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[0.65rem] text-fg-subtle">
            app.sysconnector.com / customer-profiles
          </div>
        </div>

        {/* App body: sidebar + content */}
        <div className="grid grid-cols-[190px_1fr]">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const nav = [
    { label: 'Dashboard', icon: LayoutGrid },
    { label: 'All Projects', icon: Folder },
    { label: 'Data Sources', icon: Database },
    { label: 'Messaging Bots', icon: MessageSquare },
    { label: 'Customer Profiles', icon: Users, active: true },
    { label: 'Reports', icon: BarChart3 },
    { label: 'Settings', icon: Settings },
    { label: 'Help', icon: CircleHelp },
  ];

  return (
    <aside className="flex flex-col border-r border-border bg-bg py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 border-b border-border px-4 pb-3">
        <Image
          src="/sysconnector-logo.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5"
        />
        <span className="text-[0.75rem] font-semibold tracking-tight text-fg">
          <span className="font-normal text-fg-muted">sys</span>Connector
        </span>
      </div>

      {/* Workspace switcher */}
      <p className="px-4 pt-3 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-fg-subtle">
        Workspace
      </p>
      <div className="mx-2 mt-1.5 flex items-center gap-1.5 rounded-md bg-bg-sunken px-2 py-1.5">
        <Building2 size={11} className="text-fg-subtle" strokeWidth={1.75} />
        <span className="truncate text-[0.68rem] font-medium text-fg">Acme Marketing</span>
        <span className="ml-auto text-[0.55rem] text-fg-subtle">Owner</span>
      </div>

      {/* Nav */}
      <nav className="mt-3 flex flex-1 flex-col gap-0.5 px-2">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={[
                'flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.7rem]',
                item.active
                  ? 'bg-accent/10 font-medium text-accent'
                  : 'text-fg-muted',
              ].join(' ')}
            >
              <Icon size={12} strokeWidth={1.75} />
              {item.label}
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div className="mx-2 mt-2 flex items-center justify-between border-t border-border px-2 pt-2.5">
        <span className="text-[0.68rem] text-fg-muted">Alex</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-[0.55rem] font-semibold text-accent">
          A
        </span>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <div className="flex min-w-0 flex-col gap-3 bg-bg-sunken/40 px-5 py-4">
      {/* Page title */}
      <div>
        <h3 className="text-[0.95rem] font-semibold text-fg">Customer Profiles</h3>
        <p className="text-[0.65rem] text-fg-muted">
          Manage and view customer profiles across all your projects
        </p>
      </div>

      <FilterCard />
      <CustomerTable />
    </div>
  );
}

function FilterCard() {
  return (
    <div className="rounded-lg border border-border bg-bg-elevated p-3">
      {/* Search */}
      <div className="flex items-center gap-2 rounded-md border border-border bg-bg px-2.5 py-1.5">
        <Search size={11} className="text-fg-subtle" />
        <span className="text-[0.65rem] text-fg-subtle">Search keywords…</span>
      </div>

      {/* Dropdowns */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.62rem] text-fg">
        <span className="inline-flex items-center gap-1.5">
          All Projects <Dropdown label="All Projects" />
        </span>
        <span className="inline-flex items-center gap-1.5">
          Any Source <Dropdown label="Any Source" />
        </span>
        <span className="inline-flex items-center gap-1.5">
          Date: <Dropdown label="All Time" />
        </span>
      </div>

      {/* Score + toggles */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.62rem] text-fg">
        <span className="inline-flex items-center gap-1">
          Profile Score
          {(['High', 'Medium', 'Low'] as const).map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-bg px-1.5 py-0.5 text-[0.58rem]"
            >
              {s}
            </span>
          ))}
        </span>
        <Toggle label="Has Identity" />
        <Toggle label="Has Consent" />
        <Toggle label="Sync Failed" />
      </div>
    </div>
  );
}

function Dropdown({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2 py-0.5 text-[0.62rem] text-fg">
      {label}
      <ChevronDown size={10} className="text-fg-subtle" strokeWidth={1.75} />
    </span>
  );
}

function Toggle({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative inline-block h-3 w-5 rounded-full bg-border">
        <span className="absolute left-0.5 top-0.5 h-2 w-2 rounded-full bg-bg-elevated shadow-sm" />
      </span>
      {label}
    </span>
  );
}

function CustomerTable() {
  const cols = 'grid grid-cols-[1fr_1.35fr_1.05fr_0.75fr_0.5fr_0.85fr_0.35fr] items-center gap-2';

  return (
    <div className="rounded-lg border border-border bg-bg-elevated">
      <p className="px-4 pb-2 pt-3 text-[0.8rem] font-semibold text-fg">
        Customers <span className="font-normal text-fg-subtle">(5)</span>
      </p>

      {/* Column headers */}
      <div className={`${cols} border-b border-border px-4 py-1.5 text-[0.58rem] text-fg-muted`}>
        <span>Name</span>
        <span>Email / Phone</span>
        <span>Source / Project</span>
        <span>Last Seen</span>
        <span>Score</span>
        <span>Status</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <ul>
        {customers.map((c, i) => (
          <li
            key={c.email}
            className={[
              `${cols} px-4 py-2 text-[0.66rem]`,
              i !== customers.length - 1 ? 'border-b border-border' : '',
            ].join(' ')}
          >
            <p className="truncate font-medium text-fg">{c.name}</p>

            <div className="min-w-0 space-y-0.5 text-fg-muted">
              <p className="flex items-center gap-1 truncate">
                <Mail size={9} className="shrink-0 text-fg-subtle" strokeWidth={1.75} />
                {c.email}
              </p>
              <p className="flex items-center gap-1 truncate font-mono text-[0.58rem]">
                <Phone size={9} className="shrink-0 text-fg-subtle" strokeWidth={1.75} />
                {c.phone}
              </p>
            </div>

            <div className="min-w-0">
              <span className="inline-flex max-w-full items-center truncate rounded-full border border-border px-1.5 py-0.5 text-[0.56rem] font-medium text-fg">
                {c.source}
              </span>
              <p className="mt-0.5 truncate text-[0.58rem] text-fg-subtle">{c.project}</p>
            </div>

            <span className="truncate text-fg-muted">{c.lastSeen}</span>

            <span className="inline-flex w-fit items-center rounded-full bg-bg-sunken px-1.5 py-0.5 text-[0.56rem] font-semibold text-fg">
              {c.score}
            </span>

            <StatusBadge status={c.status} />

            <div className="flex items-center justify-end gap-1.5">
              <Eye size={11} className="text-fg-muted" strokeWidth={1.75} />
              <Trash2 size={11} className="text-red-500 dark:text-red-400" strokeWidth={1.75} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === 'synced') {
    return (
      <span className="inline-flex items-center gap-1 text-[0.62rem] text-green-700 dark:text-green-400">
        <CheckCircle2 size={10} strokeWidth={2} />
        synced
      </span>
    );
  }
  if (status === 'not_synced_yet') {
    return (
      <span className="inline-flex items-center gap-1 text-[0.62rem] text-amber-700 dark:text-amber-400">
        <Clock size={10} strokeWidth={2} />
        not_synced_yet
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[0.62rem] text-red-700 dark:text-red-400">
      <CircleAlert size={10} strokeWidth={2} />
      sync_failed
    </span>
  );
}
