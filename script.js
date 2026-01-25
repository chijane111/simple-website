const mainDiv = document.getElementById('main-text1');
mainDiv.innerHTML = `<h1>Welcome to STEMIK CREATION </h1>
                     <p>You will love what we do at <strong style="color:red">STEMIK CREATION</strong></p>
                     <p>Where we style you to perfection with wigs and cornrows.</p>`;

const imageDiv = document.getElementById('main-image')
imageDiv.innerHTML = `<img src = "img/Rectangle 55 (1).png" alt="hair styling">`

 
const ctaButton =document.getElementById('cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for choosing STEMIK CREATION! We will contact you shortly to confirm your appointment.');
    });
const galleryData = [
    { 
        image: 'img/Rectangle 55 (1).png', 
        text: 'Elegant Wig Style' 
    },
    { 
        image: 'img/Rectangle 55 (1).png', 
        text: 'Chic Wig Style'
    },
    { 
        image: 'img/Rectangle 55 (1).png', 
        text: 'Trendy Cornrow Style' 
    },
];

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    item.innerHTML = `
        <img src="${galleryData[index].image}" alt="${galleryData[index].text}">
        <p>${galleryData[index].text}</p>
    `;
});

    const footer = document.querySelector('footer');
    footer.innerHTML = `<p>&copy; 2024 STEMIK CREATION. All rights reserved.</p>`;