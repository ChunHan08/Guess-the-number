const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkButton.addEventListener("click", () => {

  chance--;

  let inputValue = input.value;

  if (inputValue == randomNum) {
    [guess.textContent, 
     input.disabled] = ["Congratulations!
      You guessed the correct number.", true];
    [checkButton.textContent, 
      guess.style.color] = 
      [ "Replay", "#333"];
  } 
  else if (input > randomNum && inputValue < 100) {

    [guess.textContent, 
     remainChances.textContent] = 
      ["Your guess is too HIGH HAHAHA", 
      chance];
    guess.style.color = "#333";
  } 
  
  else if (input > randomNum && inputValue > 0) {
             [guess.textContent, 
              remainChances.textContent] = 
               ["Your guess is
               too LOWWW HAHAHA", chance];
             guess.style.color = "#333";
  }
    
  else 
  {
      [guess.textContent, 
       remainChances.textContent] = 
        ["Your number is 
        invalid", chance];
      guess.style.color = "DEO6111";
    }

    
  if (chance == 0) {

      [checkButton.textContent, 
       input.disabled, inputValue] = ["Replay"
        , true, ""];
      [guess.textContent, 
       guess.style.color] = ["Game Over!!!!!", "#333"];
    }
    
    
  if (chance < 0) {
      window.location.reload();
    }
  
});