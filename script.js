const cacheKey = "NUMBER";
 
           const pict = document.querySelector(".menu");
           pict.addEventListener('click', function(event) {
               let number = localStorage.getItem(cacheKey);
               number++;
               localStorage.setItem(cacheKey, number);
           })
