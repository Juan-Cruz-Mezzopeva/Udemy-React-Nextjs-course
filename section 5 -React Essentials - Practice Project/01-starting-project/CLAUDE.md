# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React investment calculator application built with Vite. The project follows a simple structure:

**Core Application Structure:**
- `src/App.jsx` - Main application component (currently minimal)
- `src/index.jsx` - React application entry point
- `src/util/investment.js` - Investment calculation utilities and currency formatting

**Key Utilities:**
- `calculateInvestmentResults()` - Core function that calculates annual investment data including interest, end-of-year values, and annual contributions
- `formatter` - Pre-configured Intl.NumberFormat for USD currency formatting

**Technology Stack:**
- React 19 with Vite build tool
- ESLint for code linting with React-specific rules
- Standard React development setup with no additional state management or routing libraries

The application appears to be in early development stages, with the main App component containing only a heading. The investment calculation logic is already implemented in the utilities module, suggesting this will be an interactive investment calculator tool.