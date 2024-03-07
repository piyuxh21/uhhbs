document.querySelector(".navbar-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower limit for the increment
    const increment = target / 200;

    // Check if target is reached
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// login page
$(document).ready(function () {
  $("#login-tab-link").click(function (e) {
    e.preventDefault();
    $("#login-tab").show();
    $("#signup-tab").hide();
  });

  $("#signup-tab-link").click(function (e) {
    e.preventDefault();
    $("#login-tab").hide();
    $("#signup-tab").show();
  });

  $("#auth-form").submit(function (e) {
    e.preventDefault();
    // Add your authentication logic here
    if ($("#login-tab").is(":visible")) {
      alert("Login form submitted");
    } else {
      alert("Sign up form submitted");
    }
  });
});
