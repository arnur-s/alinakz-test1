import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getPageNameFromPath } from "components/SidePanel";

export const usePageName = () => {
  const location = useLocation();

  const pageName = useMemo(() => {
    return getPageNameFromPath(location.pathname);
  }, [location]);

  return pageName;
};
