import { Suspense } from "react";

import { ToolView } from "./ToolView";

const ToolPage = () => {
  return (
    <Suspense>
      <ToolView />
    </Suspense>
  );
};

export default ToolPage;
