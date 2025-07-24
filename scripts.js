const checkbox = document.getElementById("checkone")
const label = checkbox.closest("label")

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    label.classList.add("checked")
  } else {
    label.classList.remove("checked")
  }
})
