const scrollIntoView = (actionButton, targetSection) =>
  actionButton?.addEventListener("click", () => {
    targetSection?.scrollIntoView({ behavior: "smooth" });
  });

export default scrollIntoView