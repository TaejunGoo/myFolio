import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const colorGroups = [
  {
    title: "Base",
    colors: [
      { name: "Background", variable: "bg-background", text: "text-foreground" },
      { name: "Foreground", variable: "bg-foreground", text: "text-background" },
    ],
  },
  {
    title: "Primary",
    colors: [
      { name: "Primary", variable: "bg-primary", text: "text-primary-foreground" },
      { name: "Primary Foreground", variable: "bg-primary-foreground", text: "text-primary" },
    ],
  },
  {
    title: "Secondary",
    colors: [
      { name: "Secondary", variable: "bg-secondary", text: "text-secondary-foreground" },
      { name: "Secondary Foreground", variable: "bg-secondary-foreground", text: "text-secondary" },
    ],
  },
  {
    title: "Muted",
    colors: [
      { name: "Muted", variable: "bg-muted", text: "text-muted-foreground" },
      { name: "Muted Foreground", variable: "bg-muted-foreground", text: "text-muted" },
    ],
  },
  {
    title: "Accent",
    colors: [
      { name: "Accent", variable: "bg-accent", text: "text-accent-foreground" },
      { name: "Accent Foreground", variable: "bg-accent-foreground", text: "text-accent" },
    ],
  },
  {
    title: "Destructive",
    colors: [
      { name: "Destructive", variable: "bg-destructive", text: "text-destructive-foreground" },
    ],
  },
  {
    title: "UI Elements",
    colors: [
      { name: "Card", variable: "bg-card", text: "text-card-foreground" },
      { name: "Card Foreground", variable: "bg-card-foreground", text: "text-card" },
      { name: "Popover", variable: "bg-popover", text: "text-popover-foreground" },
      { name: "Popover Foreground", variable: "bg-popover-foreground", text: "text-popover" },
      { name: "Border", variable: "bg-border", text: "text-foreground" },
      { name: "Input", variable: "bg-input", text: "text-foreground" },
      { name: "Ring", variable: "bg-ring", text: "text-foreground" },
    ],
  },
  {
    title: "Charts",
    colors: [
      { name: "Chart 1", variable: "bg-chart-1", text: "text-white" },
      { name: "Chart 2", variable: "bg-chart-2", text: "text-white" },
      { name: "Chart 3", variable: "bg-chart-3", text: "text-white" },
      { name: "Chart 4", variable: "bg-chart-4", text: "text-white" },
      { name: "Chart 5", variable: "bg-chart-5", text: "text-white" },
    ],
  },
  {
    title: "Sidebar",
    colors: [
      { name: "Sidebar", variable: "bg-sidebar", text: "text-sidebar-foreground" },
      { name: "Sidebar Foreground", variable: "bg-sidebar-foreground", text: "text-sidebar" },
      { name: "Sidebar Primary", variable: "bg-sidebar-primary", text: "text-sidebar-primary-foreground" },
      { name: "Sidebar Primary FG", variable: "bg-sidebar-primary-foreground", text: "text-sidebar-primary" },
      { name: "Sidebar Accent", variable: "bg-sidebar-accent", text: "text-sidebar-accent-foreground" },
      { name: "Sidebar Accent FG", variable: "bg-sidebar-accent-foreground", text: "text-sidebar-accent" },
      { name: "Sidebar Border", variable: "bg-sidebar-border", text: "text-sidebar-foreground" },
      { name: "Sidebar Ring", variable: "bg-sidebar-ring", text: "text-sidebar-foreground" },
    ],
  },
];

const ColorPalette = () => {
  return (
    <div className={`
      min-h-screen space-y-8 bg-white p-8 text-neutral-900
      dark:bg-neutral-950 dark:text-neutral-100
    `}>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Design System Colors</h1>
        <p className={`
          text-neutral-500
          dark:text-neutral-400
        `}>
          Tailwind CSS variables defined in globals.css
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h2 className={`
            border-b border-neutral-200 pb-2 text-xl font-semibold
            dark:border-neutral-800
          `}>
            {group.title}
          </h2>
          <div className={`
            grid grid-cols-2 gap-4
            md:grid-cols-4
          `}>
            {group.colors.map((color) => (
              <div
                key={color.name}
                className="flex flex-col space-y-2"
              >
                <div
                  className={`
                    flex h-24 items-center justify-center rounded-lg border
                    border-neutral-200 shadow-sm
                    dark:border-neutral-800
                    ${color.variable}
                  `}
                >
                  <span className={`
                    text-sm font-medium
                    ${color.text || "text-foreground"}
                  `}>
                    Aa
                  </span>
                </div>
                <div className="px-1">
                  <p className="text-sm font-medium">{color.name}</p>
                  <p className="font-mono text-xs text-neutral-500">{color.variable}</p>                  <p className={`
                    mt-1 font-mono text-xs text-neutral-400
                  `}>
                    {`<div className="${color.variable}">`}
                  </p>                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const UsageExamples = () => {
  return (
    <div className="min-h-screen space-y-12 bg-background p-8 text-foreground">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Color Usage Examples</h1>
        <p className="text-muted-foreground">
          Real-world examples of how semantic colors are applied to UI components.
        </p>
      </div>

      {/* Primary & Actions */}
      <section className="space-y-4">
        <h2 className="border-b border-border pb-2 text-xl font-semibold">Actions & Buttons</h2>
        <div className="flex flex-wrap items-start gap-8">
          <div className="flex flex-col items-center gap-2">
            <button className={`
              rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm
              transition-opacity
              hover:opacity-90
            `}>
              Primary Action
            </button>
            <div className="text-center font-mono text-xs text-muted-foreground">
              <p>bg-primary</p>
              <p>text-primary-foreground</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className={`
              rounded-md bg-secondary px-4 py-2 text-secondary-foreground
              shadow-sm transition-opacity
              hover:opacity-80
            `}>
              Secondary Action
            </button>
            <div className="text-center font-mono text-xs text-muted-foreground">
              <p>bg-secondary</p>
              <p>text-secondary-foreground</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className={`
              text-destructive-foreground rounded-md bg-destructive px-4 py-2
              shadow-sm transition-opacity
              hover:opacity-90
            `}>
              Destructive
            </button>
            <div className="text-center font-mono text-xs text-muted-foreground">
              <p>bg-destructive</p>
              <p>text-destructive-foreground</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className={`
              rounded-md border border-input bg-background px-4 py-2 shadow-sm
              transition-colors
              hover:bg-accent hover:text-accent-foreground
            `}>
              Outline / Ghost
            </button>
            <div className="text-center font-mono text-xs text-muted-foreground">
              <p>border-input</p>
              <p>hover:bg-accent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards & Surfaces */}
      <section className="space-y-4">
        <h2 className="border-b border-border pb-2 text-xl font-semibold">Surfaces & Cards</h2>
        <div className={`
          grid grid-cols-1 gap-6
          md:grid-cols-2
        `}>
          <div className={`
            rounded-lg border border-border bg-card p-6 text-card-foreground
            shadow-sm
          `}>
            <h3 className="mb-2 text-lg font-semibold">Card Component</h3>
            <p className="mb-4 text-muted-foreground">
              This is a standard card. It uses <code className={`
                rounded-sm bg-muted px-1 py-0.5 font-mono text-xs
              `}>bg-card</code> for the background
              and <code className={`
                rounded-sm bg-muted px-1 py-0.5 font-mono text-xs
              `}>text-card-foreground</code> for text.
            </p>
            <div className="flex justify-end">
              <button className={`
                text-sm font-medium text-primary
                hover:underline
              `}>Read more</button>
            </div>
          </div>
          <div className={`
            rounded-lg border border-border bg-popover p-6
            text-popover-foreground shadow-md
          `}>
            <h3 className="mb-2 text-lg font-semibold">Popover / Modal</h3>
            <p className="mb-4 text-sm">
              Popovers float above content. Uses <code className={`
                rounded-sm bg-muted px-1 py-0.5 font-mono text-xs
              `}>bg-popover</code>.
              Notice how it might be slightly different from card background in some themes.
            </p>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="border-b border-border pb-2 text-xl font-semibold">Form Elements</h2>
        <div className="max-w-sm space-y-4">
          <div className="space-y-2">
            <label className="text-sm leading-none font-medium">
              Input Field
            </label>
            <input
              className={`
                flex h-10 w-full rounded-md border border-input bg-background
                px-3 py-2 text-sm
                placeholder:text-muted-foreground
                focus-visible:ring-2 focus-visible:ring-ring
                focus-visible:outline-none
              `}
              placeholder="Type something..."
            />
            <p className="text-xs text-muted-foreground">
              Border is <code className={`
                rounded-sm bg-muted px-1 py-0.5 font-mono text-xs
              `}>border-input</code>. 
              Focus ring is <code className={`
                rounded-sm bg-muted px-1 py-0.5 font-mono text-xs
              `}>ring-ring</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback & Muted */}
      <section className="space-y-4">
        <h2 className="border-b border-border pb-2 text-xl font-semibold">Feedback & States</h2>
        <div className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <h4 className="text-sm font-semibold">Muted Area</h4>
                <p className="text-sm text-muted-foreground">
                  Used for secondary content or backgrounds. <code className={`
                    rounded-sm bg-background px-1 py-0.5 font-mono text-xs
                  `}>bg-muted</code>
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-md bg-accent p-4 text-accent-foreground">
            <h4 className="text-sm font-semibold">Accent State</h4>
            <p className="text-sm">
              Used for selected items, active states, or highlights. <code className={`
                rounded-sm bg-background/50 px-1 py-0.5 font-mono text-xs
              `}>bg-accent</code>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta = {
  title: "Design System/Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Usage: Story = {
  render: () => <UsageExamples />,
};
