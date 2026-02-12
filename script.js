const message = `I know Valentine’s Day is tomorrow, not today.
But I didn’t want to wait for a date on the calendar to tell you how I feel.

I’m truly sorry for what happened the other day.
I’m sorry if my words, my silence, or my emotions made things heavier for you.
The last thing I ever want is to be the reason you feel tired or drained.

You deserve a love that feels safe, not exhausting.
And if I failed to give you that, even for a moment, I’m deeply sorry.

I may not always handle things perfectly,
but my feelings for you have always been real.
Even in misunderstandings.
Even in difficult moments.

Valentine’s Day is supposed to celebrate love,
but loving you isn’t something I only do once a year.
I love you in the quiet days, in the messy days, in the days we’re both overwhelmed.

So before tomorrow arrives,
I just want you to know 
I’m still here.
I still choose you.
And I still want us.`;

function showLetter() {
  const music = document.getElementById("bgMusic");
  music.currentTime = 217;
  music.volume = 0;
  
  music.play().then(() => {
    const fadeAudio = setInterval(() => {
      if (music.volume < 1.0) {
        music.volume = Math.min(music.volume + 0.05, 1.0);
      } else {
        clearInterval(fadeAudio);
      }
    }, 500);
  }).catch(error => console.log("Audio play failed:", error));
  
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".credits").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        if (message.charAt(i) === '\n') {
          typedText.innerHTML += '<br>';
        } else {
          typedText.innerHTML += message.charAt(i);
        }
        window.scrollTo(0, document.body.scrollHeight);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        setTimeout(() => {
          const flowerFrame = document.querySelector(".flower-frame");
          flowerFrame.style.opacity = 1;
          if (flowerFrame && flowerFrame.contentWindow) {
            flowerFrame.contentWindow.postMessage("start-bloom", "*");
          }
          
          window.scrollTo(0, document.body.scrollHeight);
        }, 500);
      }
    }

    typeWriter();
  }, 600);
}

function createParticles() {
  const bg = document.querySelector(".background");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");

    if (Math.random() < 0.6) {
      particle.classList.add("particle");
    } else {
      particle.classList.add("particle-heart");
    }
    
    const size = Math.random() * 20 + 5 + "px";
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particle.style.animationDelay = (Math.random() * 10 - 10) + "s"; 
    
    bg.appendChild(particle);
  }
}

createParticles();
