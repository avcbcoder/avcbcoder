window.onload = function () {
    var accordionTitle = document.getElementsByClassName('accordion-title');
    var accordionContent = document.getElementsByClassName('accordion-content');
    for (let i = 0; i < accordionTitle.length; i++) {
        accordionTitle[i].addEventListener("click", function () {
            console.log('click')
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) { // hide content
                content.style.maxHeight = null;
                content.style.border = "0px solid #E6E6E6";
                content.style.marginBottom = "0px";
            }
            else {
                for (let j = 0; j < 3; j++) {// hide all content
                    accordionContent[j].style.maxHeight = null;
                    accordionContent[j].style.border = "0px solid #E6E6E6";
                    accordionContent[j].style.marginBottom = "0px";
                }
                // show the one which is clicked
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.border = "1px solid #E6E6E6";
                content.style.marginBottom = "5px";
            }
        });
    }
}