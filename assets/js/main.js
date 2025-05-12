const names = [
  "David", "Alice", "Charlie", "Bob", "Emma", "Frank", "Grace", "Helen",
  "Ivy", "Jack", "Karen", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quincy",
  "Rachel", "Sam", "Tina", "Uma", "Victor", "Wendy", "Xavier", "Yara", "Zane"
];
renderNameList();
// Timer Script
      let startTime;
      const contactForm = document.getElementById("contactForm");
      const timerDisplay = document.getElementById("timer");
      const confirmation = document.getElementById("confirmation");

      contactForm.addEventListener("focusin", () => {
        if (!startTime) {
          startTime = Date.now();
          updateTimer();
        }
      });

      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();  

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        confirmation.classList.remove("hidden");
        confirmation.textContent = `Thank you! Your message was submitted. You spent ${timeSpent} seconds.`;
        contactForm.reset();
        startTime = null;
        timerDisplay.textContent = "Time spent: 0 seconds";
       
        console.log(name,email);
        names.push(name.trim());
        console.log(names);
        renderNameList();
      });

      function updateTimer() {
        if (!startTime) return;
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        timerDisplay.textContent = `Time spent: ${elapsed} seconds`;
        requestAnimationFrame(updateTimer);
      }

      // Rating Script
      const ratingForm = document.getElementById("ratingForm");
      const ratingMessage = document.getElementById("ratingMessage");

      ratingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const selected = ratingForm.star.value;
        ratingMessage.textContent = selected
          ? `Thank you for rating us ${selected} star(s)!`
          : "Please select a rating.";
      });
      // To handle Hamburger type for mobiles
      function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}



// Render the list into the DOM
function renderNameList() {
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

// Sort the array and re-render the list
function sortNames() {
  const sortOrder = document.getElementById("sortOrder").value;
  names.sort((a, b) =>
    sortOrder === "asc" ? a.localeCompare(b) : b.localeCompare(a)
  );
  renderNameList();
}

// Render once DOM is loaded
document.addEventListener("DOMContentLoaded", renderNameList);