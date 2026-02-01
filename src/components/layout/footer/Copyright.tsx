interface CopyrightProps {
  className?: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  return (
    <div className={className}>
      <p className="text-center text-sm text-foreground/50 dark:text-foreground/60">
        {`© ${new Date().getFullYear()} Taejun Goo. All rights reserved.`}
      </p>
      <p className="mt-1 text-center text-xs text-foreground/40 dark:text-foreground/50">
        Made with Next.js & TypeScript
      </p>
    </div>
  );
};

export default Copyright;
