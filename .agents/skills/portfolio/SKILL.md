```markdown
# portfolio Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns and conventions used in the `portfolio` repository, a TypeScript-based Next.js application. You'll learn about file naming, import/export styles, commit message habits, and how to write and organize tests. This guide also provides suggested commands for common workflows to streamline your development process.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.tsx`, `projectList.ts`

### Import Style
- Use **alias-based imports** for modules.
  - Example:
    ```typescript
    import Button from '@/components/Button'
    ```

### Export Style
- **Mixed** export styles are used (both default and named exports).
  - Example:
    ```typescript
    // Default export
    export default function HomePage() { ... }

    // Named export
    export const getServerSideProps = async () => { ... }
    ```

### Commit Messages
- Freeform, no strict type or prefix required.
- Example:
  ```
  Add new contact form component
  Fix bug in project list rendering
  ```

## Workflows

_No explicit workflows detected in the repository._

## Testing Patterns

- **Test Framework:** Unknown (not detected)
- **Test File Pattern:** Files matching `*.test.*`
  - Example: `userProfile.test.tsx`
- Place test files alongside the files they test or in a dedicated `__tests__` directory.

  ```typescript
  // userProfile.test.tsx
  import { render } from '@testing-library/react'
  import UserProfile from './userProfile'

  test('renders user name', () => {
    // test implementation
  })
  ```

## Commands

| Command      | Purpose                                 |
|--------------|-----------------------------------------|
| /test        | Run all test files matching *.test.*    |
| /lint        | Run linter to check code style          |
| /build       | Build the Next.js application           |
| /dev         | Start the Next.js development server    |
```