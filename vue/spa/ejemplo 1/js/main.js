  let nav = document.querySelectorAll('a[href^="#"]');
  nav.forEach(i => i.addEventListener("click", cambiarPagina))

  function cambiarPagina(evento) {
      evento.preventDefault()
      let to = evento.target.hash
      document.querySelector(".active").classList.remove("active")
      document.querySelector(to).classList.add("active")
  }