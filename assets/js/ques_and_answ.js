document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      const panels = document.querySelectorAll(".panel");
      const buttons = document.querySelectorAll(".accordion");

      // Collapse all
      panels.forEach((p) => p.style.display = "none");
      buttons.forEach((b) => b.classList.remove("active"));

      // Expand selected if not already active
      if (!isActive) {
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
      }
    });
  });
});
