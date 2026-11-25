/**
 * Comment-to-DM demo: a post gets a "price?" comment, the bot replies in a
 * private DM, and the lead lands in the CRM. Steps appear one after another
 * (the .tour-in animation, switched off for reduced motion) and replay each
 * time the tab is opened, because the tab remounts this component.
 */
import { Heart, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { AppFrame } from './AppFrame';

function step(delayMs: number) {
  return { className: 'tour-in', style: { animationDelay: `${delayMs}ms` } };
}

export function CommentToDmMockup() {
  return (
    <AppFrame path="messaging-bots / comment-to-dm">
      <div className="grid gap-3 bg-bg-sunken/40 p-4 sm:grid-cols-2">
        {/* Public post + comment */}
        <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated">
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[0.55rem] font-semibold text-accent-fg">
              A
            </span>
            <span className="text-[0.66rem] font-semibold text-fg">acme.my</span>
            <span className="ml-auto text-[0.55rem] text-fg-subtle">Instagram</span>
          </div>
          <div className="flex h-24 items-center justify-center bg-gradient-to-br from-accent/25 to-accent/5 text-[0.7rem] font-semibold text-fg">
            March intake · Now open
          </div>
          <div className="flex gap-2.5 px-3 pt-2 text-fg-muted">
            <Heart size={12} />
            <MessageCircle size={12} />
            <Send size={12} />
          </div>
          <div className="px-3 pb-3 pt-1.5">
            <p {...step(200)}>
              <span className="text-[0.62rem] text-fg">
                <span className="font-semibold">aisyah.r</span> price?
              </span>
            </p>
            <p {...step(900)}>
              <span className="text-[0.6rem] text-fg-muted">
                <span className="font-semibold text-fg">acme.my</span> Sent you a DM with the details!
              </span>
            </p>
          </div>
        </div>

        {/* Private DM thread */}
        <div className="flex flex-col rounded-lg border border-border bg-bg-elevated">
          <div className="border-b border-border px-3 py-2 text-[0.64rem] font-semibold text-fg">
            Direct message · aisyah.r
          </div>
          <div className="flex flex-1 flex-col gap-1.5 p-3 text-[0.62rem] leading-snug">
            <p {...step(1500)}>
              <span className="inline-block max-w-[85%] rounded-xl rounded-tl-sm bg-bg-sunken px-2.5 py-1.5 text-fg">
                Hi Aisyah! Thanks for asking. Which programme are you interested in?
              </span>
            </p>
            <p {...step(2300)} >
              <span className="ml-auto block w-fit max-w-[85%] rounded-xl rounded-tr-sm bg-accent px-2.5 py-1.5 text-accent-fg">
                Business, March intake
              </span>
            </p>
            <p {...step(3100)}>
              <span className="inline-block max-w-[85%] rounded-xl rounded-tl-sm bg-bg-sunken px-2.5 py-1.5 text-fg">
                Great choice! What’s the best email to send the fee guide to?
              </span>
            </p>
          </div>
          <div {...step(3900)}>
            <div className="mx-3 mb-3 flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/10 px-2.5 py-1.5 text-[0.6rem] font-medium text-green-700 dark:text-green-400">
              <CheckCircle2 size={11} />
              Lead captured · synced to HubSpot
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
