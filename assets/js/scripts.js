const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionitem = header.parentElement
    const accordionActive = accordionitem.classList.contains("active")

    accordionActive ? accordionitem.classList.remove("active") : accordionitem.classList.add("active")
  })
})


const menuLinks = document.querySelectorAll(".menu__link")

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
menuLinks.forEach(i => i.classList.remove("active"))
item.classList.add("active")
  })
})