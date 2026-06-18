const header = document.querySelector(".topbar");

const updateHeader = () => {
  header.dataset.elevated = window.scrollY > 18 ? "true" : "false";
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
