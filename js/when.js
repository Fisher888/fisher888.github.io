// Adds "in N classes" next to a date. Reads the in-person class days from #classdays. Without JavaScript the date still shows.
(function () {
  var holder = document.getElementById("classdays");
  if (!holder) return;
  var days;
  try { days = JSON.parse(holder.textContent); } catch (e) { return; }
  var now = new Date();
  var today = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
  document.querySelectorAll("[data-when]").forEach(function (el) {
    var target = el.getAttribute("data-when");
    if (target < today) return;
    if (target === today) { el.textContent = " · today"; return; }
    var n = days.filter(function (d) { return d > today && d <= target; }).length;
    if (n > 0) el.textContent = " · " + (n === 1 ? "next class" : "in " + n + " classes");
  });
})();
