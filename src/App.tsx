import React, { useState } from 'react';
import { CronBuilder } from './components/CronBuilder';
import './styles/globals.css';

function App() {
  const [cronExpression, setCronExpression] = useState('0 0 * * 0');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCronChange = (expression: string) => {
    setCronExpression(expression);
    console.log('Cron expression changed:', expression);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const examples = [
    { label: 'Every Sunday at midnight', value: '0 0 * * 0' },
    { label: 'Every day at 9 AM', value: '0 9 * * ?' },
    { label: 'Every hour', value: '0 * * * ?' },
    { label: 'Every 15 minutes', value: '0,15,30,45 * * * ?' },
    { label: 'Weekdays at 6 PM', value: '0 18 ? * 1,2,3,4,5' },
    { label: 'First day of month at noon', value: '0 12 1 * ?' },
  ];

  return (
    <div className={`min-h-screen p-8 bg-background text-foreground transition-colors ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Cron Builder UI
            </h1>
            <p className="text-muted-foreground">
              A beautiful, customizable cron expression builder component for React
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md border border-border bg-background hover:bg-accent transition-colors"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Current Expression Display */}
        <div className="mb-8 p-4 bg-card border border-border rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-card-foreground">Current Expression</h2>
          <div className="font-mono text-sm bg-accent text-accent-foreground p-2 rounded">
            {cronExpression || 'No expression set'}
          </div>
        </div>

        {/* Cron Builder Component */}
        <div className="mb-8 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-card-foreground">Cron Builder</h2>
          <CronBuilder 
            onChange={handleCronChange}
            defaultValue={cronExpression}
          />
        </div>

        {/* Examples */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Examples</h2>
          <div className="grid gap-2 md:grid-cols-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setCronExpression(example.value)}
                className="text-left p-3 border border-border rounded hover:bg-accent transition-colors"
              >
                <div className="font-medium text-sm text-foreground">{example.label}</div>
                <div className="font-mono text-xs text-muted-foreground">
                  {example.value}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-card-foreground">Installation & Usage</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 text-card-foreground">Install the package:</h3>
              <code className="block bg-accent text-accent-foreground p-2 rounded text-sm">
                npm install @vpfaiz/cron-builder-ui
              </code>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 text-card-foreground">Basic usage:</h3>
              <pre className="bg-accent text-accent-foreground p-4 rounded text-sm overflow-x-auto">
{`import { CronBuilder } from '@vpfaiz/cron-builder-ui';
import '@vpfaiz/cron-builder-ui/styles/globals.css';

function MyComponent() {
  const [cronExpression, setCronExpression] = useState('0 0 * * 0');

  return (
    <CronBuilder 
      onChange={setCronExpression}
      defaultValue={cronExpression}
    />
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-2 text-card-foreground">Props:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code>onChange: (expression: string) =&gt; void</code> - Callback when cron expression changes</li>
                <li><code>defaultValue?: string</code> - Initial cron expression</li>
                <li><code>className?: string</code> - Additional CSS classes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Built with React, TypeScript, Tailwind CSS, and Radix UI</p>
        </div>
      </div>
    </div>
  );
}

export default App;