// noinspection JSVoidFunctionReturnValueUsed

const body = document.body
body.append("Hello world! 1.0")
const div = document.createElement("div")
// div.innerText = "Hello world! 2.0"
div.textContent = "Hello world! 3.0"
div.innerHTML = "<strong>Hello world! 4.0</strong>"
body.append(div)
const strong =  document.createElement("strong")
strong.innerText = "Hello world! 5.0"
body.append(strong)

const div2 = document.querySelector("div")
console.log(div2.textContent)
console.log(div2.innerText)
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")
spanHi.remove()
// div2.removeChild(spanHi)
console.log(spanBye.getAttribute("id"))
console.log(spanBye.getAttribute("title"))
console.log(spanBye.id)
console.log(spanBye.title)
// noinspection JSVoidFunctionReturnValueUsed
// console.log(spanBye.setAttribute("id", "cya"))
spanBye.id = "cya"
console.log(spanBye.id)
console.log(spanBye.removeAttribute("title"))
console.log(spanBye.dataset)
console.log(spanBye.dataset.longerName)
spanBye.dataset.newName = "Hi there!"
console.log(spanBye.dataset.newName)
spanBye.classList.add("new-class")
spanBye.classList.remove("hi2")
spanBye.classList.toggle("hi3") // add if not present, remove if present
// spanBye.classList.toggle("hi2", true) | false - automatically removes, true - automatically adds
spanBye.style.color = "red"
spanBye.style.backgroundColor = "yellow"