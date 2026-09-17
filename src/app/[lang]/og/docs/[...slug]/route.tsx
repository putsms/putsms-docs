import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from 'fumadocs-ui/og';
import { appName, getPageImageUrl } from '@/lib/shared';

export const revalidate = false;

export async function GET(_request: Request, { params }: RouteContext<'/[lang]/og/docs/[...slug]'>) {
  const { lang, slug } = await params;
  if (lang !== 'zh') notFound();
  const page = source.getPage(slug.slice(0, -1), 'zh');
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: appName,
  });
}

export function generateStaticParams() {
  return source.getPages('zh').map((page) => ({
    lang: 'zh',
    slug: getPageImageUrl(page).segments,
  }));
}
