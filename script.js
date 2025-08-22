// Simple search filter for places
document.getElementById("searchBox").addEventListener("keyup", function () {
  let query = this.value.toLowerCase();
  let cards = document.querySelectorAll(".place-card");

  cards.forEach(card => {
    let placeName = card.getAttribute("data-name").toLowerCase();
    if (placeName.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
