import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import { localePrefix, type Locale } from './i18n';

const projects = [
  ['app', 'iOS App', 'The SwiftUI client', 'iOS App', 'SwiftUI 客户端'],
  ['api', 'API', 'Cloudflare Worker backend', 'API', 'Cloudflare Worker 后端'],
  ['dashboard', 'Dashboard', 'Web administration console', '管理后台', 'Web 管理控制台'],
  ['browser-extension', 'Browser Extension', 'Chrome and Edge notifications', '浏览器扩展', 'Chrome 与 Edge 通知'],
  ['air780epm', 'Air780EPM', 'LuatOS SMS forwarding client', 'Air780EPM', 'LuatOS 短信转发客户端'],
] as const;

export function projectTabs(locale: Locale): LayoutTab[] {
  const prefix = localePrefix(locale);
  return [
    {
      title: locale === 'zh' ? 'PutSMS 总览' : 'PutSMS Overview',
      description: locale === 'zh' ? '产品、指南与架构' : 'Product, guides, and architecture',
      url: `${prefix}/docs`,
    },
    ...projects.map(([slug, enTitle, enDescription, zhTitle, zhDescription]) => ({
      title: locale === 'zh' ? zhTitle : enTitle,
      description: locale === 'zh' ? zhDescription : enDescription,
      url: `${prefix}/docs/${slug}`,
    })),
  ];
}
