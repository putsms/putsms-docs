import { docsLlms, source } from '@/lib/source';
import { getPageMarkdownUrl } from '@/lib/shared';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _request: Request,
  { params }: RouteContext<'/[lang]/llms.mdx/docs/[[...slug]]'>,
) {
  const { lang, slug } = await params;
  if (lang !== 'zh') notFound();
  const page = source.getPage(slug?.slice(0, -1), 'zh');
  if (!page) notFound();

  return new Response(await docsLlms.page(page), {
    headers: { 'Content-Type': 'text/markdown' },
  });
}

export function generateStaticParams() {
  return source.getPages('zh').map((page) => ({
    lang: 'zh',
    slug: getPageMarkdownUrl(page).segments,
  }));
}
