export const PreferenceService = {
  setActiveNotebook(id) {
    localStorage.setItem("activeNotebook", JSON.stringify(id));
  },

  getActiveNotebook() {
    return JSON.parse(localStorage.getItem("activeNotebook"));
  },

  clearActiveNotebook() {
    localStorage.removeItem("activeNotebook");
  }
};
