let slideIndex = 1;

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        setInterval(function () {
            plusSlides(1);
        }, 2000);

        // Initial call to display the first image
        showSlides(slideIndex);