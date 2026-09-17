'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import type { Locale } from '@/lib/i18n';

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  return (
    <I18nProvider {...i18nProvider(translations, locale)}>
      {children}
    </I18nProvider>
  );
}
