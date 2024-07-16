document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.bx-menu').addEventListener('click', () => {
    const Nav = document.querySelector('header .bottom nav');
    if (Nav.style.display === "flex") {
      Nav.style.display = "none";
    }
    else {
      Nav.style.display = "flex";
      Nav.style.flexDirection = "column";
      Nav.style.marginLeft = "150px";
      const anchorElements = document.querySelectorAll('header .bottom nav a');
      anchorElements.forEach((anchor) => {
        anchor.style.margin = '10px 0';
      });
    }

  })


  const Explore = [
    {
      title: "Data Science & Analytics",
      subtitle: "Become expert at drawing intelligence from data and get noticed by top companies",
      img: "Images/1.svg"
    },
    {
      title: "Software Development Courses",
      subtitle: "Upskill in-demand software & technology skills to attain desired jobs",
      img: "Images/2.svg"
    },
    {
      title: "Banking & Finance",
      subtitle: "Up-skill yourself with relevant courses to become job ready in Banking & Finance world",
      img: "Images/3.svg"
    },
    {
      title: "Programming Courses",
      subtitle: "Build strong coding foundations for a high-paying technology career",
      img: "Images/4.svg"
    },
    {
      title: "Business Technology",
      subtitle: "Explore the vast area of new categories under Business Technology",
      img: "Images/5.svg"
    },
    {
      title: "PW School of Healthcare",
      subtitle: "Explore the vast sector of Healthcare by Joining our Degree & Diploma Programs.",
      img: "Images/6.svg"
    }
  ];
  let html = '';
  Explore.forEach(course => {
    html += `
         <div class="explore-container">
                <div class="explore-box">
                    <div >
                        <h3>
                            ${course.title}
                        </h3>
                        <p class = "subtitle">${course.subtitle}</p>
                    </div>
                    <img src='${course.img}'alt="">
                </div>
                <div class="explore-bottom">
                    <h3>Know More</h3>
                    <i class='bx bxs-right-arrow-circle'></i>
                </div>
            </div>
       `;
  }
  );
  document.querySelector('.explore-grid').innerHTML = html;
  const coursesLink = document.getElementById('courses-link');
  const coursesContent = document.getElementById('courses-content');

  coursesLink.addEventListener('mouseover', function () {
    coursesContent.style.display = 'flex';
  });

  coursesContent.addEventListener('mouseover', function () {
    coursesContent.style.display = 'flex';
  });

  coursesLink.addEventListener('mouseout', function () {
    coursesContent.style.display = 'none';
  });

  coursesContent.addEventListener('mouseout', function () {
    coursesContent.style.display = 'none';
  });

  const successStories = [
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager1",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    },
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager2",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    },
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager3",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    },
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager4",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    },
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager5",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    },
    {
      title: "Cracked First Job",
      name: "Jayakrishna",
      position: "Unit Sales Manager6",
      description: "Thrilled to transition from student to banker with PW Skills' BFSI program, Pushpendra has secured a placement at ICICI Lombard. A new chapter begins! 🚀",
      from: "Fresher",
      toImage: "Images/s1.jpeg",
      profileImage: "Images/1.svg"
    }
  ];

  let currentIndex = 0;

  function renderStories() {
      const container = document.getElementById('success-stories-container');
      container.innerHTML = ''; // Clear the container
  
      for (let i = currentIndex; i < currentIndex + 4 && i < successStories.length; i++) {
          const story = successStories[i];
          const storyHtml = `
              <div class="container">
                  <h3 class="h">${story.title}</h3>
                  <div class="box">
                      <div class="second">
                          <img src="${story.profileImage}" alt="">
                          <div>
                              <h3>${story.name}</h3>
                              <p>${story.position}</p>
                          </div>
                      </div>
                      <p>${story.description}</p>
                  </div>
                  <div class="last">
                      <div>
                          <h3>From</h3> <span>${story.from}</span>
                      </div>
                      <i class='bx bxs-right-arrow-alt'></i>
                      <div>
                          <h3>To</h3>
                          <img src="${story.toImage}" alt="">
                      </div>
                  </div>
              </div>
          `;
          container.innerHTML += storyHtml;
      }
  }
  
  function showNextStory() {
    const isSmallScreen = window.innerWidth <= 500;
    
    if (isSmallScreen) {
        // Move to the next story (1 story at a time)
        if (currentIndex < successStories.length - 1) {
            currentIndex++;
        }
    } else {
        // For larger screens, move to the next set of stories (4 stories at a time)
        if (currentIndex < successStories.length - 4) {
            currentIndex++;
        }
    }
    
    renderStories();
}

function showPreviousStory() {
    const isSmallScreen = window.innerWidth <= 500;

    if (isSmallScreen) {
        // Move to the previous story (1 story at a time)
        if (currentIndex > 0) {
            currentIndex--;
        }
    } else {
        // For larger screens, move to the previous set of stories (4 stories at a time)
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    renderStories();
}

  document.getElementById('next-btn').addEventListener('click', showNextStory);
  document.getElementById('prev-btn').addEventListener('click', showPreviousStory);
  
  // Initial render
  renderStories();
  const contentArray = [
    "10 Million Learners",
    "10+ Million Learners",
    "4.8/5 Learner’s Rating",
    "500% Highest Salary Hike"
];
let contentIndex = 0;

function changeContent() {
    const contentElement = document.querySelector('.change-content');
    contentElement.style.opacity = 0; // Start fading out

    setTimeout(() => {
        contentElement.textContent = contentArray[contentIndex];
        contentElement.style.opacity = 1; // Fade in new content
        contentIndex = (contentIndex + 1) % contentArray.length;
    }, 1000); // Duration of the fade out before changing content
}

setInterval(changeContent, 5000); // Change content every 5 seconds


    changeContent();
 const courses = [
    {
        category: "MBA",
        courses: [
            {
                img: "Images/cs1.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
                img: "Images/cs2.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
                img: "Images/cs3.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
              img: "Images/cs1.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          },
          {
              img: "Images/cs2.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          },
          {
              img: "Images/cs3.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          }
        ]
    },
    {
        category: "Data Science & Analytics",
        courses: [
            {
                img: "Images/cs1.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
                img: "Images/cs2.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
                img: "Images/cs3.jpeg",
                redText: "Liverpool Business School",
                smallText: "Integrated with GenAI modules",
                title: "Master from Liverpool Business School",
                details: [
                    { icon: 'bx bx-book-open', text: "Master's Degree" },
                    { icon: 'bx bx-calendar', text: "18 Months" },
                    { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
                ]
            },
            {
              img: "Images/cs1.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          },
          {
              img: "Images/cs2.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          },
          {
              img: "Images/cs3.jpeg",
              redText: "Liverpool Business School",
              smallText: "Integrated with GenAI modules",
              title: "Master from Liverpool Business School",
              details: [
                  { icon: 'bx bx-book-open', text: "Master's Degree" },
                  { icon: 'bx bx-calendar', text: "18 Months" },
                  { icon: 'bx bx-star', text: "WES Recognized MBA degree" }
              ]
          }
        ]
    }
];

const courseCurrentIndex = {
  MBA: 0,
  "Data Science & Analytics": 0
};

function renderCourses() {
  const container = document.getElementById('courses-container');
  container.innerHTML = ''; // Clear the container

  courses.forEach(category => {
      const currentIndex = courseCurrentIndex[category.category];
      const totalCourses = category.courses.length;
      const displayedCourses = category.courses.slice(currentIndex, currentIndex + 3);

      const categoryHtml = `
          <h1 class="sideheading">${category.category}</h1>
          <div class="navigation-courses">
              <button id="prev-btn-${category.category}" onclick="handleButtonClick('${category.category}', -1)"><i class='bx bx-left-arrow-alt'></i></button>
              <button id="next-btn-${category.category}" onclick="handleButtonClick('${category.category}', 1)"><i class='bx bx-right-arrow-alt'></i></button>
          </div>
          <div class="course-grid" id="course-grid-${category.category}">
              ${displayedCourses.map(course => `
                  <div class="course-container">
                      <img src="${course.img}" alt="">
                      <div class="red-text">${course.redText}</div>
                      <div class="middle">
                          <small>${course.smallText}</small>
                          <h3>${course.title}</h3>
                      </div>
                      <div class="down">
                          ${course.details.map(detail => `
                              <div class="box">
                                  <i class='${detail.icon}'></i>
                                  <h3>${detail.text}</h3>
                              </div>
                          `).join('')}
                      </div>
                      <div class="btns">
                          <button class="bt1">View Program</button>
                          <button class="bt2"><span><i class='bx bxs-download'></i></span> Program</button>
                      </div>
                  </div>
              `).join('')}
          </div>
      `;
      container.innerHTML += categoryHtml;
  });
}

window.handleButtonClick = function(category, direction) {
  const categoryData = courses.find(c => c.category === category);
  const totalCourses = categoryData.courses.length;

  // Check screen width
  const isSmallScreen = window.innerWidth <= 500;

  // For small screens, adjust navigation
  if (isSmallScreen) {
      if (direction === 1) { // Next button
          courseCurrentIndex[category] += 1; // Move to the next index
      } else if (direction === -1) { // Previous button
          courseCurrentIndex[category] -= 1; // Move to the previous index
      }
  } else {
      // For larger screens, navigate based on remaining courses
      if (direction === 1) { // Next button
          const remainingCourses = totalCourses - courseCurrentIndex[category];
          if (remainingCourses <= 3) {
              return; // Don't navigate if fewer than 3 courses remain
          }
          courseCurrentIndex[category] += direction; // Move to next
      } else {
          courseCurrentIndex[category] += direction; // Move to previous
      }
  }

  // Prevent going out of bounds
  if (courseCurrentIndex[category] < 0) {
      courseCurrentIndex[category] = 0;
  }
  if (courseCurrentIndex[category] >= totalCourses) {
      courseCurrentIndex[category] = totalCourses - 1;
  }

  renderCourses(); // Re-render the courses with updated index
};


renderCourses();
});