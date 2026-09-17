import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { projectTabs } from '@/lib/project-tabs';
import { LocaleProvider } from '@/components/locale-provider';
import { LanguageToolbarItem } from '@/components/language-toolbar-item';

export default async function Layout({
  children,
  params,
}: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;
  const locale = lang === 'zh' ? 'zh' : 'en';

  return (
    <LocaleProvider locale={locale}>
      <LanguageToolbarItem />
      <DocsLayout
        tree={source.getPageTree(locale)}
        tabs={projectTabs(locale)}
        {...baseOptions(locale)}
      >
        {children}
      </DocsLayout>
    </LocaleProvider>
  );
}

export function generateStaticParams() {
  return [{ lang: 'zh' }];
}
