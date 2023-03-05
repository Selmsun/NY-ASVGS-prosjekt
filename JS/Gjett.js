//funksjon & if else, Søvnkalkulator
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  const gjett = document.getElementById("gjett").value;
  const riktigTall = 8
  if (gjett == riktigTall) {
    document.getElementById("result").innerHTML = "du har fått " + gjett + " timer søvn,  " + riktigTall + " " + "timer søvn er bra!";
  } else {
    document.getElementById("result").innerHTML = "du må sova meir!" + gjett + " Du må få " + riktigTall + " " + "timer søvn!";
  }
});