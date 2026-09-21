import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';
import { Brand } from '@/components/brand';
import { i18n, type Locale } from './i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';
import { Home } from 'lucide-react';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .preset('zh', zhCN())
  .add({
    en: { displayName: 'English' },
    zh: { displayName: '简体中文' },
  });

export function baseOptions(locale: Locale = 'en'): BaseLayoutProps {
  const homeLabel = locale === 'zh' ? 'PutSMS 首页' : 'PutSMS Home';

  return {
    nav: {
      title: <Brand />,
      url: locale === 'zh' ? '/zh/docs' : '/docs',
    },
    links: [
      {
        type: 'icon',
        on: 'menu',
        url: 'https://putsms.com',
        text: homeLabel,
        label: homeLabel,
        icon: (
          <span title={homeLabel}>
            <Home aria-hidden="true" />
          </span>
        ),
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}`,
    i18n: false,
  };
}
