import NextLink from "next/link";
import { forwardRef } from "react";

const LinkBehaviour = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NextLink>
>((props, ref) => {
  return <NextLink ref={ref} {...props} />;
});

LinkBehaviour.displayName = "LinkBehaviour";

export { LinkBehaviour };
