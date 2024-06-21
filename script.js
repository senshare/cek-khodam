document.getElementById("khodamForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const resultDiv = document.getElementById("result");

  // Logika sederhana untuk simulasi hasil cek khodam
  const khodamResults = [
    "Anda memiliki khodam yang kuat dan selalu melindungi Anda.",
    "Anda memiliki khodam yang lemah, tetapi tetap setia.",
    "Anda memiliki khodam yang bijaksana dan memberikan banyak nasihat.",
    "Anda memiliki khodam yang nakal dan suka menguji kesabaran Anda.",
  ];

  const randomIndex = Math.floor(Math.random() * khodamResults.length);
  const result = khodamResults[randomIndex];

  resultDiv.textContent = `Halo ${name}, ${result}`;
});
