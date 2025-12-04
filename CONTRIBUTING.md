# Contributing to CS Bingo

Thank you for your interest in contributing to CS Bingo! This document outlines guidelines and instructions for contributing to this project.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rafael-neves/cs-bingo-fe.git
   cd cs-bingo-fe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- **Framework**: SvelteKit 5
- **Styling**: Tailwind CSS v4 + SCSS
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── atoms/       # Small, reusable components
│   └── molecules/   # Composed components (e.g., Card)
├── routes/          # SvelteKit pages and layouts
└── lib/             # Utility functions and shared logic
```

## Development Guidelines

- Use TypeScript for all new code
- Follow the existing component structure (atoms/molecules)
- Ensure Tailwind classes are properly scoped
- Test components in the dev server before submitting
- Keep components focused and single-responsibility

## Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test your work:
   ```bash
   npm run dev
   ```
4. Commit with clear messages:
   ```bash
   git commit -m "feat: add new feature"
   ```
5. Push to the repository and create a Pull Request

## Code Style

- Use 2-space indentation
- Write descriptive variable and function names
- Add comments for complex logic
- Format code consistently with the existing codebase

## Reporting Issues

If you find a bug or have a suggestion:

1. Check existing issues first
2. Provide clear description and steps to reproduce
3. Include relevant environment details

Thank you for contributing! 🎉
