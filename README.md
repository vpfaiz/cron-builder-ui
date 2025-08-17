# Cron Builder UI

A beautiful, customizable cron expression builder component for React applications. Built with TypeScript, Tailwind CSS, and Radix UI primitives.

![Cron Builder UI Demo](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Cron+Builder+UI+Demo)

## Features

- 🎨 **Beautiful UI** - Clean, modern interface with light/dark mode support
- ⚡ **TypeScript Support** - Fully typed for better developer experience  
- 🎯 **Easy Integration** - Simple API with minimal dependencies
- 🔧 **Customizable** - Tailwind CSS classes for easy styling
- 📱 **Responsive** - Works great on desktop and mobile devices
- 🎪 **Multiple Formats** - Support for hourly, daily, weekly, monthly, yearly, and custom expressions
- 🎭 **Visual Feedback** - Real-time preview of cron expressions in human-readable format
- ♿ **Accessible** - Built with Radix UI primitives for excellent accessibility

## Installation

```bash
npm install @vpfaiz/cron-builder-ui
```

### Peer Dependencies

Make sure you have these peer dependencies installed:

```bash
npm install @radix-ui/react-toggle-group react react-dom
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { CronBuilder } from '@vpfaiz/cron-builder-ui';
import '@vpfaiz/cron-builder-ui/styles/globals.css';

function App() {
  const [cronExpression, setCronExpression] = useState('0 0 * * 0');

  return (
    <div className="p-8">
      <h1>Schedule Configuration</h1>
      <CronBuilder 
        onChange={setCronExpression}
        defaultValue={cronExpression}
      />
      <p>Current expression: <code>{cronExpression}</code></p>
    </div>
  );
}
```

## API Reference

### CronBuilder Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onChange` | `(expression: string) => void` | ✅ | Callback function called when the cron expression changes |
| `defaultValue` | `string` | ❌ | Initial cron expression (defaults to `'0 0 * * 0'`) |
| `className` | `string` | ❌ | Additional CSS classes to apply to the component |

### Utility Functions

#### `getCronText(cronExpression: string)`

Converts a cron expression to human-readable text.

```tsx
import { getCronText } from '@vpfaiz/cron-builder-ui';

const result = getCronText('0 9 * * 1-5');
// result = { status: true, value: "At 09:00 AM, Monday through Friday" }
```

## Styling

The component uses Tailwind CSS and CSS custom properties for theming. You can customize the appearance by:

### 1. Using the built-in dark mode

```tsx
<div className="dark">
  <CronBuilder onChange={setCronExpression} />
</div>
```

### 2. Customizing CSS variables

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --selected: 222.2 47.4% 11.2%;
  --selected-foreground: 210 40% 98%;
  /* ... other variables */
}
```

### 3. Adding custom classes

```tsx
<CronBuilder 
  className="my-custom-cron-builder" 
  onChange={setCronExpression} 
/>
```

## Examples

### Basic Usage
```tsx
<CronBuilder onChange={console.log} />
```

### With Custom Default
```tsx
<CronBuilder 
  defaultValue="0 9 * * 1-5" 
  onChange={setCronExpression} 
/>
```

### With Custom Styling
```tsx
<CronBuilder 
  className="border rounded-lg p-4" 
  onChange={setCronExpression} 
/>
```

## Supported Cron Patterns

The component supports standard 5-field cron expressions:

| Field | Values | Special Characters |
|-------|--------|--------------------|
| Minute | 0-59 | `,` `-` `*` |
| Hour | 0-23 | `,` `-` `*` |
| Day of Month | 1-31 | `,` `-` `*` `?` |
| Month | 1-12 | `,` `-` `*` |
| Day of Week | 0-6 (Sun-Sat) | `,` `-` `*` `?` |

### Common Examples

- `0 0 * * 0` - Every Sunday at midnight
- `0 9 * * ?` - Every day at 9 AM  
- `0 */2 * * ?` - Every 2 hours
- `15,45 * * * ?` - Every hour at 15 and 45 minutes
- `0 9 1 * ?` - First day of every month at 9 AM
- `0 9 * * 1-5` - Weekdays at 9 AM

## Development

### Running the Demo

```bash
git clone https://github.com/vpfaiz/cron-builder-ui.git
cd cron-builder-ui
npm install
npm run dev
```

### Building

```bash
npm run build        # Build the demo app
npm run build:lib    # Build the library for distribution
```

### Linting

```bash
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors automatically
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Radix UI](https://www.radix-ui.com/) for accessible primitives
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Component architecture and styling patterns inspired by [shadcn/ui](https://ui.shadcn.com/)
- Cron parsing powered by [cronstrue](https://github.com/bradymholt/cRonstrue)
- Toggle group component adapted from [shadcn/ui components](https://ui.shadcn.com/docs/components/toggle-group)

---

Made with ❤️ for the React community