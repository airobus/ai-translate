# AI Translate

一个现代化的 AI 驱动的翻译网络应用，使用 Next.js 构建，具有清新直观的用户界面。

A modern AI-powered translation web application built with Next.js, featuring a clean and intuitive UI inspired by Apple and Google design principles.

## ✨ 特性

- 🎯 智能翻译
  - AI 驱动的高质量翻译
  - 支持 18 种主流语言
  - 自动语言检测
  - 实时翻译进度显示

- 💡 用户体验
  - 简洁现代的界面设计
  - 自适应文本框大小
  - 复制/清空一键操作
  - 优雅的加载动画
  - 友好的操作提示

- 🌐 多语言支持
  - 中文
  - English (英语)
  - हिन्दी (印地语)
  - Español (西班牙语)
  - العربية (阿拉伯语)
  - বাংলা (孟加拉语)
  - Português (葡萄牙语)
  - Русский (俄语)
  - 日本語 (日语)
  - Français (法语)
  - Deutsch (德语)
  - 한국어 (韩语)
  - Türkçe (土耳其语)
  - Tiếng Việt (越南语)
  - Italiano (意大利语)
  - ไทย (泰语)
  - Nederlands (荷兰语)
  - Polski (波兰语)

- 📱 响应式设计
  - 适配桌面和移动设备
  - 流畅的交互体验
  - 优雅的渐变背景

## 🛠 技术栈

- **框架**: 
  - Next.js 15
  - React 19 (RC)
  - TypeScript

- **样式**: 
  - Tailwind CSS
  - Lucide Icons
  - 渐变设计

- **功能组件**:
  - Sonner (Toast 通知)
  - 自定义动画效果

- **API 集成**: 
  - Cloudflare AI API
  - Next.js API Routes

## 🚀 快速开始

1. 克隆仓库
   ```bash
   git clone https://github.com/airobus/ai-translate.git
   cd ai-translate
   ```

2. 安装依赖
   ```bash
   pnpm install
   ```

3. 环境配置
   创建 `.env.local` 文件并添加以下配置：
   ```
   CLOUDFLARE_API_KEY=your_api_key
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   ```

4. 启动开发服务器
   ```bash
   pnpm dev
   ```

5. 访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
src/
  ├── app/                # Next.js 应用路由
  │   ├── page.tsx       # 主页面
  │   ├── about/         # 关于页面
  │   ├── api/          # API 路由
  │   └── layout.tsx    # 根布局
  │
  ├── components/        # 可复用组件
  │   ├── Navigation.tsx    # 导航组件
  │   └── TranslateForm.tsx # 翻译表单组件
  │
  └── styles/           # 全局样式
      └── globals.css   # Tailwind 配置
```

## 🎨 设计特点

- **渐变背景**: 使用优雅的渐变效果创造现代感
- **响应式布局**: 完美适配各种屏幕尺寸
- **动态高度**: 文本框根据内容自动调整高度
- **交互反馈**: 
  - 加载进度条
  - 操作成功提示
  - 错误提示
  - 按钮状态反馈

## 🔧 环境要求

- Node.js 18.0.0 或更高版本
- pnpm 8.0.0 或更高版本

## 📝 许可证

MIT

## 🔗 相关链接

- 官网: [https://923828.xyz](https://923828.xyz)
- 更多工具: [AI 穿搭点评](https://923828.xyz/outfit) | [AI 妆容助手](https://923828.xyz/makeup) | [AI 形象设计](https://923828.xyz/image)
