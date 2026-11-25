/**
 * Recreation of Messaging Bots → Bot Setup: bot name, the one-click Meta
 * connection banner, and channel connections. Demo data only.
 */
import { ChevronLeft, MessageCircle, Instagram, Facebook, Handshake } from 'lucide-react';
import { AppFrame } from './AppFrame';

const tabs = ['Bot Setup', 'Response Rules', 'Comment to DM', 'Activity', 'Settings'];

const channels = [
  { name: 'WhatsApp Business', detail: '+60 3 •••• 2100', icon: MessageCircle, tint: 'text-green-600 dark:text-green-400', connected: true },
  { name: 'Instagram', detail: '@acme.my', icon: Instagram, tint: 'text-pink-600 dark:text-pink-400', connected: true },
  { name: 'Messenger', detail: 'Acme Malaysia', icon: Facebook, tint: 'text-blue-600 dark:text-blue-400', connected: false },
];

export function BotSetupMockup() {
  return (
    <AppFrame path="messaging-bots / admissions-bot">
      <div className="bg-bg-sunken/40 px-5 pb-5 pt-3">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-[0.7rem] text-fg-muted">
            <ChevronLeft size={11} />
            Messaging Bots
            <span className="text-border-strong">|</span>
            <span className="font-semibold text-fg">Bot Setup</span>
          </p>
          <span className="rounded-md bg-accent px-2.5 py-1 text-[0.62rem] font-medium text-accent-fg">Save Bot</span>
        </div>

        {/* Tabs */}
        <div className="mt-3 flex gap-4 border-b border-border text-[0.64rem]">
          {tabs.map((t, i) => (
            <span
              key={t}
              className={i === 0 ? 'border-b-2 border-accent pb-1.5 font-medium text-accent' : 'pb-1.5 text-fg-muted'}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bot name */}
        <div className="mt-3 rounded-lg border border-border bg-bg-elevated p-3">
          <p className="text-[0.66rem] font-semibold text-fg">Bot Name</p>
          <div className="mt-1.5 w-2/3 rounded-md border border-border bg-bg px-2 py-1 text-[0.66rem] text-fg">
            Admissions Bot
          </div>
        </div>

        {/* Channels */}
        <div className="mt-3 rounded-lg border border-border bg-bg-elevated p-3">
          <p className="text-[0.66rem] font-semibold text-fg">Channel Connections</p>
          <p className="text-[0.58rem] text-fg-muted">Connect once, reuse across bots</p>

          <div className="mt-2 flex items-start gap-2 rounded-md border border-accent/25 bg-accent/[0.06] px-2.5 py-2">
            <Handshake size={12} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-[0.58rem] leading-snug text-fg-muted">
              <span className="font-semibold text-accent">Meta Tech Provider — one-click connection.</span>{' '}
              Connect WhatsApp, Messenger, and Instagram through Meta’s Embedded Signup. No API keys or tokens.
            </p>
          </div>

          <ul className="mt-2 space-y-1.5">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.name} className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5">
                  <Icon size={13} className={`shrink-0 ${c.tint}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.64rem] font-medium text-fg">{c.name}</p>
                    <p className="truncate text-[0.56rem] text-fg-subtle">{c.detail}</p>
                  </div>
                  {c.connected ? (
                    <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[0.56rem] font-medium text-green-700 dark:text-green-400">
                      Connected
                    </span>
                  ) : (
                    <span className="rounded-md bg-accent px-2 py-0.5 text-[0.56rem] font-medium text-accent-fg">
                      Continue with Meta
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </AppFrame>
  );
}
