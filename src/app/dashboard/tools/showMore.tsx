import { Collapse, Link } from "@mui/material";
import { useState, useCallback, PropsWithChildren } from "react";

export const ShowMore = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSeeMore = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <>
      <Collapse in={isOpen}>{children}</Collapse>
      <Link component="button" variant="body2" onClick={toggleSeeMore}>
        {isOpen ? "Show less" : "Show more..."}
      </Link>
    </>
  );
};
