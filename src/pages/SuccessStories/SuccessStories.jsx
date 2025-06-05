import React, { useLayoutEffect } from "react";

import Successstoriesbanner from "../../components/successStories/Successstoriesbanner";

export default function SuccessStories() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  return (
    <div>
      <Successstoriesbanner />
    </div>
  );
}
