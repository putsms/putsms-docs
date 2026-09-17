'use client';

import { Languages } from 'lucide-react';
import { LanguageSelect } from 'fumadocs-ui/layouts/shared/slots/language-select';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function findToolbars() {
  const toolbars = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-toggle]'))
    .map((toggle) => toggle.parentElement)
    .filter(
      (element): element is HTMLElement =>
        element !== null && element.querySelector('a[aria-label="GitHub"]') !== null,
    );

  return Array.from(new Set(toolbars));
}

export function LanguageToolbarItem() {
  const [toolbars, setToolbars] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const update = () => {
      const next = findToolbars();
      setToolbars((current) =>
        current.length === next.length && current.every((item, index) => item === next[index])
          ? current
          : next,
      );
    };

    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      {toolbars.map((toolbar, index) =>
        createPortal(
          <LanguageSelect
            className="order-first p-1.5 [&_svg]:size-4.5"
            key={`language-toolbar-${index}`}
          >
            <Languages aria-hidden="true" />
          </LanguageSelect>,
          toolbar,
        ),
      )}
    </Fragment>
  );
}
