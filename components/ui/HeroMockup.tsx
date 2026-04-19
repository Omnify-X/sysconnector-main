/**
 * Hero mockup — minimalist recreation of the actual Customer Profiles
 * dashboard screen. Matches the real product's sidebar, filters, table
 * structure, score badges, and status states.
 *
 * Purely decorative (aria-hidden). Adapts to dark mode via CSS tokens.
 */

import Image from 'next/image';
import {
  LayoutGrid,
  FolderKanban,
  Database,
  Zap,
  Users,
  BarChart3,
  Settings,
  CircleHelp,
  Search,
  ChevronDown,
  Eye,
  Trash2,
  CheckCircle2,
  CircleAlert,
  Clock,
  AlertTriangle,
} from 'lucide-react';

type Source = 'WhatsApp Bot' | 'Google Sheets' | 'Facebook Lead Forms' | 'SFTP Source';
type Score = 'High' | 'Medium' | 'Low' | 'Sync Failed';
type Status = 'synced' | 'not_synced_yet' | 'error_syncing_lead';

interface Customer {
  name: string;
  id: string;
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
    name: 'Sarah Chen',
    id: 'ctc_8f2a1b',
    email: 's.chen@example.com',
    phone: '+1 555 ••• 4821',
    source: 'WhatsApp Bot',
    project: 'Spring Campaign',
    lastSeen: '3 days ago',
    score: 'Medium',
    status: 'synced',
  },
  {
    name: 'Marcus Patel',
    id: 'ctc_3d9e02',
    email: 'm.patel@example.com',
    phone: '+44 20 •••• 1730',
    source: 'Google Sheets',
    project: 'Enterprise Leads',
    lastSeen: '6 days ago',
    score: 'High',
    status: 'synced',
  },
  {
    name: 'Elena Rossi',
    id: 'ctc_5b74c1',
    email: 'e.rossi@example.com',
    phone: '+39 02 •••• 9042',
    source: 'Facebook Lead Forms',
    project: 'Spring Campaign',
    lastSeen: '3 days ago',
    score: 'Medium',
    status: 'not_synced_yet',
  },
  {
    name: 'Jordan Kim',
    id: 'ctc_a1f22e',
    email: 'j.kim@example.com',
    phone: '+82 2 •••• 3315',
    source: 'Facebook Lead Forms',
    project: 'Retargeting Q2',
    lastSeen: '3 days ago',
    score: 'Low',
    status: 'synced',
  },
  {
    name: 'Alex Dubois',
    id: 'ctc_7e4091',
    email: 'a.dubois@example.com',
    phone: '+33 1 •••• 6208',
    source: 'SFTP Source',
    project: 'Partner Imports',
    lastSeen: '2 days ago',
    score: 'Sync Failed',
    status: 'error_syncing_lead',
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
            sysconnector.app / customer-profiles
          </div>
        </div>

        {/* App body: sidebar + content */}
        <div className="grid grid-cols-[180px_1fr]">
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
    { label: 'All Projects', icon: FolderKanban },
    { label: 'Data Sources', icon: Database },
    { label: 'Automations', icon: Zap },
    { label: 'Customer Profiles', icon: Users, active: true },
    { label: 'Reports', icon: BarChart3 },
    { label: 'Settings', icon: Settings },
    { label: 'Help', icon: CircleHelp },
  ];

  return (
    <aside className="flex flex-col border-r border-border bg-bg-sunken/60 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <Image
          src="/sysconnector-logo.png"
          alt=""
          width={20}
          height={20}
          className="h-5 w-5"
        />
        <span className="text-[0.75rem] font-semibold tracking-tight text-fg">
          <span className="text-fg-muted">sys</span>Connector
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-0.5 px-2">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={[
                'flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.7rem]',
                item.active
                  ? 'bg-accent/10 text-accent font-medium'
                  : 'text-fg-muted',
              ].join(' ')}
            >
              <Icon size={12} strokeWidth={1.75} />
              {item.label}
            </div>
          );
        })}
      </nav>

      {/* User chip */}
      <div className="mt-2 mx-2 flex items-center gap-2 rounded-lg border border-border bg-bg px-2 py-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-fg text-[0.55rem] font-semibold text-bg">
          A
        </div>
        <span className="text-[0.7rem] text-fg">Alex Morgan</span>
      </div>
    </aside>
  );
}

function Content() {
  return (
    <div className="flex min-w-0 flex-col">
      {/* Page title */}
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-[0.95rem] font-semibold text-fg">Customer Profiles</h3>
        <p className="text-[0.65rem] text-fg-muted">
          Manage and view customer profiles across all your projects
        </p>
      </div>

      {/* Filter bar */}
      <FilterBar />

      {/* Customers list */}
      <CustomerTable />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="border-b border-border bg-bg px-5 py-3">
      {/* Search */}
      <div className="flex items-center gap-2 rounded-md border border-border bg-bg-sunken px-2.5 py-1.5">
        <Search size={11} className="text-fg-subtle" />
        <span className="text-[0.65rem] text-fg-subtle">Search keywords…</span>
      </div>

      {/* Filters row */}
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <FilterPill label="All Projects" />
        <FilterPill label="Any Source" />
        <FilterPill label="All Time" />
        <div className="flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-fg-subtle">
          <span>Score</span>
        </div>
        <ScoreChip tone="high">High</ScoreChip>
        <ScoreChip tone="medium">Medium</ScoreChip>
        <ScoreChip tone="low">Low</ScoreChip>
      </div>
    </div>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-md border border-border bg-bg-sunken px-2 py-0.5 text-[0.65rem] text-fg-muted">
      {label}
      <ChevronDown size={10} className="text-fg-subtle" strokeWidth={1.75} />
    </div>
  );
}

function ScoreChip({
  tone,
  children,
}: {
  tone: 'high' | 'medium' | 'low';
  children: React.ReactNode;
}) {
  const styles = {
    high: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300',
    medium: 'border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300',
    low: 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300',
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-md border px-1.5 py-0.5 text-[0.6rem] font-medium ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

function CustomerTable() {
  return (
    <div className="flex-1">
      {/* Section title */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2">
        <p className="text-[0.75rem] font-semibold text-fg">
          Customers <span className="font-normal text-fg-subtle">(9)</span>
        </p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1.1fr_1.3fr_1fr_0.7fr_0.6fr_0.8fr_0.4fr] items-center gap-2 border-b border-border bg-bg-sunken/50 px-5 py-2 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-fg-subtle">
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
            key={`${c.email}-${i}`}
            className={[
              'grid grid-cols-[1.1fr_1.3fr_1fr_0.7fr_0.6fr_0.8fr_0.4fr] items-center gap-2 px-5 py-2.5 text-[0.7rem]',
              i !== customers.length - 1 ? 'border-b border-border' : '',
            ].join(' ')}
          >
            {/* Name */}
            <div className="min-w-0">
              <p className="truncate font-medium text-fg">{c.name}</p>
              <p className="truncate font-mono text-[0.6rem] text-fg-subtle">
                {c.id}
              </p>
            </div>

            {/* Email / Phone */}
            <div className="min-w-0 space-y-0.5">
              <p className="truncate text-fg-muted">{c.email}</p>
              <p className="truncate font-mono text-[0.6rem] text-fg-subtle">
                {c.phone}
              </p>
            </div>

            {/* Source / Project */}
            <div className="min-w-0">
              <SourceBadge source={c.source} />
              <p className="mt-0.5 truncate text-[0.6rem] text-fg-subtle">
                {c.project}
              </p>
            </div>

            {/* Last Seen */}
            <span className="truncate text-fg-muted">{c.lastSeen}</span>

            {/* Score */}
            <ScoreBadge score={c.score} />

            {/* Status */}
            <StatusBadge status={c.status} />

            {/* Actions */}
            <div className="flex items-center justify-end gap-1.5">
              <Eye size={12} className="text-fg-subtle" strokeWidth={1.75} />
              <Trash2
                size={12}
                className="text-red-500 dark:text-red-400"
                strokeWidth={1.75}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Fade bottom edge */}
      <div className="relative h-6">
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-transparent to-bg-elevated" />
      </div>
    </div>
  );
}

function SourceBadge({ source }: { source: Source }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-bg-sunken px-1.5 py-0.5 text-[0.6rem] text-fg-muted">
      {source}
    </span>
  );
}

function ScoreBadge({ score }: { score: Score }) {
  const map = {
    High: 'bg-blue-500 text-white',
    Medium: 'bg-green-500 text-white',
    Low: 'bg-red-500 text-white',
    'Sync Failed':
      'bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/40',
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6rem] font-medium ${map[score]}`}
    >
      {score === 'Sync Failed' && (
        <AlertTriangle size={10} strokeWidth={2} />
      )}
      {score}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === 'synced') {
    return (
      <span className="inline-flex items-center gap-1 text-[0.65rem] text-green-700 dark:text-green-400">
        <CheckCircle2 size={11} strokeWidth={2} />
        synced
      </span>
    );
  }
  if (status === 'not_synced_yet') {
    return (
      <span className="inline-flex items-center gap-1 text-[0.65rem] text-amber-700 dark:text-amber-400">
        <Clock size={11} strokeWidth={2} />
        not_synced_yet
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[0.65rem] text-red-700 dark:text-red-400">
      <CircleAlert size={11} strokeWidth={2} />
      error_syncing_lead
    </span>
  );
}
