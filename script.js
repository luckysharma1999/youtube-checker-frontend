async function checkChannel() {
  const input = document.getElementById("channelInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://youtube-name-checker.onrender.com/api/check-channel?name=${encodeURIComponent(
        input
      )}`
    );
    const data = await res.json();

    if (data.message) {
      resultsDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
      resultsDiv.innerHTML =
        "<h3>Top Matches:</h3><ul>" +
        data.matches
          .map(
            (c) =>
              `<li><strong>${c.title}</strong> – Subscribers: ${c.subscribers}</li>`
          )
          .join("") +
        "</ul>";
    }
  } catch (err) {
    resultsDiv.innerHTML = `<p>Error fetching data. Please try again.</p>`;
  }
}
