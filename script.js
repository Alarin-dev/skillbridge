// Contributor interest form — client-side only.
// No data is sent to a server. This is a prototype submission flow.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("interest-form");
  if (!form) return; // not on the contribute page

  const errorSummary = document.getElementById("form-error-summary");
  const confirmation = document.getElementById("confirmation");
  const confirmationName = document.getElementById("confirmation-name");

  const urlPattern = /^(https?:\/\/)?[^\s]+\.[^\s]{2,}$/i;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "-error");
    if (message) {
      field.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
    } else {
      field.removeAttribute("aria-invalid");
      errorEl.textContent = "";
    }
  }

  function validate() {
    let firstInvalidField = null;
    let hasErrors = false;

    function check(fieldId, condition, message) {
      if (!condition) {
        setFieldError(fieldId, message);
        hasErrors = true;
        if (!firstInvalidField) {
          firstInvalidField = document.getElementById(fieldId);
        }
      } else {
        setFieldError(fieldId, "");
      }
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const role = document.getElementById("role").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value.trim();
    const availability = document.getElementById("availability").value;
    const why = document.getElementById("why").value.trim();
    const portfolio = document.getElementById("portfolio").value.trim();

    check("name", name.length >= 2, "Please enter a display name (at least 2 characters).");
    check("email", emailPattern.test(email), "Please enter a valid email address.");
    check("role", role !== "", "Please select a role or skill area.");
    check("experience", experience !== "", "Please select your current experience level.");
    check("skills", skills.length >= 5, "Please share at least a few skills or interests.");
    check("availability", availability !== "", "Please select your weekly availability.");
    check("why", why.length >= 10, "Please tell us a bit more about why you want to join.");

    if (portfolio !== "") {
      check("portfolio", urlPattern.test(portfolio), "That doesn't look like a valid link. Include a domain, e.g. example.com.");
    } else {
      setFieldError("portfolio", "");
    }

    if (hasErrors) {
      errorSummary.hidden = false;
      if (firstInvalidField) firstInvalidField.focus();
    } else {
      errorSummary.hidden = true;
    }

    return !hasErrors;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validate()) return;

    const name = document.getElementById("name").value.trim();
    confirmationName.textContent = name;

    form.hidden = true;
    errorSummary.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  });
});

// Project submission form — client-side only, separate from the contributor form above.
// No data is sent to a server. This is a prototype submission flow.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("project-form");
  if (!form) return; // not on the submit-project page

  const errorSummary = document.getElementById("project-form-error-summary");
  const confirmation = document.getElementById("project-confirmation");
  const confirmationName = document.getElementById("project-confirmation-name");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "-error");
    if (message) {
      field.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
    } else {
      field.removeAttribute("aria-invalid");
      errorEl.textContent = "";
    }
  }

  function validate() {
    let firstInvalidField = null;
    let hasErrors = false;

    function check(fieldId, condition, message) {
      if (!condition) {
        setFieldError(fieldId, message);
        hasErrors = true;
        if (!firstInvalidField) {
          firstInvalidField = document.getElementById(fieldId);
        }
      } else {
        setFieldError(fieldId, "");
      }
    }

    const name = document.getElementById("p-name").value.trim();
    const email = document.getElementById("p-email").value.trim();
    const projectName = document.getElementById("p-project-name").value.trim();
    const description = document.getElementById("p-description").value.trim();
    const stage = document.getElementById("p-stage").value;
    const goal = document.getElementById("p-goal").value.trim();
    const roles = document.getElementById("p-roles").value.trim();
    const tasks = document.getElementById("p-tasks").value.trim();
    const time = document.getElementById("p-time").value;
    const value = document.getElementById("p-value").value.trim();
    const respectful = document.getElementById("p-respectful").checked;

    check("p-name", name.length >= 2, "Please enter your name (at least 2 characters).");
    check("p-email", emailPattern.test(email), "Please enter a valid email address.");
    check("p-project-name", projectName.length >= 2, "Please enter the project name.");
    check("p-description", description.length >= 10, "Please describe the project (at least 10 characters).");
    check("p-stage", stage !== "", "Please select the project's current stage.");
    check("p-goal", goal.length >= 10, "Please describe what the project is trying to achieve.");
    check("p-roles", roles.length >= 3, "Please list at least one contributor role needed.");
    check("p-tasks", tasks.length >= 10, "Please share at least one example task.");
    check("p-time", time !== "", "Please select the expected weekly time commitment.");
    check("p-value", value.length >= 10, "Please explain how contributors will gain useful experience and feedback.");
    check("p-respectful", respectful === true, "Please confirm you can support a respectful, collaborative environment.");

    if (hasErrors) {
      errorSummary.hidden = false;
      if (firstInvalidField) firstInvalidField.focus();
    } else {
      errorSummary.hidden = true;
    }

    return !hasErrors;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validate()) return;

    const name = document.getElementById("p-name").value.trim();
    confirmationName.textContent = name;

    form.hidden = true;
    errorSummary.hidden = true;
    confirmation.hidden = false;
    confirmation.focus();
  });
});
