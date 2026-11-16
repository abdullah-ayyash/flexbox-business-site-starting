// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
const setMenu = (open) => {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
};
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Contact form: validates, then posts to data-endpoint if one is set
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "";
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = "Please fill in every field with a valid email address.";
    status.className = "error";
    return;
  }
  const endpoint = form.dataset.endpoint;
  if (!endpoint) {
    status.textContent = "Demo form: validation works, but nothing was sent.";
    return;
  }
  try {
    const res = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.textContent = "Thanks! Your message has been sent.";
  } catch {
    status.textContent = "Sorry, something went wrong. Please try again.";
    status.className = "error";
  }
});
