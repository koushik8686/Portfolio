//   window.addEventListener('scroll', function() {
//       var scrollPosition = window.scrollY;
//       var innerCircle = document.getElementById("inner-circle")
//       var outercircle = document.getElementById('outer-circle');
//       var entry = document.getElementById('container');
//       // Move the circle to the left
//       // innerCircle.style.right = scrollPosition / 5 + 'px'; // Adjust the divisor to control the speed
//       // innerCircle.style.top = scrollPosition/2  + 'px'; // Adjust the divisor to control the speed
//       entry.style.top = scrollPosition  + 'px'; // Adjust the divisor to control the speed
//   });
console.log(gsap);
gsap.from('.outer-circle', {duration: 1, y: '-100%' , ease:'bounce'});
// gsap.to(".outer-circle" ,{duration:3,delay:1 , x:-500})
gsap.registerPlugin(ScrollTrigger)

gsap.to(".content", {
    scrollTrigger: {
        trigger: ".content",
        start: "top 400px",
        end: "top 300px",
        scrub: true,
    },
    opacity:1,
    ease:"none",
    duration: 3
    })
    function changeBackgroundAndContent(imageUrl, title, content) {
        const container = document.querySelector('#projects');
        container.style.background = ` url(images/${imageUrl}) no-repeat center center`;
        console.log(`url(${imageUrl})`);
      
        const contentDiv = document.querySelector('.projectcontent');
        contentDiv.innerHTML = `<h1>${title}</h1><p>${content}</p>`;
      }
      function showContent(element) {
        element.style.width = "70vw"
      // Create content div if it does not exist
      if (!element.querySelector('.content')) {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = element.getAttribute('data-title');

        const description = document.createElement('div');
        description.classList.add('description');
        description.innerHTML = `
          <p>${element.getAttribute('data-description')}</p>
${element.getAttribute('live') ? `<a  target="_blank" href="${element.getAttribute('live')}" ><button class="link" >Live Demo</button></a>` : ''}
${element.getAttribute('code') ? `<a  target="_blank" href="${element.getAttribute('code')}" ><button class="link" >Code</button></a>` : ''}
`;      
        contentDiv.appendChild(title);
        contentDiv.appendChild(description);    
        element.appendChild(contentDiv);
        element.classList.add('show')
        const index = Array.from(element.parentElement.children).indexOf(element);
        if (index % 2 === 0) {
          // Even index: append after the image
          element.appendChild(contentDiv);
        } else {
          // Odd index: prepend before the image
          element.insertBefore(contentDiv, element.firstChild);
        }
      }
      // Display content div
    }