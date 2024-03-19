import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import { createAppSlice, AppSlice } from "./slice/app.slice";

export type ApplicationStore = AppSlice;

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set, get, api): ApplicationStore => ({
      ...createAppSlice(
        set as StoreApi<AppSlice>["setState"],
        get as StoreApi<AppSlice>["getState"],
        api as StoreApi<AppSlice>
      ),
    }),
    {
      name: "btx-platform-store",
      //   partialize: (state: ApplicationStore) => ({}),
    }
  )
);
