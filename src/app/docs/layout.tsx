import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { projectTabs } from '@/lib/project-tabs';
import { LocaleProvider } from '@/components/locale-provider';
import { LanguageToolbarItem } from '@/components/language-toolbar-item';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <LocaleProvider locale="en">
      <LanguageToolbarItem />
      <DocsLayout tree={source.getPageTree('en')} tabs={projectTabs('en')} {...baseOptions('en')}>
        {children}
      </DocsLayout>
    </LocaleProvider>
  );
}
