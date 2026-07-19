/* =========================================================
   MY LITTLE UNIVERSE — script.js
========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     LETTER CONTENT — kept exactly as written. Do not edit.
  --------------------------------------------------------- */
  const LETTERS = {
    1: {
      sector: "SECTOR 01 · BLUE MOON",
      title: "For My Favorite Person ❤️",
      theme: "moon",
      lines: [
        "Hi babe, if you are reading this you are probly feeling sad well you know you are allowed to be sad you know in my opinion it is also a great feeling you get to be quite you give yourself some time. but you know too much excess of one emotion can be very bad.",
        "1.do you know why the joke was sad,cause everyone was laughing at it",
        "2.Babe you know i didn't knew whole abc before you cause u were missing",
        "3.babe do you know why skeleton dont fight cause they dont have guts",
        "4.babe do ou know i thought your iq was low when you confessed to me",
        "5.babe most of the things in my life are long distance including my sleep",
        "6.babe you know if pooping was a sport you would be world champion",
        "7.babe life is short sleep your dreams",
        "8.Never let me go like you never let low elo go",
        "9.abbe i consider sleeping a hooby",
        "10.I have a kink for geting roasted by you"
      ]
    },
    2: {
      sector: "SECTOR 02 · MARS",
      title: "For The Times You're Mad At Me ❤️",
      theme: "mars",
      lines: [
        "If you are reading this you are probably mad at the moment.I know the cause its \"Jawad\" right hahahhaha knew it that bitch never changes who does he think h eis like omg what kind of brain does he ahve to do all these shit. honestly if anyone told me to take a guess on number of braincells he has i would not choose more than a single digit.wont you agree like omfg 1st he makes a mistake then he makes another mistake solving taht mistake then he whines to you again to help him what to do adn then he does 50 % of what you tell him..... like hhhhhhhhhhhhhhh broooo. if anyone choose to write a book on red flags he would be the experiment subject.But you know every mistake he does he regrets hurting you repeats mistakes sometimes but learns too gets bratty sometimes tbh your fault too for spoiling him too much. he loves you . he gets lonely without you .his health gets worse without you.he is your boyfriend dont leave him alone pwese....."
      ]
    },
    3: {
      sector: "SECTOR 03 · GALAXY",
      title: "For The Times You're Stressed 🌌",
      theme: "galaxy",
      lines: [
        "if you are reading this you are probly stressed and best way to make it better is to remember about some good memories sometimes we forget whats important our close ones as your boyfriend.let me fill you in some of the best memories of us",
        "1.remember the time when we played nuclear nightmare for the 1st time how i was scared to death it was one fo the best days in my life i ahd always dreamed of playing a horror game with my gf i remember going to sleep with a big smile on my face.",
        "2.another one of my favorite time with you was when i watched you play games it was a big thing for me it lifted my spirits watching dispatch residentevil valorant and so on it were tough times but we made it through it was amazing",
        "3.i remember when we talked about sex and so on took that rice test hahhahaha it was goofy tbh i was shocked to core and jealous too ohh my jealous to my very core but i thought ohh my babe trust me with everything i must be special. it also made me do those things to you.it was amazing nevertheless....",
        "ok babe i hope you feeling atleast 1 percent better now also i am always with you muaw."
      ]
    }
  };

  const NOTIF_MESSAGES = [
    "🌙 I'm proud of you.",
    "⭐ Drink some water.",
    "💜 You're doing amazing.",
    "✨ Take a deep breath.",
    "🌌 One step at a time.",
    "❤️ I believe in you.",
    "🪐 You are loved.",
    "🌠 Rest is productive too."
  ];

  /* ---------------------------------------------------------
     ELEMENT REFS
  --------------------------------------------------------- */
  const sky = document.getElementById("sky");
  const starsLayer = document.getElementById("starsLayer");
  const orbitField = document.getElementById("orbitField");
  const shootingLayer = document.getElementById("shootingLayer");
  const constellationLayer = document.getElementById("constellationLayer");

  const cursorMoon = document.getElementById("cursorMoon");
  const burstLayer = document.getElementById("burstLayer");

  const landing = document.getElementById("landing");
  const cardField = document.getElementById("cardField");

  const overlay = document.getElementById("overlay");
  const overlayBackdrop = document.getElementById("overlayBackdrop");
  const envelopeStage = document.getElementById("envelopeStage");
  const envelope = document.getElementById("envelope");
  const gatherStars = document.getElementById("gatherStars");

  const letterCardOpen = document.getElementById("letterCardOpen");
  const letterClose = document.getElementById("letterClose");
  const letterDeco = document.getElementById("letterDeco");
  const letterSector = document.getElementById("letterSector");
  const letterTitle = document.getElementById("letterTitle");
  const typedText = document.getElementById("typedText");
  const typeCursor = document.getElementById("typeCursor");
  const letterSignoff = document.getElementById("letterSignoff");

  const notifStack = document.getElementById("notifStack");

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const musicToggle = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const volumeSlider = document.getElementById("volumeSlider");
  const bgMusic = document.getElementById("bgMusic");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     STARFIELD
  --------------------------------------------------------- */
  function buildStars(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = (Math.random() * 2 + 1).toFixed(1);
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.setProperty("--dur", (Math.random() * 3 + 2).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      frag.appendChild(s);
    }
    starsLayer.appendChild(frag);
  }

  /* ---------------------------------------------------------
     ORBIT FIELD — planets, moon, astronauts, satellites
  --------------------------------------------------------- */
  function buildOrbitField() {
    const items = [
      { icon: "🪐", size: "3.6rem", top: "12%", left: "8%", fdur: "22s" },
      { icon: "🌍", size: "2.2rem", top: "68%", left: "6%", fdur: "18s" },
      { icon: "🧑‍🚀", size: "2.6rem", top: "22%", left: "86%", fdur: "26s" },
      { icon: "🛰️", size: "1.8rem", top: "78%", left: "88%", fdur: "16s" },
      { icon: "🌙", size: "2.4rem", top: "8%", left: "48%", fdur: "20s" },
      { icon: "☄️", size: "1.6rem", top: "50%", left: "94%", fdur: "24s" },
      { icon: "🪐", size: "2rem", top: "85%", left: "40%", fdur: "19s" },
      { icon: "🧑‍🚀", size: "1.8rem", top: "40%", left: "3%", fdur: "23s" }
    ];
    const frag = document.createDocumentFragment();
    items.forEach((it, i) => {
      const el = document.createElement("div");
      el.className = "orbit-item";
      el.textContent = it.icon;
      el.style.fontSize = it.size;
      el.style.top = it.top;
      el.style.left = it.left;
      el.style.setProperty("--fdur", it.fdur);
      el.style.animationDelay = (i * 0.7) + "s";
      frag.appendChild(el);
    });
    orbitField.appendChild(frag);
  }

  /* ---------------------------------------------------------
     CONSTELLATIONS (simple random linked star groups)
  --------------------------------------------------------- */
  function buildConstellations() {
    const groups = 5;
    const ns = "http://www.w3.org/2000/svg";
    for (let g = 0; g < groups; g++) {
      const baseX = Math.random() * 1300 + 100;
      const baseY = Math.random() * 700 + 80;
      const points = [];
      const n = 4 + Math.floor(Math.random() * 3);
      for (let i = 0; i < n; i++) {
        points.push({
          x: baseX + (Math.random() - 0.5) * 220,
          y: baseY + (Math.random() - 0.5) * 160
        });
      }
      for (let i = 0; i < points.length - 1; i++) {
        const line = document.createElementNS(ns, "line");
        line.setAttribute("x1", points[i].x);
        line.setAttribute("y1", points[i].y);
        line.setAttribute("x2", points[i + 1].x);
        line.setAttribute("y2", points[i + 1].y);
        constellationLayer.appendChild(line);
      }
      points.forEach((p) => {
        const circle = document.createElementNS(ns, "circle");
        circle.setAttribute("cx", p.x);
        circle.setAttribute("cy", p.y);
        circle.setAttribute("r", 2.2);
        constellationLayer.appendChild(circle);
      });
    }
  }

  /* ---------------------------------------------------------
     SHOOTING STARS — every 20-40s
  --------------------------------------------------------- */
  function spawnShootingStar() {
    const s = document.createElement("div");
    s.className = "shooting-star";
    s.style.top = Math.random() * 50 + "%";
    s.style.left = Math.random() * 60 + 30 + "%";
    shootingLayer.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }
  function scheduleShootingStar() {
    const delay = (Math.random() * 20 + 20) * 1000;
    setTimeout(() => {
      if (!reduceMotion) spawnShootingStar();
      scheduleShootingStar();
    }, delay);
  }

  /* ---------------------------------------------------------
     CUSTOM CURSOR
  --------------------------------------------------------- */
  function initCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
    });
    function loop() {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      cursorMoon.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener("click", (e) => {
      burstAt(e.clientX, e.clientY);
    });
  }

  function burstAt(x, y) {
    const glow = document.createElement("div");
    glow.className = "burst-glow";
    glow.style.left = x - 8 + "px";
    glow.style.top = y - 8 + "px";
    burstLayer.appendChild(glow);
    setTimeout(() => glow.remove(), 650);

    const emojis = ["✨", "⭐", "💫", "💜", "❤️"];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("div");
      item.className = "burst-item";
      item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const dist = 40 + Math.random() * 40;
      item.style.left = x + "px";
      item.style.top = y + "px";
      item.style.setProperty("--bx", Math.cos(angle) * dist + "px");
      item.style.setProperty("--by", Math.sin(angle) * dist + "px");
      burstLayer.appendChild(item);
      setTimeout(() => item.remove(), 850);
    }
  }

  /* ---------------------------------------------------------
     LETTER CARD SPARKLES (hover)
  --------------------------------------------------------- */
  function seedCardSparkles() {
    document.querySelectorAll(".letter-card__sparkles").forEach((holder) => {
      for (let i = 0; i < 6; i++) {
        const sp = document.createElement("span");
        sp.style.left = Math.random() * 90 + "%";
        sp.style.top = Math.random() * 90 + "%";
        sp.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
        holder.appendChild(sp);
      }
    });
  }

  /* ---------------------------------------------------------
     LETTER DECORATIONS PER THEME
  --------------------------------------------------------- */
  function buildLetterDeco(theme) {
    letterDeco.innerHTML = "";
    const frag = document.createDocumentFragment();

    if (theme === "moon") {
      const moon = document.createElement("div");
      moon.className = "deco-moon";
      frag.appendChild(moon);

      const cloudPositions = [
        { top: "20%", left: "-10%", w: "160px", h: "40px" },
        { top: "60%", left: "70%", w: "120px", h: "34px" }
      ];
      cloudPositions.forEach((c) => {
        const cl = document.createElement("div");
        cl.className = "deco-cloud";
        cl.style.top = c.top; cl.style.left = c.left;
        cl.style.width = c.w; cl.style.height = c.h;
        frag.appendChild(cl);
      });

      for (let i = 0; i < 10; i++) {
        const f = document.createElement("div");
        f.className = "deco-firefly";
        f.style.top = Math.random() * 90 + "%";
        f.style.left = Math.random() * 95 + "%";
        f.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
        frag.appendChild(f);
      }
    }

    if (theme === "mars") {
      const mars = document.createElement("div");
      mars.className = "deco-mars";
      frag.appendChild(mars);

      const rockets = [
        { top: "12%", left: "84%" },
        { top: "70%", left: "88%" }
      ];
      rockets.forEach((r) => {
        const rk = document.createElement("div");
        rk.className = "deco-rocket";
        rk.textContent = "🚀";
        rk.style.top = r.top; rk.style.left = r.left;
        frag.appendChild(rk);
      });

      for (let i = 0; i < 8; i++) {
        const h = document.createElement("div");
        h.className = "deco-heart-doodle";
        h.textContent = "❤️";
        h.style.top = Math.random() * 90 + "%";
        h.style.left = Math.random() * 92 + "%";
        h.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
        frag.appendChild(h);
      }
    }

    if (theme === "galaxy") {
      const nebulaColors = ["var(--soft-purple)", "var(--pink)", "var(--blue-glow)"];
      const nebulaSpots = [
        { top: "-6%", left: "70%", size: "220px" },
        { top: "70%", left: "-8%", size: "200px" }
      ];
      nebulaSpots.forEach((n, i) => {
        const nb = document.createElement("div");
        nb.className = "deco-nebula-mini";
        nb.style.top = n.top; nb.style.left = n.left;
        nb.style.width = n.size; nb.style.height = n.size;
        nb.style.background = nebulaColors[i % nebulaColors.length];
        frag.appendChild(nb);
      });

      const spiral = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      spiral.setAttribute("width", "140");
      spiral.setAttribute("height", "140");
      spiral.setAttribute("viewBox", "0 0 140 140");
      spiral.classList.add("deco-spiral");
      spiral.style.top = "10%";
      spiral.style.right = "-6%";
      let path = "";
      for (let a = 0; a < 720; a += 8) {
        const rad = (a * Math.PI) / 180;
        const r = a * 0.08;
        const x = 70 + r * Math.cos(rad);
        const y = 70 + r * Math.sin(rad);
        path += (a === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
      }
      const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("d", path);
      pathEl.setAttribute("stroke", "var(--lavender)");
      pathEl.setAttribute("stroke-width", "1.4");
      pathEl.setAttribute("fill", "none");
      spiral.appendChild(pathEl);
      frag.appendChild(spiral);

      for (let i = 0; i < 14; i++) {
        const st = document.createElement("div");
        st.className = "deco-star-mini";
        const size = (Math.random() * 2 + 1).toFixed(1);
        st.style.width = size + "px";
        st.style.height = size + "px";
        st.style.top = Math.random() * 95 + "%";
        st.style.left = Math.random() * 95 + "%";
        st.style.background = Math.random() > 0.5 ? "var(--lavender)" : "#fff";
        st.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
        frag.appendChild(st);
      }
    }

    letterDeco.appendChild(frag);
  }

  /* ---------------------------------------------------------
     ENVELOPE + LETTER FLOW
  --------------------------------------------------------- */
  let typeTimer = null;

  function openLetter(id, originRect) {
    const data = LETTERS[id];
    if (!data) return;

    landing.classList.add("is-blurred");
    overlay.classList.add("is-active");

    // position envelope at the card's origin, then fly to center
    envelope.classList.remove("is-open");
    envelopeStage.classList.remove("is-flying");
    const originX = originRect.left + originRect.width / 2;
    const originY = originRect.top + originRect.height / 2;
    envelopeStage.style.left = originX + "px";
    envelopeStage.style.top = originY + "px";

    letterCardOpen.classList.remove("is-visible");
    typedText.textContent = "";
    typeCursor.style.display = "inline";
    letterSignoff.classList.remove("is-visible");

    // force reflow so the transition kicks in from the origin position
    void envelopeStage.offsetWidth;

    requestAnimationFrame(() => {
      envelopeStage.style.left = "50%";
      envelopeStage.style.top = "50%";
      envelopeStage.classList.add("is-flying");
    });

    setTimeout(() => {
      envelope.classList.add("is-open");
      spawnGatherStars();
    }, 950);

    setTimeout(() => {
      letterSector.textContent = data.sector;
      letterTitle.textContent = data.title;
      buildLetterDeco(data.theme);
      letterCardOpen.classList.add("is-visible");
      typeLetter(data.lines);
    }, 1500);
  }

  function spawnGatherStars() {
    gatherStars.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 16; i++) {
      const s = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 80;
      s.style.setProperty("--gx", Math.cos(angle) * dist + "px");
      s.style.setProperty("--gy", Math.sin(angle) * dist + "px");
      s.style.left = "50%";
      s.style.top = "50%";
      s.style.animationDelay = (Math.random() * 0.3).toFixed(2) + "s";
      frag.appendChild(s);
    }
    gatherStars.appendChild(frag);
  }

  function typeLetter(lines) {
    const fullText = lines.join("\n\n");
    let i = 0;
    clearTimeout(typeTimer);
    typedText.textContent = "";

    function step() {
      if (i <= fullText.length) {
        typedText.textContent = fullText.slice(0, i);
        i++;
        const ch = fullText[i - 1];
        const delay = ch === "\n" ? 120 : reduceMotion ? 0 : 14 + Math.random() * 18;
        typeTimer = setTimeout(step, delay);
      } else {
        typeCursor.style.display = "none";
        letterSignoff.classList.add("is-visible");
      }
    }

    if (reduceMotion) {
      typedText.textContent = fullText;
      typeCursor.style.display = "none";
      letterSignoff.classList.add("is-visible");
    } else {
      step();
    }
  }

  function closeLetter() {
    overlay.classList.remove("is-active");
    landing.classList.remove("is-blurred");
    envelopeStage.classList.remove("is-flying");
    envelope.classList.remove("is-open");
    letterCardOpen.classList.remove("is-visible");
    clearTimeout(typeTimer);
  }

  /* ---------------------------------------------------------
     NOTIFICATIONS
  --------------------------------------------------------- */
  function spawnNotif() {
    const msg = NOTIF_MESSAGES[Math.floor(Math.random() * NOTIF_MESSAGES.length)];
    const el = document.createElement("div");
    el.className = "notif";
    el.textContent = msg;
    notifStack.appendChild(el);
    setTimeout(() => el.remove(), 5200);
  }
  function scheduleNotif() {
    const delay = (Math.random() * 20 + 20) * 1000;
    setTimeout(() => {
      spawnNotif();
      scheduleNotif();
    }, delay);
  }

  /* ---------------------------------------------------------
     THEME TOGGLE
  --------------------------------------------------------- */
  function initTheme() {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      themeIcon.textContent = isLight ? "☀" : "☾";
    });
  }

  /* ---------------------------------------------------------
     MUSIC
  --------------------------------------------------------- */
  function initMusic() {
    bgMusic.volume = volumeSlider.value / 100;
    let playing = false;

    musicToggle.addEventListener("click", () => {
      if (!playing) {
        bgMusic.play().then(() => {
          playing = true;
          musicIcon.textContent = "❚❚";
        }).catch(() => {
          spawnNotifCustom("🎵 add a music.mp3 file to enable sound");
        });
      } else {
        bgMusic.pause();
        playing = false;
        musicIcon.textContent = "♪";
      }
    });

    volumeSlider.addEventListener("input", () => {
      bgMusic.volume = volumeSlider.value / 100;
    });
  }

  function spawnNotifCustom(msg) {
    const el = document.createElement("div");
    el.className = "notif";
    el.textContent = msg;
    notifStack.appendChild(el);
    setTimeout(() => el.remove(), 5200);
  }

  /* ---------------------------------------------------------
     EVENT WIRING
  --------------------------------------------------------- */
  function initCards() {
    document.querySelectorAll(".letter-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-letter");
        const rect = card.getBoundingClientRect();
        openLetter(id, rect);
      });
    });
    letterClose.addEventListener("click", closeLetter);
    overlayBackdrop.addEventListener("click", closeLetter);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLetter();
    });
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */
  function init() {
    buildStars(140);
    buildOrbitField();
    buildConstellations();
    seedCardSparkles();
    initCursor();
    initCards();
    initTheme();
    initMusic();
    scheduleShootingStar();
    scheduleNotif();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
