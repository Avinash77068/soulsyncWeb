import { create } from "zustand";

import { APK_URL } from "@/src/data/landing";

interface AppVersionResponse {
  success: boolean;
  data: {
    latestVersionCode: number;
    latestVersionName: string;
    apkUrl: string;
    releaseNotes: string;
    iconUrl: string;
    screenshot0Url: string;
    screenshot1Url: string;
  };
}

interface AppConfigState {
  apkUrl: string;
  iconUrl: string;
  screenshot0Url: string;
  screenshot1Url: string;
  latestVersionName: string;
  releaseNotes: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  fetchAppConfig: () => Promise<void>;
}

export const useAppConfigStore = create<AppConfigState>((set) => ({
  apkUrl: APK_URL,
  iconUrl: "/soulsync-icon.png",
  screenshot0Url: "/soulsync-screen-0.jpg",
  screenshot1Url: "/soulsync-screen-1.jpg",
  latestVersionName: "",
  releaseNotes: "",
  status: "idle",

  fetchAppConfig: async () => {
    set({ status: "loading" });
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${baseUrl}/api/app/version`);
      const json: AppVersionResponse = await res.json();
      const data = json.data;

      set((state) => ({
        status: "succeeded",
        apkUrl: data.apkUrl || state.apkUrl,
        iconUrl: data.iconUrl || state.iconUrl,
        screenshot0Url: data.screenshot0Url || state.screenshot0Url,
        screenshot1Url: data.screenshot1Url || state.screenshot1Url,
        latestVersionName: data.latestVersionName,
        releaseNotes: data.releaseNotes,
      }));
    } catch {
      set({ status: "failed" });
    }
  },
}));
