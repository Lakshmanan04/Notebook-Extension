import { db } from "./db";

export const EntryService = {
  async add({ notebookId, type, content, url = null, note = null }) {
    return await db.entries.add({
      notebookId,
      type,
      content,
      url,
      note,
      createdAt: Date.now(),
    });
  },

  async list(notebookId) {
    return await db.entries
      .where("notebookId")
      .equals(notebookId)
      .reverse()
      .sortBy("createdAt");
  },

  async delete(id) {
    return await db.entries.delete(id);
  },

  async search(notebookId, query) {
    const entries = await this.list(notebookId);

    return entries.filter((e) =>
      (e.content + " " + (e.note || ""))
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  },
};
