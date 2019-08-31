/// <reference types="react-scripts" />

declare module "use-resize-observer" {
  import { RefObject } from "react";
  const useResizeObserver: () => [RefObject<any>, number, number];
  export default useResizeObserver;
}
