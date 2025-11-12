gsap.registerPlugin(TextPlugin);

document.addEventListener("DOMContentLoaded", () => {
  const animatedTextElement = document.querySelector(".animated-text");
  const cursorElement = document.querySelector(".cursor");
  const words = [
    "Sustentabilidade",
    "Inovação",
    "Crescimento responsável",
    "O amanhã",
    "Impacto real",
  ];

  const typeSpeed = 0.1;
  const eraseSpeed = 0.05;
  const pauseBeforeErase = 2.5;
  const pauseBeforeType = 0.5;

  let masterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  words.forEach((word) => {
    let typeTimeline = gsap.timeline({
      onStart: () => {
        cursorElement.classList.add("is-typing");
        animatedTextElement.textContent = "";
      },
      onComplete: () => {
        cursorElement.classList.remove("is-typing");
      },
    });

    for (let i = 0; i < word.length; i++) {
      typeTimeline.to(animatedTextElement, {
        duration: typeSpeed,
        text: word.substring(0, i + 1),
        ease: "none",
      });
    }

    typeTimeline.to({}, { duration: pauseBeforeErase });

    // Apagamento
    let eraseTimeline = gsap.timeline({
      onStart: () => {
        cursorElement.classList.add("is-typing");
      },
      onComplete: () => {
        cursorElement.classList.remove("is-typing");
      },
    });

    for (let i = word.length; i >= 0; i--) {
      eraseTimeline.to(animatedTextElement, {
        duration: eraseSpeed,
        text: word.substring(0, i),
        ease: "none",
      });
    }

    eraseTimeline.to({}, { duration: pauseBeforeType });

    masterTimeline.add(typeTimeline).add(eraseTimeline);
  });
});
