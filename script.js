const aiBtn = document.getElementById("aiBtn");
const solutionsBtn = document.getElementById("solutionsBtn");

const aiSection = document.getElementById("aiSection");
const solutionsSection = document.getElementById("solutionsSection");
const backdrop = document.getElementById("menuBackdrop");

/* =======================
   TOGGLE MEGA MENUS
======================= */

aiBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = !aiSection.classList.contains("hidden");

  aiSection.classList.toggle("hidden", isOpen);
  solutionsSection.classList.add("hidden");

  backdrop.classList.toggle("hidden", isOpen);
});

solutionsBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = !solutionsSection.classList.contains("hidden");

  solutionsSection.classList.toggle("hidden", isOpen);
  aiSection.classList.add("hidden");

  backdrop.classList.toggle("hidden", isOpen);
});

/* =======================
   CLOSE ON OUTSIDE CLICK
======================= */

document.addEventListener("click", () => {
  aiSection.classList.add("hidden");
  solutionsSection.classList.add("hidden");
  backdrop.classList.add("hidden");
});

backdrop.addEventListener("click", () => {
  aiSection.classList.add("hidden");
  solutionsSection.classList.add("hidden");
  backdrop.classList.add("hidden");
});

aiSection.addEventListener("click", e => e.stopPropagation());
solutionsSection.addEventListener("click", e => e.stopPropagation());

/* =======================
   AI SIDEBAR SWITCHING
======================= */

/* =======================
   AI SIDEBAR SWITCHING (GRID + POWER DIALER)
======================= */

document.querySelectorAll("[data-ai]").forEach(item => {
  item.addEventListener("click", () => {

    // Sidebar active state
    document
      .querySelectorAll("#aiSection .left-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    // Hide all grid contents
    document
      .querySelectorAll("#aiSection .content-grid")
      .forEach(c => c.classList.remove("active"));

    // Hide power dialer explicitly
    const powerDialer = document.getElementById("powerDialer");
    powerDialer?.classList.remove("active");

    // Show selected content
    const targetId = item.dataset.ai;
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.classList.add("active");
    }
  });
});


/* =======================
   SOLUTIONS SIDEBAR SWITCHING
======================= */

document.querySelectorAll("[data-sol]").forEach(item => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll("#solutionsSection .left-item")
      .forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    document
      .querySelectorAll("#solutionsSection .content-grid")
      .forEach(c => c.classList.remove("active"));

    document
      .getElementById(item.dataset.sol)
      ?.classList.add("active");
  });
});
