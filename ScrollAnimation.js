<script>
	let rotate_head = document.getElementById("text-rotate");
	let main_section = document.getElementById("Main-section");
// 	console.log(rotate_head);
    let circle = document.getElementById("circle");
    let head1 = document.getElementById("head1");
    let head = document.getElementById("head");
    let img1 = document.querySelector(".four-img img:nth-of-type(1)");
    let img2 = document.querySelector(".four-img img:nth-of-type(2)");
    let img3 = document.querySelector(".four-img img:nth-of-type(3)");
    let img4 = document.querySelector(".four-img img:nth-of-type(4)");

    window.addEventListener("scroll", function () {
        // Calculate the scroll position
        let scrollPosition = window.scrollY || window.pageYOffset;
		
		// Animation for #main_section
//         main_section.style.transform = "translateY(" + (-scrollPosition * 2) + "px)";
		
        // Animation for .rotate_head
        rotate_head.style.transform = "translateY(" + (scrollPosition * 6) + "px)";
		
        // Animation for #circle
        circle.style.transform = "translateY(" + (scrollPosition * 2) + "px)";

        // Animation for #head1
        head1.style.transform = "translateY(" + (scrollPosition * 0.9) + "px)";

        // Animation for #head
        head.style.transform = "translateY(" + (scrollPosition * 2.1) + "px)";

        // Animation for img1
        img1.style.transform = "translateX(" + (-scrollPosition * 4) + "px)";

        // Animation for img2
        img2.style.transform = "translateX(" + (-scrollPosition * 4) + "px)";

        // Animation for img3
        img3.style.transform = "translateX(" + (scrollPosition * 4) + "px)";

        // Animation for img4
        img4.style.transform = "translateX(" + (scrollPosition * 4) + "px)";
    });
</script>  
