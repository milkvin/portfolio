const cacheKey = "NUMBER";
 
           const menu = document.querySelector(".menu");
           menu.addEventListener('click', function(event) {
               let number = localStorage.getItem(cacheKey);
               number++;
               localStorage.setItem(cacheKey, number);
           })
