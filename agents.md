# Project: blog-angular-2

## Tech Stack

- Angular 21 (standalone components, signals)
- PrimeNG 21 (UI components via Aura preset)
- TailwindCSS 4 (utility styling via `@tailwindcss/postcss`)
- PrimeThemes (Aura)
- ESLint + Prettier + Stylelint (linting/formatting)
- Vitest (unit testing, via Angular's `@angular/build:unit-test`)
- Husky + lint-staged (pre-commit hooks)
- Commitlint (conventional commits)

## Commands

```bash
# Development
npm run start          # Dev server at http://localhost:4200
npm run watch          # Watch mode (dev config)
npm run build          # Production build
npm run build:dev      # Development build (npm run watch --configuration development)

# Testing
npm run test           # Run all tests (headless)
npm test -- --watch    # Watch mode (vitest --watch)
npx vitest run <file>  # Run a single test file
npx vitest run src/app/app.spec.ts
npx vitest --run       # Run all tests once without watch

# Linting & Formatting
npm run lint           # ESLint check (ts + html)
npm run lint:fix       # ESLint auto-fix
npm run lint:styles    # Stylelint check (css/scss)
npm run lint:styles:fix # Stylelint auto-fix
npm run format         # Format all files (prettier)
npm run format:check   # Check formatting without fixing
npm run check          # Full check: format + styles + lint (exit 0 on pass)
npm run check:strict   # Full check with exit code
npm run fix            # Auto-fix: format + styles + lint

# Deployment
npm run deploy         # Deploy to GitHub Pages

# Git hooks
npm run prepare        # Install husky (runs automatically on npm install)
```

## Project Structure

```text
src/app/
├── core/
│   ├── constants/    # Constants (e.g., faq.const.ts)
│   ├── guards/        # Route guards
│   ├── pipes/         # Custom pipes
│   ├── services/      # Services (*.service.ts)
│   └── types/         # Types (*.type.ts, *.interface.ts)
├── pages/             # Page components (<Name>PageComponent)
│   └── <name-page>/
│       └── <name-page>.ts
├── shared/            # Shared/reusable components (<Name>Component)
├── theme/             # PrimeNG theme presets
├── app.ts             # Root component (AppComponent)
├── app.config.ts      # App configuration
├── app.routes.ts      # Routing definitions
└── app.spec.ts       # Root component tests

src/
├── styles.css         # Global styles + TailwindCSS imports + @theme
└── index.html

public/                # Static assets (served as-is)
```

## Naming Conventions

### Classes

| Type             | Pattern               | Example            |
| ---------------- | --------------------- | ------------------ |
| Page component   | `<Name>PageComponent` | `FaqPageComponent` |
| Shared component | `<Name>Component`     | `HeaderComponent`  |
| Service          | `<Name>Service`       | `FaqService`       |
| Type/Interface   | PascalCase            | `FaqItem`          |
| Constant         | camelCase             | `faqMockData`      |

### Files

- Components: kebab-case (e.g., `home-page.ts`, `header.ts`)
- Services: kebab-case + `.service.ts` suffix
- Types: kebab-case + `.type.ts` suffix
- Constants: kebab-case + `.const.ts` suffix
- HTML templates: same base name as component (e.g., `header.html`)
- Specs: same base name + `.spec.ts`

### HTML Selectors

- Components: `app-<kebab-name>` (e.g., `app-header`, `app-home`)
- Attribute directives: `app<camelCaseName>`

## Code Style

### General

- 2-space indentation, no tabs
- No semicolons in TypeScript/JS
- Single quotes in TypeScript/JS; double quotes in HTML attributes
- Trailing commas: none
- Print width: 80
- Arrow parens: always
- `lf` line endings
- No trailing whitespace (except .md files)
- Trim trailing whitespace on save

### Imports

Organize imports in this order (ESLint/Prettier enforces):

1. Angular core imports (`@angular/*`)
2. Third-party library imports (`primeng/*`, `rxjs`, etc.)
3. Relative imports (`./`, `../`)

Example:

```typescript
import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar'
import { HeaderComponent } from './shared/header/header'
```

### TypeScript / Angular

- **Always use standalone components** (no `NgModule` unless absolutely required)
- Use `inject()` for dependency injection instead of constructor
  injection where appropriate
- Use `input()` / `output()` for component communication
- Prefer signals (`signal()`, `computed()`) over `BehaviorSubject` for local state
- Use `toSignal()` to convert Observables to signals
- Prefer `OnPush` change detection strategy
- Use strict TypeScript (`strict: true`, `noImplicitOverride: true`, etc.)
- All Angular compiler strict modes are enabled (templates, injection, inputs)
- **No `any`** — use `unknown` or proper types
- Use `provideBrowserGlobalErrorListeners()` in app config
- Prefix interface names (e.g., `FaqItem` not `IFaqItem`)

### Component Patterns

```typescript
@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styles: `` // or styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined

  ngOnInit() {
    // ...
  }
}
```

### Error Handling

- Handle errors in services
- Use `finalize()` in RxJS pipelines for cleanup
- Use `provideBrowserGlobalErrorListeners()` at app root

### API URLs

- Never hardcode API URLs — use environment files

### CSS / Styling

- Use TailwindCSS utility classes in templates where possible
- Use `src/styles.css` for global styles and TailwindCSS imports
- Use CSS custom properties in `@theme {}` block for project-wide tokens
- Stylelint: max nesting depth 3, short hex colors, enforce blank lines before rules
- Component styles: use `styles` inline or `styleUrl: './name.css'`
- Do not use `::ng-deep` unless absolutely necessary

## TypeScript Strict Mode Settings

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "strictInputTypes": true,
    "strictOutputEventTypes": true,
    "strictDomLocalRefTypes": true
  }
}
```

## Git Workflow

### Branch Naming

```text
feat/<feature-name>     # New features
fix/<issue-name>        # Bug fixes
refactor/<name>         # Refactoring
chore/<name>            # Maintenance
```

### Commits (Conventional Commits)

Format: `type(scope): description`

| Type       | Use case                                 |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `refactor` | Code refactoring without behavior change |
| `chore`    | Build, deps, config                      |
| `style`    | Formatting, no code change               |
| `test`     | Adding/updating tests                    |

Examples:

```text
feat(faq): add FaqService with mock data
fix(header): correct logo path
refactor(pages): rename components to follow conventions
```

### Don'ts

- Never commit directly to `main`
- Never skip lint-staged hooks
- Never use `--no-verify` flag
- Never commit secrets or API keys

## Lint-Staged (Pre-commit Hooks)

On every commit, the following runs automatically via Husky:

1. For `src/**/*.{ts,html}`: Prettier format → ESLint fix
2. For `src/**/*.{css,scss}`: Prettier format → Stylelint fix
3. For `**/*.{json,md}`: Prettier format

## Troubleshooting

| Issue              | Solution                                              |
| ------------------ | ----------------------------------------------------- |
| Build fails        | Run `npm run check` first                             |
| Assets not loading | Check `angular.json` assets config                    |
| Styles not applied | Verify TailwindCSS setup in styles.css and .postcssrc |
| Test fails         | Run `npx vitest run <file>` to isolate                |
| Lint errors        | Run `npm run fix` to auto-correct                     |
