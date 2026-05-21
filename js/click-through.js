  const facts = [
    "I won a design competition for dance crew finalists of World of Dance and Americas best dance crew.",
    "I thrifted in over 30 stores in Japan to find the perfect jacket.",
    "I've become a huge baseball fan recently thanks to Shohei Ohtani.",
    "I have modelled for a streetwear clothing brand.",
    "A cover of a magazine I designed got distributed to every high school across New Zealand.",
    "I know how to sew.",
    "I love watching competitive Street Fighter.",
    "I almost dunked (once).",
  ];

  let current = 0;
  const factEl = document.getElementById("factText");
  const dotsEl = document.getElementById("dots");

  function buildDots() {
    dotsEl.innerHTML = "";
    facts.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === current ? " active" : "");
      dotsEl.appendChild(d);
    });
  }

  function nextFact() {
    factEl.style.opacity = "0";
    setTimeout(() => {
      current = (current + 1) % facts.length;
      factEl.textContent = facts[current];
      factEl.style.opacity = "1";
      buildDots();
    }, 300);
  }

  buildDots();