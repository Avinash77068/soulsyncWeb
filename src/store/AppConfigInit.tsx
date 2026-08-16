"use client";

import { useEffect } from "react";

import { useAppConfigStore } from "./appConfigStore";

export default function AppConfigInit() {
  const fetchAppConfig = useAppConfigStore((state) => state.fetchAppConfig);

  useEffect(() => {
    fetchAppConfig();
  }, [fetchAppConfig]);

  return null;
}
