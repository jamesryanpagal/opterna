import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMultipleState } from "./useMultipleState";

export const usePagePath = () => {
  const { pathname } = useLocation();

  const [{ currPath, rawPath, hasUrlParams }, setPath] = useMultipleState({
    currPath: pathname.split("/").filter(v => !!v)[0],
    rawPath: pathname,
    hasUrlParams: pathname.split("/").filter(v => !!v).length > 1,
  });

  useEffect(() => {
    setPath({
      currPath: pathname.split("/").filter(v => !!v)[0],
      rawPath: pathname,
      hasUrlParams: pathname.split("/").filter(v => !!v).length > 1,
    });
  }, [setPath, pathname]);

  return { currPath, rawPath, hasUrlParams };
};
