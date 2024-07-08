// function showHorizontalCard() {
//     var card = document.getElementById ('horizontalCard');
//     var serviceCards = document.getElementById('serviceCards');
//     if (card.style.display === 'none') {
//         card.style.display = 'flex'; // Show the horizontal card
//         serviceCards.style.display = 'none'; // Hide the service cards
//     } else {
//         card.style.display = 'none'; // Hide the horizontal card
//         serviceCards.style.display = 'flex'; // Show the service cards
//     }
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".cards");
//     const card = document.querySelectorAll("card2");

//     cards.forEach((card, index) => {
//         setTimeout(() => {
//             card.classList.add("show");
//         }, index * 2000); // Delay each card by 500ms
//     });
// });

// let cheran = 3
// cheran = JSON.stringify(cheran)

document.querySelector

// Select the fixed div
var fixedDiv = document.getElementById('fixedDiv');
var fixed1 = document.getElementById('fixed1')
var fixed2 = document.getElementById('fixed2');
var fixed3 = document.getElementById('fixed3');
var fixed4 = document.getElementById('fixed4');
var fixed5 = document.getElementById('fixed5');
var fixed6 = document.getElementById('fixed6');
// Define the scroll threshold where you want to change the background color
var scrollThreshold = 20; // Adjust this value as needed


// Event listener for scroll    
window.addEventListener('scroll', function() {
    // Get current scroll position
    var scrollPosition = window.scrollY 

    // Check if scroll position is beyond the threshold
    if (scrollPosition > scrollThreshold) {
        fixedDiv.style.backgroundColor = 'white'; 
        fixed1.style.color = '#2980b9';
        fixed2.style.color = 'gray';
        fixed3.style.color = 'gray';
        fixed4.style.color ='gray';
        fixed5.style.color ='gray';
        fixed6.style.color = 'gray';
        console.log("cjcjcjc");

    } else {
        fixedDiv.style.backgroundColor = 'transparent'; 
        fixed1.style.color = 'lightblue';
        fixed2.style.color = 'white';
        fixed3.style.color = 'white';
        fixed4.style.color ='white';
        fixed5.style.color ='white';
        fixed6.style.color = 'white';
    }
});
