
        lucide.createIcons();

        

        const nameElement = document.getElementById('name-text');
        const techElement = document.getElementById('tech-text');
        
        const mainName = "الجزيرة للتسويق";
        const techs = ["HTML5", "CSS3", "JavaScript", "BOOTSTRAP5" , "REACT.JS" , "tailwind css" , "NEXT.JS"];
     
        
        let techIndex = 0;

        function typeText(element, text, speed = 100) {
            return new Promise(resolve => {
                let i = 0;
                element.innerHTML = '';
                const interval = setInterval(() => {
                    element.innerHTML += text[i];
                    i++;
                    if (i === text.length) {
                        clearInterval(interval);
                        resolve();
                    }
                }, speed);
            });
        }

        async function deleteText(element, speed = 50) {
            return new Promise(resolve => {
                const interval = setInterval(() => {
                    element.innerHTML = element.innerHTML.slice(0, -1);
                    if (element.innerHTML === '') {
                        clearInterval(interval);
                        resolve();
                    }
                }, speed);
            });
        }

        async function nameCycle() {
            while(true) {
                await typeText(nameElement, mainName, 120);
                await new Promise(r => setTimeout(r, 4000));
                await deleteText(nameElement, 60);
                await new Promise(r => setTimeout(r, 500));
            }
        }

        async function techCycle() {
            while(true) {
                await typeText(techElement, techs[techIndex], 80);
                await new Promise(r => setTimeout(r, 2000));
                await deleteText(techElement, 40);
                techIndex = (techIndex + 1) % techs.length;
            }
        }

        window.onload = () => {
            nameCycle();
            techCycle();
            reveal();
        };

        function reveal() {
            const reveals = document.querySelectorAll(".reveal");
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", reveal);


        
  
