import { StateCreator } from "zustand";
import { TodoItem } from "../../components/TodoCard";

export type AppSlice = {
  todo_list: TodoItem[];
  progress_list: TodoItem[];
  testing_list: TodoItem[];
  done_list: TodoItem[];
  setList: (
    key: "todo_list" | "progress_list" | "testing_list" | "done_list",
    items: TodoItem[]
  ) => void;
};

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
  todo_list: [],
  progress_list: [],
  testing_list: [],
  done_list: [],
  setList: (key, items) => set(() => ({ [key]: items })),
});
