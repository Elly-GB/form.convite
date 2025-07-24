const checkbox = document.getElementById("checkone")
const label = checkbox.closest("label")

// One

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    label.classList.add("checked")
  } else {
    label.classList.remove("checked")
  }
})

// Two

const checkboxTwo = document.getElementById("checktwo")
const labelTwo = checkboxTwo.closest("label")

checkboxTwo.addEventListener("change", () => {
  if (checkboxTwo.checked) {
    labelTwo.classList.add("checked")
  } else {
    labelTwo.classList.remove("checked")
  }
})

// Three

const checkboxThree = document.getElementById("checkthree")
const labelThree = checkboxThree.closest("label")

checkboxThree.addEventListener("change", () => {
  if (checkboxThree.checked) {
    labelThree.classList.add("checked")
  } else {
    labelThree.classList.remove("checked")
  }
})