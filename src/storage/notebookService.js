import { db } from "./db";

export const NotebookService = {
  async create(name) {
    return await db.notebooks.add({
      name,
      createdAt: Date.now(),
    });
  },

  async rename(id, newName) {
    return await db.notebooks.update(id, { name: newName });
  },

  async delete(id) {
    // delete related entries first
    await db.entries.where("notebookId").equals(id).delete();
    return await db.notebooks.delete(id);
  },

  async list() {
    return await db.notebooks.orderBy("createdAt").toArray();
  },

  async setActive(id) {
    localStorage.setItem("activeNotebook", JSON.stringify(id));
  },

  async getActive() {
    const id = JSON.parse(localStorage.getItem("activeNotebook"));
    return id || null;
  }
};
