    document.addEventListener("DOMContentLoaded", () => {
        const projectImgs = document.querySelectorAll(".projectImg");

        const articleHeading = document.querySelector("article h2"),
            articleParagraph = document.querySelector("article p");

        // Store the default text
        const defaultHeading = articleHeading.textContent;
        const defaultParagraph = articleParagraph.textContent;
        
        projectImgs.forEach((img, index) => {
                // Stack card
                img.style.marginLeft = `${(index - 1) * 13}%`;
                img.style.marginTop = "-40dvh";

                // Change the h2 and p tag in article
                img.addEventListener("mouseover", () => {
                    articleHeading.textContent = img.alt;
                    articleParagraph.textContent = img.getAttribute("data-story");
                });

                // Change the text back to the default one when the mouse leave
                img.addEventListener("mouseout", () => {
                    articleHeading.textContent = defaultHeading
                    articleParagraph.textContent = defaultParagraph
                });
        });
    });
