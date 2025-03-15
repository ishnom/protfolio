// Particles.js configuration
document.addEventListener("DOMContentLoaded", () => {
  // Check if particlesJS is defined (it should be included in your HTML)
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ff3e3e",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ff3e3e",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  } else {
    console.warn("particlesJS not loaded! Make sure you have included the particles.js library in your HTML.")
  }
})
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle for mobile
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  }

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Portfolio filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Animate progress bars when in viewport
  const progressBars = document.querySelectorAll(".progress")
  const animateProgress = () => {
    progressBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect()
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0

      if (isInViewport) {
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      }
    })
  }

  // Run once on page load
  animateProgress()

  // Run on scroll
  window.addEventListener("scroll", animateProgress)

  // Scroll animations
  const animateOnScroll = () => {
    // Animate skill cards
    const skillCards = document.querySelectorAll(".skill-card")
    skillCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const isInViewport = rect.top <= window.innerHeight * 0.8

      if (isInViewport) {
        setTimeout(() => {
          card.classList.add("animate")
        }, index * 100) // Staggered animation
      }
    })

    // Animate portfolio items
    const portfolioItemsScroll = document.querySelectorAll(".portfolio-item")
    portfolioItemsScroll.forEach((item, index) => {
      const rect = item.getBoundingClientRect()
      const isInViewport = rect.top <= window.innerHeight * 0.8

      if (isInViewport) {
        setTimeout(() => {
          item.classList.add("animate")
        }, index * 100) // Staggered animation
      }
    })

    // Animate timeline items
    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect()
      const isInViewport = rect.top <= window.innerHeight * 0.8

      if (isInViewport) {
        setTimeout(() => {
          if (index % 2 === 0) {
            item.querySelector(".timeline-content").classList.add("animate-slide-right")
          } else {
            item.querySelector(".timeline-content").classList.add("animate-slide-left")
          }
        }, index * 200)
      }
    })
  }

  // Run animations on scroll
  window.addEventListener("scroll", animateOnScroll)
  // Run once on page load
  setTimeout(animateOnScroll, 500)

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission handling
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // Here you would typically send the form data to a server
      // For this demo, we'll just show a success message
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
    })
  }

  // Animated text typing effect
  const animateText = () => {
    const titles = document.querySelectorAll(".section-title")
    titles.forEach((title) => {
      const rect = title.getBoundingClientRect()
      const isInViewport = rect.top <= window.innerHeight * 0.8

      if (isInViewport && !title.classList.contains("animated")) {
        title.classList.add("animated")
        title.style.opacity = "0"

        const text = title.textContent
        title.textContent = ""
        title.style.opacity = "1"

        let i = 0
        const typeWriter = () => {
          if (i < text.length) {
            title.textContent += text.charAt(i)
            i++
            setTimeout(typeWriter, 100)
          }
        }

        typeWriter()
      }
    })
  }

  // Run text animation on scroll
  window.addEventListener("scroll", animateText)
  // Run once on page load
  setTimeout(animateText, 1000)

  // Image hover effects
  const portfolioImages = document.querySelectorAll(".portfolio-img")
  portfolioImages.forEach((img) => {
    img.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      this.style.transform = `scale(1.05) perspective(1000px) rotateX(${(y - 0.5) * 10}deg) rotateY(${(x - 0.5) * -10}deg)`
    })

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) perspective(1000px) rotateX(0) rotateY(0)"
    })
  })
})

