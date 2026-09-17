import { docsLlms } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_request: Request, { params }: RouteContext<'/[lang]/llms-full.txt'>) {
  const { lang } = await params;
  if (lang !== 'zh') notFound();
  return new Response(await docsLlms.full('zh'));
}

export function generateStaticParams() {
  return [{ lang: 'zh' }];
}
