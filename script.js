
console.log(gsap);
gsap.from('.outer-circle', {duration: 1.5, y: '-200%' , ease:'bounce' ,delay:0.5});
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
    duration: 3,
    })

      gsap.utils.toArray('.education-entry').forEach(entry => {
        gsap.fromTo(entry, {
          x: 1000,
        }, {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: entry,
            start: "top 90%",
            end: "top 20%",
            scrub: true
          }
        });
      });
    function changeBackgroundAndContent(imageUrl, title, content) {
        const container = document.querySelector('#projects');
        container.style.background = ` url(images/${imageUrl}) no-repeat center center`;
        console.log(`url(${imageUrl})`);
      
        const contentDiv = document.querySelector('.projectcontent');
        contentDiv.innerHTML = `<h1>${title}</h1><p>${content}</p>`;
      }
      function showContent(element) {
        element.style.width = "70vw"
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