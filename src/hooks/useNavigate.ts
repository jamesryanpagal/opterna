import { type RoutePath, type RouteParams } from "../routes/page-routes";
import {
  type NavigateOptions,
  useNavigate as useRRDNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

type NavOptions = NavigateOptions & { sub?: boolean };
type QueryOptions = Record<string, string>;

export type NavProps = {
  parent?: RoutePath[];
  path: RoutePath;
  params?: RouteParams;
  query?: QueryOptions;
  options?: NavOptions;
};

export const useNavigate = () => {
  const [formattedPath, setFormattedPath] = useState<string | null>(null);
  const [pathOptions, setPathOptions] = useState<NavOptions | null>(null);

  const navigate = useRRDNavigate();

  const nav = ({ parent, path, params, query, options }: NavProps) => {
    setFormattedPath(() => null);
    setPathOptions(() => null);

    const joinParentPath = parent ? `${parent.join("/")}/` : "";
    const queryParams = new URLSearchParams();

    if (query) {
      Object.entries(query).map(([key, val]) => {
        queryParams.set(key, val);
      });
    }

    if (params) {
      const pathArr = path.split("/");
      const routePath = Object.keys(params).reduce((acc, c) => {
        const urlParamIndex = pathArr.findIndex(p => p === `:${c}`);
        pathArr.splice(urlParamIndex, 1, `${params[c as keyof RouteParams]}`);

        acc = pathArr.join("/");

        return acc;
      }, "");

      setFormattedPath(
        () =>
          `${joinParentPath}${routePath}${
            queryParams.size ? `?${queryParams.toString()}` : ""
          }`,
      );
    } else {
      setFormattedPath(
        () =>
          `${joinParentPath}${path}${
            queryParams.size ? `?${queryParams.toString()}` : ""
          }`,
      );
    }

    setPathOptions(() => options || null);
  };

  useEffect(() => {
    if (formattedPath === null) return;
    const { sub, ...rest } = pathOptions || {};
    navigate(`${sub ? "" : "/"}${formattedPath}`, rest || {});
  }, [navigate, formattedPath, pathOptions]);

  return nav;
};
