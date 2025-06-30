# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Testing
No test framework is currently configured in this project.

## Code Architecture

This is a Next.js 15.3 portfolio site for AI-Driven Backend Engineer Tadayuki Seno, built with TypeScript and Tailwind CSS.

### Project Structure
- `src/app/` - Next.js 13+ App Router structure
  - `layout.tsx` - Root layout with Geist fonts and metadata
  - `page.tsx` - Main portfolio page with all sections (hero, about, skills, projects, contact)
  - `components/Navigation.tsx` - Client-side navigation component with smooth scrolling anchors
  - `globals.css` - Global styles including Tailwind CSS

### Key Architecture Patterns
- **Single Page Application**: All content is on one page (`page.tsx`) with anchor-based navigation
- **Component Structure**: Minimal component structure with only one reusable component (Navigation)
- **Styling**: Tailwind CSS utility-first approach with responsive design
- **Internationalization**: Mixed Japanese/English content (Japanese for personal info, English for technical terms)

### Typography
- Uses Geist and Geist Mono fonts from Google Fonts
- Font variables: `--font-geist-sans` and `--font-geist-mono`

### Deployment
- Configured for Vercel deployment with `vercel.json`
- No special build configuration in Next.js config

## Important Notes

### Contact Information Update
Before deployment, update the placeholder email `contact@example.com` in:
- `src/app/page.tsx` (lines 31 and 228)

### Content Structure
The site includes these main sections:
1. Hero section with name and title
2. About section with basic info and current work
3. Skills section with languages, frameworks, and AI tools
4. Projects section with major project history
5. Contact section with social links

All sections are contained within the main page component for simplicity and SEO optimization.

## コミットルール

### コミットメッセージ
- コミットメッセージは日本語で記述する
- Claude Codeの署名は含めない
- 簡潔で分かりやすい内容にする