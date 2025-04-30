function revealInfo() {
    document.getElementById("example").classList.remove("hidden");
  }
  
  function showAdvice() {
    const checkbox = document.getElementById("ageCheck");
    const advice = document.getElementById("advice");
    advice.classList.toggle("hidden", !checkbox.checked);
  }
  