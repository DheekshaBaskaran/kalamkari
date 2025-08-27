// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = document.querySelector(".navbar").offsetHeight
      const elementPosition = element.offsetTop - navHeight
  
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }
  
  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })
  
  // Gallery item hover effects (for better mobile experience)
  document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Toggle overlay on mobile
        if (window.innerWidth <= 768) {
          const overlay = this.querySelector(".gallery-overlay")
          overlay.style.transform = overlay.style.transform === "translateY(0px)" ? "translateY(100%)" : "translateY(0px)"
        }
      })
    })
  })