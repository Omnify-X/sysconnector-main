import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import type { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h2'>;
type ParaProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type CodeProps = ComponentPropsWithoutRef<'code'>;
type PreProps = ComponentPropsWithoutRef<'pre'>;
type ImgProps = ComponentPropsWithoutRef<'img'>;

const components: MDXRemoteProps['components'] = {
  h2: (props: HeadingProps) => (
    <h2 className="text-xl font-semibold tracking-tight text-fg mt-10 mb-3 first:mt-0" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-base font-semibold text-fg mt-7 mb-2" {...props} />
  ),
  p: (props: ParaProps) => (
    <p className="text-base text-fg-muted leading-[1.8] mb-5" {...props} />
  ),
  a: (props: AnchorProps) => (
    <a className="text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc list-outside pl-5 mb-5 space-y-1.5 text-base text-fg-muted leading-[1.8]" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal list-outside pl-5 mb-5 space-y-1.5 text-base text-fg-muted leading-[1.8]" {...props} />
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="border-l-4 border-accent bg-accent/5 pl-5 pr-4 py-3 rounded-r-lg italic text-fg-muted my-6 text-base leading-[1.8]" {...props} />
  ),
  code: (props: CodeProps) => (
    <code className="font-mono text-sm bg-bg-sunken border border-border px-1.5 py-0.5 rounded" {...props} />
  ),
  pre: (props: PreProps) => (
    <pre className="bg-bg-sunken border border-border rounded-xl p-5 overflow-x-auto text-sm mb-5 font-mono" {...props} />
  ),
  hr: () => <hr className="border-border my-10" />,
  img: ({ src, alt }: ImgProps) => (
    <span className="my-8 block overflow-hidden rounded-xl border border-border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ''} className="w-full h-auto block" />
    </span>
  ),
};

export function PostBody({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />;
}
