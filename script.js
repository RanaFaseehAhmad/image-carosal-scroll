// let back = document.querySelector('.back')
// let next = document.querySelector('.next')
// let imageGallery = document.querySelector(".imageGallery")

// back.addEventListener('click', () => {
//     imageGallery.scrollBy({ left: -900, behavior: 'smooth' });
//     applyClickStyles(back);
// });

// next.addEventListener('click', () => {
//     imageGallery.scrollBy({ left: 900, behavior: 'smooth' });
//     applyClickStyles(next);
// });
// function applyClickStyles(button) {
//     button.style.transform = 'scale(1.1)';  // Example: Slightly enlarge the button
//     button.style.transition = 'transform 0.2s, background-color 0.2s'; // Smooth transition

//     // Optionally, reset the style after a delay
//     setTimeout(() => {
//         button.style.transform = '';        // Reset to original
//     }, 200); // Reset after 200 milliseconds
// }




let backButton = document.querySelector(".back")
let nextButton = document.querySelector(".next")
let imageGallery = document.querySelector(".imageGallery")
backButton.addEventListener("click", () => {
    imageGallery.scrollBy({ left: -900, behavior: 'smooth' })
    applyClickStyles(backButton)
    
})
nextButton.addEventListener("click", () => {
    imageGallery.scrollBy({ left: 900, behavior: 'smooth' })
    applyClickStyles(nextButton)
})
function applyClickStyles(button) {
    button.style.transform = 'scale(1.1)';  // Example: Slightly enlarge the button
    button.style.transition = 'transform 0.2s, background-color 0.2s'; // Smooth transition

    // Optionally, reset the style after a delay
    setTimeout(() => {
        button.style.transform = '';        // Reset to original
    }, 200); // Reset after 200 milliseconds
}
