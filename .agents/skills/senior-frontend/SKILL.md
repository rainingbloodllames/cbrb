---
name: senior-frontend
description: "Comprehensive frontend development skill for building modern, performant web applications using ReactJS, NextJS, TypeScript, Tailwind CSS. Includes component scaffolding, performance optimization, bundle analysis, UI best practices, React 40+ performance rules, memoization, code splitting, and efficient rendering strategies. Consolidates: senior-frontend + react-best-practices + react-performance-optimization."
---

# Senior Frontend + React Performance

> **SKILL CONSOLIDADO**: Este skill absorbe `react-best-practices` (40+ reglas de optimizacion React/Next.js) y `react-performance-optimization` (memoization, code splitting, rendering). Skills originales en `.agents/deprecated-skills/`.

Complete toolkit for senior frontend with modern tools and best practices.

## Quick Start

### Main Capabilities

This skill provides three core capabilities through automated scripts:

```bash
# Script 1: Component Generator
python scripts/component_generator.py [options]

# Script 2: Bundle Analyzer
python scripts/bundle_analyzer.py [options]

# Script 3: Frontend Scaffolder
python scripts/frontend_scaffolder.py [options]
```

## React Performance Rules (absorbido de react-best-practices + react-performance-optimization)

### Reglas obligatorias en SIGCE:
1. **Granular Zustand selectors**: `useStore(s => s.field)` — NUNCA whole store
2. **React.memo** en exports de componentes de formulario
3. **`form-section` CSS utility** en contenedores de formulario (GPU isolation)
4. **performanceMode** desde `useDashboard()` gatea animaciones pesadas
5. **NO `transition-all`** — siempre propiedades explicitas `transition-[color,background-color]`
6. **NO `AnimatePresence` ni `motion.div`** en formularios con performanceMode activo
7. **Code splitting**: `dynamic(() => import('./HeavyComponent'))` para bundles > 10KB
8. **useCallback/useMemo** en callbacks pasados a hijos que se re-renderizan
9. **Evitar props spreading**: pasar props explicitas para mejor memoization
10. **Eliminar useEffect innecesarios**: preferir derivacion directa o useMemo

### SIGCE Performance Patterns:
- PremiumTable: render directo sin animacion en sort/filtro (no spring)
- GlassFormSection: HTML estatico, sin `motion.*`
- CommandAIBar: selectores granulares de store
- Header: CSS-driven en lugar de 55 MotionValues reactivos

## Core Capabilities

### 1. Component Generator

Automated tool for component generator tasks.

**Features:**
- Automated scaffolding
- Best practices built-in
- Configurable templates
- Quality checks

**Usage:**
```bash
python scripts/component_generator.py <project-path> [options]
```

### 2. Bundle Analyzer

Comprehensive analysis and optimization tool.

**Features:**
- Deep analysis
- Performance metrics
- Recommendations
- Automated fixes

**Usage:**
```bash
python scripts/bundle_analyzer.py <target-path> [--verbose]
```

### 3. Frontend Scaffolder

Advanced tooling for specialized tasks.

**Features:**
- Expert-level automation
- Custom configurations
- Integration ready
- Production-grade output

**Usage:**
```bash
python scripts/frontend_scaffolder.py [arguments] [options]
```

## Reference Documentation

### React Patterns

Comprehensive guide available in `references/react_patterns.md`:

- Detailed patterns and practices
- Code examples
- Best practices
- Anti-patterns to avoid
- Real-world scenarios

### Nextjs Optimization Guide

Complete workflow documentation in `references/nextjs_optimization_guide.md`:

- Step-by-step processes
- Optimization strategies
- Tool integrations
- Performance tuning
- Troubleshooting guide

### Frontend Best Practices

Technical reference guide in `references/frontend_best_practices.md`:

- Technology stack details
- Configuration examples
- Integration patterns
- Security considerations
- Scalability guidelines

## Tech Stack

**Languages:** TypeScript, JavaScript, Python, Go, Swift, Kotlin
**Frontend:** React, Next.js, React Native, Flutter
**Backend:** Node.js, Express, GraphQL, REST APIs
**Database:** PostgreSQL, Prisma, NeonDB, Supabase
**DevOps:** Docker, Kubernetes, Terraform, GitHub Actions, CircleCI
**Cloud:** AWS, GCP, Azure

## Development Workflow

### 1. Setup and Configuration

```bash
# Install dependencies
npm install
# or
pip install -r requirements.txt

# Configure environment
cp .env.example .env
```

### 2. Run Quality Checks

```bash
# Use the analyzer script
python scripts/bundle_analyzer.py .

# Review recommendations
# Apply fixes
```

### 3. Implement Best Practices

Follow the patterns and practices documented in:
- `references/react_patterns.md`
- `references/nextjs_optimization_guide.md`
- `references/frontend_best_practices.md`

## Best Practices Summary

### Code Quality
- Follow established patterns
- Write comprehensive tests
- Document decisions
- Review regularly

### Performance
- Measure before optimizing
- Use appropriate caching
- Optimize critical paths
- Monitor in production

### Security
- Validate all inputs
- Use parameterized queries
- Implement proper authentication
- Keep dependencies updated

### Maintainability
- Write clear code
- Use consistent naming
- Add helpful comments
- Keep it simple

## Common Commands

```bash
# Development
npm run dev
npm run build
npm run test
npm run lint

# Analysis
python scripts/bundle_analyzer.py .
python scripts/frontend_scaffolder.py --analyze

# Deployment
docker build -t app:latest .
docker-compose up -d
kubectl apply -f k8s/
```

## Troubleshooting

### Common Issues

Check the comprehensive troubleshooting section in `references/frontend_best_practices.md`.

### Getting Help

- Review reference documentation
- Check script output messages
- Consult tech stack documentation
- Review error logs

## Resources

- Pattern Reference: `references/react_patterns.md`
- Workflow Guide: `references/nextjs_optimization_guide.md`
- Technical Guide: `references/frontend_best_practices.md`
- Tool Scripts: `scripts/` directory
