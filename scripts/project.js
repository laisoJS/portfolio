document.addEventListener("DOMContentLoaded", () => {
    const projectImgs = document.querySelectorAll(".projectImg");

    const articleHeading = document.querySelector("article h2"),
          articleParagraph = document.querySelector("article p");
    
    projectImgs.forEach((img, index) => {
            // Stack card
            img.style.marginLeft = `${(index - 1) * 13}%`;
            img.style.marginTop = "-40vh";

            // Change the h2 and p tag in article
            img.addEventListener("mouseover", () => {
                articleHeading.textContent = img.alt;
                articleParagraph.textContent = img.getAttribute("data-story");
            });
    });
});
