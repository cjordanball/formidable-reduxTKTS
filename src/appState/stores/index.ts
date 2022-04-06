import { formidableStore } from "@app/appState/stores/formidableStore";

export const FormidableStore = formidableStore;

export type RootState = ReturnType<typeof FormidableStore.getState>;

export type AppDispatch = typeof FormidableStore.dispatch;