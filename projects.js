// Static example project data — no backend, no database.
// Replace or extend this array as real projects are added.
const PROJECTS = [
  {
    name: "SkillBridge",
    description: "The platform itself. Help build the site that helps beginners get real experience — this is project #1.",
    stage: "MVP / Pre-launch",
    roles: ["Frontend Developer", "UI/UX Designer", "Community Manager"],
    tasks: [
      "Build and refine landing page sections",
      "Design the contributor onboarding flow",
      "Draft outreach messaging for early contributors"
    ],
    timeCommitment: "3–5 hrs/week",
    status: "Actively recruiting"
  },
  {
    name: "Fictional Example: Recipe Sharing App",
    description: "Example project — a community recipe-sharing app for home cooks, still in early planning.",
    stage: "Idea / Early planning",
    roles: ["Backend Developer", "Copywriter"],
    tasks: [
      "Sketch the database schema for recipes and users",
      "Write onboarding copy for new users",
      "Research similar apps for feature ideas"
    ],
    timeCommitment: "2–4 hrs/week",
    status: "Actively recruiting"
  },
  {
    name: "Fictional Example: Local Volunteer Finder",
    description: "Example project — a simple directory connecting volunteers with local nonprofits.",
    stage: "Prototype",
    roles: ["Frontend Developer", "Marketer"],
    tasks: [
      "Improve the search/filter interface",
      "Create a simple social media launch plan",
      "Test the prototype and report bugs"
    ],
    timeCommitment: "4–6 hrs/week",
    status: "Paused"
  }
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = PROJECTS.map(function (p) {
    return (
      '<article class="project-card">' +
        '<div class="project-card-header">' +
          "<h3>" + p.name + "</h3>" +
          '<span class="status-badge status-' + slugify(p.status) + '">' + p.status + "</span>" +
        "</div>" +
        '<p class="project-desc">' + p.description + "</p>" +
        '<dl class="project-meta">' +
          "<div><dt>Stage</dt><dd>" + p.stage + "</dd></div>" +
          "<div><dt>Time commitment</dt><dd>" + p.timeCommitment + "</dd></div>" +
        "</dl>" +
        '<div class="project-roles">' +
          "<h4>Roles needed</h4>" +
          '<ul class="tag-list">' + p.roles.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>" +
        "</div>" +
        '<div class="project-tasks">' +
          "<h4>Example tasks</h4>" +
          "<ul>" + p.tasks.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" +
        "</div>" +
        '<a href="index.html#join" class="btn btn-primary">Express Interest</a>' +
      "</article>"
    );
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
