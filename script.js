// ========================================
// CURSOR SPARKLES
// ========================================

document.addEventListener("mousemove", (e) => {

  const sparkle = document.createElement("div");

  sparkle.classList.add("sparkle");

  sparkle.style.left = e.pageX + "px";

  sparkle.style.top = e.pageY + "px";

  document.body.appendChild(sparkle);



  setTimeout(() => {

    sparkle.remove();

  }, 500);

});



// ========================================
// FLOATING HEARTS
// ========================================

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "♡";



  heart.style.left =
  Math.random() * window.innerWidth + "px";



  heart.style.top =
  Math.random() * window.innerHeight + "px";



  heart.style.animationDuration =
  (Math.random() * 3 + 2) + "s";



  document.body.appendChild(heart);



  setTimeout(() => {

    heart.remove();

  }, 5000);

}



setInterval(createHeart, 2000);



// ========================================
// QUEST CHECK EFFECT
// ========================================

const quests =
document.querySelectorAll(".quest-panel li");



quests.forEach((quest) => {

  quest.addEventListener("click", () => {

    if(quest.innerHTML.includes("☐")){

      quest.innerHTML =
      quest.innerHTML.replace("☐", "☑");

    }

    else{

      quest.innerHTML =
      quest.innerHTML.replace("☑", "☐");

    }

  });

});