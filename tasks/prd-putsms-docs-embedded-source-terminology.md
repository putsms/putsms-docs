# PRD: PutSMS 文档 Embedded 来源术语统一

## 1. Introduction/Overview

`putsms-docs` 当前在系统架构图、产品介绍、入门流程和安全说明中多次使用具体硬件型号 `Air780EPM` 代表嵌入式消息来源。这会让读者误以为 PutSMS 的 Embedded 能力只适用于单一型号，也无法准确涵盖 Air780EPM、ESP32-C2 + ML30 及后续兼容硬件。

本次调整将全面审查中英文文档中的消息来源表述：在描述平台类别、通用能力、数据流或通用接入方式时，统一使用 `Embedded`；在描述已实现的 Air780EPM 客户端、固件要求、配置步骤、限制、日志和排障信息时，继续使用 `Air780EPM`。系统架构图应以 `Embedded` 作为消息来源节点，并在邻近正文中用 Air780EPM、ESP32-C2 + ML30 等作为非穷举示例。

本 PRD 仅规定文档调整，不改变 PutSMS 的运行时行为，也不宣称尚未实现的硬件集成已经正式受支持。

## 2. Goals

- 在中英文文档中清晰区分通用平台 `Embedded` 与具体实现 `Air780EPM`。
- 将首页和架构页的消息来源节点统一为 `Embedded`，避免架构被单一硬件型号定义。
- 全面审查 `putsms-docs` 中的 Air780EPM、Embedded 及相关消息来源表述，并按上下文修正。
- 在通用介绍中使用 Air780EPM、ESP32-C2 + ML30 等非穷举示例，体现 Embedded 类别可覆盖多种硬件组合。
- 保留 Air780EPM 专属指南、导航入口、路由及真实实现细节。
- 保持英文和中文页面的信息范围、能力声明与安全边界一致。

## 3. User Stories

### US-001: 使用通用 Embedded 来源呈现系统架构

**Description:** As a 文档读者, I want 在架构图中看到通用的 Embedded 消息来源 so that 我不会误认为 PutSMS 的硬件接入架构绑定到 Air780EPM 单一型号。

**Acceptance Criteria:**

- [ ] 英文首页的 `Message sources` 图中，原 `Air780EPM` 节点改为 `Embedded`。
- [ ] 中文首页的“短信来源”图中，原 `Air780EPM` 节点改为 `Embedded`。
- [ ] 英文架构页的 `Message input` 图中，原 `Air780EPM` 节点改为 `Embedded`。
- [ ] 中文架构页的“短信输入端”图中，原 `Air780EPM` 节点改为 `Embedded`。
- [ ] 与上述节点相连的 Mermaid 节点标识和边定义同步更新，不保留会误导维护者的 `AIR` 或其他具体型号标识。
- [ ] 图中的上传协议或安全标签准确反映 Embedded 类别当前公开支持的共同能力，不把某一型号独有能力泛化给全部 Embedded 设备。
- [ ] Mermaid 图在英文和中文页面均成功渲染，无语法错误、截断或布局重叠。
- [ ] `pnpm run types:check` 和 `pnpm run build` 在 `putsms-docs` 中通过。
- [ ] Verify in browser using dev-browser skill.

### US-002: 统一通用产品文案中的来源分类

**Description:** As a 潜在用户, I want 产品介绍和入门文档以 Embedded 描述硬件来源 so that 我能理解 PutSMS 支持的是一类嵌入式接入，而不是只支持一个具体模块。

**Acceptance Criteria:**

- [ ] 全面审查 `putsms-docs/content/docs` 下中英文页面中所有 `Air780EPM`、`Embedded`、`embedded` 及相关硬件来源表述。
- [ ] 首页、Introduction、Getting Started 等页面凡是列举消息来源类别、通用接入方式或通用验证流程的位置，使用 `Embedded`，而非用 `Air780EPM` 代指整个类别。
- [ ] 首次需要解释 `Embedded` 的适当位置提供非穷举示例；英文可使用 `Embedded devices (for example, Air780EPM or ESP32-C2 + ML30)`，中文使用语义等价表述。
- [ ] 示例措辞明确表达“例如”或“包括但不限于”，不暗示示例清单完整。
- [ ] 文案不将 ESP32-C2 + ML30 描述为已有正式指南或已验证支持，除非仓库中存在相应实现和证据。
- [ ] 英文和中文页面的来源分类、示例范围及支持状态语义一致。
- [ ] 页面中的内部链接仍指向有效目标，不因术语调整产生断链。
- [ ] `pnpm run types:check` 和 `pnpm run build` 在 `putsms-docs` 中通过。
- [ ] Verify in browser using dev-browser skill.

### US-003: 准确表达 Embedded 的安全边界

**Description:** As a 安全敏感的部署者, I want 安全说明区分平台级结论与具体客户端限制 so that 我不会把 Air780EPM 的实现现状错误套用到所有 Embedded 硬件上。

**Acceptance Criteria:**

- [ ] 审查首页 Callout、Architecture 的 Data flows/Trust boundaries、Introduction 和 Encryption 指南中的相关安全陈述。
- [ ] 只有在结论对所有已公开 Embedded 接入均成立时，才使用 `Embedded` 作为陈述主体。
- [ ] Air780EPM 当前通过 HTTPS 上传应用层明文 JSON、不支持 RSA-OAEP 或 PutSMS E2EE、纯 Lua RSA 实验回滚等实现专属事实继续明确归属于 `Air780EPM`。
- [ ] 若通用段落同时介绍平台与现有实现，应先说明 Embedded 的能力取决于具体客户端，再单独说明当前 Air780EPM 实现的限制。
- [ ] 不将 Air780EPM 的能力探测结果或加密限制泛化为 Embedded 平台协议的永久限制。
- [ ] 中英文安全说明具有相同的风险结论，不因翻译出现更强或更弱的安全承诺。
- [ ] `pnpm run types:check` 和 `pnpm run build` 在 `putsms-docs` 中通过。
- [ ] Verify in browser using dev-browser skill.

### US-004: 保留 Air780EPM 专属实现文档

**Description:** As an Air780EPM 用户, I want 继续获得型号专属的安装、配置和排障说明 so that 通用术语调整不会降低现有集成文档的可用性。

**Acceptance Criteria:**

- [ ] `/docs/air780epm`、`/zh/docs/air780epm` 及其指南页面继续以 `Air780EPM` 命名。
- [ ] Air780EPM 的 LuatOS 版本、SIM 卡、Luatools、设备文件路径、注册命令、日志、错误码和硬件限制等具体说明不被替换为泛化的 `Embedded`。
- [ ] 首页“项目参考”卡片和侧边栏中的 Air780EPM 入口继续指向现有 Air780EPM 文档。
- [ ] `project-tabs.ts` 中代表具体项目或客户端的 Air780EPM 名称保持不变。
- [ ] Troubleshooting 中只适用于 Air780EPM 的故障场景继续明确标注 Air780EPM。
- [ ] 文档元数据和现有 `/air780epm` 路由不重命名、不删除，现有链接继续有效。
- [ ] `pnpm run types:check` 和 `pnpm run build` 在 `putsms-docs` 中通过。
- [ ] Verify in browser using dev-browser skill.

### US-005: 验证双语术语一致性

**Description:** As a 文档维护者, I want 一套可复查的术语规则和验证结果 so that 后续新增硬件时不会再次把具体型号与平台类别混用。

**Acceptance Criteria:**

- [ ] 审查完成后，通过文本搜索列出所有剩余 `Air780EPM` 出现位置，并逐项确认它们均指向具体实现、指南、项目名称或型号专属限制。
- [ ] 通用平台值在代码、API 示例或配置值中保持小写 `embedded`；面向读者的平台名称使用 `Embedded`。
- [ ] 具体型号统一拼写为 `Air780EPM`，硬件组合统一拼写为 `ESP32-C2 + ML30`，中英文保持一致。
- [ ] 不修改 API 示例中合法的 `"platform": "embedded"` 值。
- [ ] 英文页面与对应的 `.zh.mdx` 页面逐项对照，确认不存在只更新单一语言的相关段落。
- [ ] 文档构建输出中不存在新增的 MDX、链接或 Mermaid 错误。
- [ ] Verify in browser using dev-browser skill.

## 4. Functional Requirements

- **FR-1:** 文档必须把 `Embedded` 定义为消息来源的平台类别，而不是某个具体硬件型号。
- **FR-2:** 首页和 Architecture 页面中的中英文架构图必须使用 `Embedded` 作为嵌入式消息来源节点。
- **FR-3:** 通用消息来源清单、产品能力说明、入门选择和验证步骤必须使用 `Embedded`；需要帮助理解时，应以 Air780EPM、ESP32-C2 + ML30 作为非穷举示例。
- **FR-4:** 文档必须区分“架构允许的 Embedded 接入”与“仓库中已有并经过说明的具体实现”，不得仅凭示例宣称某硬件已正式支持。
- **FR-5:** Air780EPM 专属页面、导航标题、路由、配置步骤、固件条件、日志、排障和实现限制必须继续使用 `Air780EPM`。
- **FR-6:** 安全说明必须将实现级结论归属于对应客户端；Air780EPM 不支持应用层 E2EE 的现状不得被表述为所有 Embedded 设备的固有限制。
- **FR-7:** 当上下文确实覆盖当前所有 Embedded 实现时，可使用 `Embedded`，但必须避免产生未经证实的协议或加密能力承诺。
- **FR-8:** API 与配置中的平台枚举值必须保持 `embedded`，不得改成型号名称或改变大小写。
- **FR-9:** 所有相关内容调整必须同步应用于英文 `.mdx` 和中文 `.zh.mdx` 页面，并保持语义等价。
- **FR-10:** 本次审查必须覆盖 `putsms-docs/content/docs`、文档导航元数据及展示项目名称的源码配置；不得只修改已知的四个架构图节点。
- **FR-11:** 不得对所有 `Air780EPM` 文本执行无上下文的全局替换；每一处必须按“平台类别”或“具体实现”分类处理。
- **FR-12:** 修改后必须验证内部链接、MDX 编译、Mermaid 渲染及中英文关键页面的视觉表现。

## 5. Non-Goals (Out of Scope)

- 不修改 PutSMS API、Dashboard、iOS App、浏览器扩展或嵌入式固件的运行时行为。
- 不新增 ESP32-C2 + ML30 固件、接入代码、专属指南或支持承诺。
- 不把 Air780EPM 专属指南改造成通用 Embedded 指南。
- 不重命名或删除 `/docs/air780epm`、`/zh/docs/air780epm` 路由及对应导航入口。
- 不改变 `embedded` 平台枚举值、设备连接方式或凭据流程。
- 不借此任务重写与来源术语无关的文档内容或调整文档站视觉设计。
- 不宣称所有 Embedded 设备都具备相同的持久化、SMS 注册、加密或网络能力。

## 6. Design Considerations

- 架构图节点使用简短标签 `Embedded`，具体型号示例放在图外邻近正文中，避免节点因示例增加而过宽。
- 首页的来源列表应保持与图中的分类一致：iOS、Android、Embedded 是来源类别或接入族；Air780EPM 是 Embedded 的具体实现。
- Air780EPM 项目参考卡片应继续存在，因为它指向可操作的具体指南，而不是来源分类图例。
- 中英文都保留产品术语 `Embedded`，避免将其翻译成可能与平台枚举脱节的不同名称；可在首次出现时补充“嵌入式设备”解释。
- 浏览器验证至少覆盖英文和中文的首页、Architecture、Getting Started、Encryption 以及 Air780EPM 参考页。

## 7. Technical Considerations

- 重点审查路径包括但不限于：
  - `putsms-docs/content/docs/index.mdx` 与 `index.zh.mdx`
  - `putsms-docs/content/docs/architecture.mdx` 与 `architecture.zh.mdx`
  - `putsms-docs/content/docs/introduction.mdx` 与 `introduction.zh.mdx`
  - `putsms-docs/content/docs/getting-started.mdx` 与 `getting-started.zh.mdx`
  - `putsms-docs/content/docs/guides/encryption.mdx` 与 `encryption.zh.mdx`
  - `putsms-docs/content/docs/guides/troubleshooting.mdx` 与 `troubleshooting.zh.mdx`
  - `putsms-docs/content/docs/guides/air780epm*.mdx`
  - `putsms-docs/content/docs/air780epm/`
  - `putsms-docs/src/lib/project-tabs.ts`
- Mermaid 节点的内部 ID 应采用不绑定型号的命名，例如 `EMB`，确保标签和源码语义一致。
- 使用 `rg` 在修改前后搜索 `Air780EPM|Embedded|embedded|ESP32|ML30`，将搜索结果作为完整性检查，而非自动替换清单。
- 示例硬件名称必须遵循用户确认的 `ESP32-C2 + ML30` 写法；若后续发现实际项目使用不同型号，应先核对实现事实，再单独修正文案。
- 验证命令至少包括在 `putsms-docs` 目录运行 `pnpm run types:check` 与 `pnpm run build`。

### 术语判定表

| 上下文 | 应使用的术语 | 示例 |
| --- | --- | --- |
| 架构图中的来源节点 | `Embedded` | `Embedded --> Auth` |
| 通用消息来源或接入类别 | `Embedded` | `iOS, Android, or Embedded devices` |
| 帮助读者理解通用类别 | `Embedded` + 非穷举示例 | `for example, Air780EPM or ESP32-C2 + ML30` |
| API 平台字段 | `embedded` | `"platform": "embedded"` |
| 具体客户端、固件或硬件要求 | `Air780EPM` | LuatOS V2018、`/putsms_queue.json` |
| 具体实现的安全限制 | `Air780EPM` | 当前不支持 PutSMS E2EE |
| 项目参考、导航和专属路由 | `Air780EPM` | `/docs/air780epm` |

## 8. Success Metrics

- 四个中英文首页/架构图节点均以 `Embedded` 呈现，且 Mermaid 渲染成功。
- 通用来源说明不再用 `Air780EPM` 代表整个 Embedded 类别。
- 搜索得到的每个剩余 `Air780EPM` 均可依据本 PRD 归类为具体实现、项目名称、专属指南或型号限制。
- 中英文相关页面的术语、示例和安全边界 100% 对齐。
- Air780EPM 专属指南、导航和内部链接无回归。
- `pnpm run types:check` 与 `pnpm run build` 均通过，浏览器检查未发现 Mermaid、排版或导航问题。

## 9. Open Questions

无。范围、通用术语、示例型号、Air780EPM 专属文档保留策略及双语同步要求均已确认。
