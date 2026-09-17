import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { Brand } from '@/components/brand';
import { i18n, type Locale } from './i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset('zh', zhCN())
  .add({
    en: { displayName: 'English' },
    zh: { displayName: '简体中文' },
  });

export function baseOptions(locale: Locale = 'en'): BaseLayoutProps {
  return {
    nav: {
      title: <Brand />,
      url: locale === 'zh' ? '/zh/docs' : '/docs',
    },
    githubUrl: `https://github.com/${gitConfig.user}`,
    i18n: false,
  };
}
