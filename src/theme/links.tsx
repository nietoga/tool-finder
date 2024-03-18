import NextLink from "next/link";
import { forwardRef } from "react";

export const LinkBehaviour = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NextLink>
>((props, ref) => {
  return <NextLink ref={ref} {...props} />;
});
