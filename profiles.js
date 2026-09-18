// Static example contributor data — fictional profiles for demo purposes only.
// These are not real people. Replace with real contributor data later.
const PROFILES = [
  {
    name: "Jordan Ellis (example profile)",
    role: "Frontend Developer",
    intro: "Self-taught developer transitioning from a retail job, learning React by building small tools on weekends.",
    skills: ["HTML/CSS", "JavaScript", "React (learning)"],
    interests: ["Accessibility", "Design systems", "Open source"],
    contributions: [
      "Rebuilt the SkillBridge project card layout for mobile",
      "Fixed color contrast issues across the landing page"
    ],
    portfolio: "Portfolio placeholder — link coming soon"
  },
  {
    name: "Priya Nandan (example profile)",
    role: "Product / UX",
    intro: "Career-changer from customer support, now studying UX design part-time and looking for real project experience.",
    skills: ["Wireframing", "User research basics", "Figma"],
    interests: ["Early-stage products", "User interviews", "Writing"],
    contributions: [
      "Drafted the onboarding flow for new SkillBridge contributors",
      "Ran a small usability review of the projects page"
    ],
    portfolio: "Portfolio placeholder — link coming soon"
  },
  {
    name: "Marcus Boateng (example profile)",
    role: "Community / Marketing",
    intro: "Beginner marketer with a background in event planning, exploring community building and content writing.",
    skills: ["Copywriting", "Social media basics", "Community management"],
    interests: ["Storytelling", "Newsletters", "Startup culture"],
    contributions: [
      "Wrote sample outreach copy for recruiting early contributors",
      "Proposed the launch messaging for SkillBridge's opening"
    ],
    portfolio: "Portfolio placeholder — link coming soon"
  }
];

function renderProfiles() {
  const container = document.getElementById("profiles-list");
  if (!container) return;

  container.innerHTML = PROFILES.map(function (p) {
    return (
      '<article class="profile-card">' +
        '<div class="profile-card-header">' +
          "<h3>" + p.name + "</h3>" +
          '<span class="role-badge">' + p.role + "</span>" +
        "</div>" +
        '<p class="profile-intro">' + p.intro + "</p>" +
        "<details class=\"profile-details\">" +
          "<summary>View full profile</summary>" +
          '<div class="profile-details-inner">' +
            '<div class="profile-block">' +
              "<h4>Skills</h4>" +
              '<ul class="tag-list">' + p.skills.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
            "</div>" +
            '<div class="profile-block">' +
              "<h4>Interests</h4>" +
              '<ul class="tag-list">' + p.interests.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>" +
            "</div>" +
            '<div class="profile-block">' +
              "<h4>Example contributions</h4>" +
              "<ul>" + p.contributions.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>" +
            "</div>" +
            '<div class="profile-block">' +
              "<h4>Portfolio</h4>" +
              '<p class="portfolio-placeholder">' + p.portfolio + "</p>" +
            "</div>" +
          "</div>" +
        "</details>" +
      "</article>"
    );
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProfiles);
