import { ReactNode } from "react";
import clsx from "clsx";

type GlassProps = {
  children: ReactNode;
  className?: string;
};

export default function Glass({
  children,
  className,
}: GlassProps) {
  return (
    <div
      className={clsx(
        `
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.045]
        backdrop-blur-[40px]
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        transition-all
        duration-300
        `,
        className
      )}
    >
      {children}
    </div>
  );
}
