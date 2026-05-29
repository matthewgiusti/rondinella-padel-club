import wordmark from "@/assets/logo-rondinella.png";
import icon from "@/assets/rondinella-icon.jpg";

type Props = {
  className?: string;
  variant?: "full" | "mark";
};

/**
 * Rondinella Padel Club brand mark — uses the official logo assets.
 * `full` renders the RONDINELLA wordmark; `mark` renders the swallow icon.
 * Size is controlled via `className` (e.g. "h-10 w-auto").
 */
export function Logo({ className, variant = "full" }: Props) {
  if (variant === "mark") {
    return (
      <img
        src={icon}
        alt="Rondinella Padel Club"
        className={className}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <img
      src={wordmark}
      alt="Rondinella Padel Club"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
