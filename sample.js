// Bike Database for Showroom Spotlight
const bikeData = {
    thunder: {
        title: "Apex Thunder X1",
        desc: "A heavy-duty beast built for long highways and aggressive acceleration, featuring dual-channel ABS and liquid-cooled engine.",
        speed: "240 km/h",
        hp: "115 HP",
        weight: "185 kg",
        img: "https://unsplash.com"
    },
    velocity: {
        title: "Velocity R6",
        desc: "Track-inspired aerodynamic styling built with ultra-light chassis configuration for maximum cornering precision.",
        speed: "280 km/h",
        hp: "130 HP",
        weight: "165 kg",
        img: "https://unsplash.com"
    },
    shadow: {
        title: "Shadow Cruiser",
        desc: "Classic low-slung riding stance blended with smooth torque delivery and ultra-comfortable seating posture.",
        speed: "190 km/h",
        hp: "95 HP",
        weight: "215 kg",
        img: "https://unsplash.com"
    }
};

// Switch Showroom Specifications dynamically
function changeBike(modelKey) {
    const data = bikeData[modelKey];
    
    // Update text & image content
    document.getElementById('bike-title').innerText = data.title;
    document.getElementById('bike-desc').innerText = data.desc;
    document.getElementById('spec-speed').innerText = data.speed;
    document.getElementById('spec-hp').innerText = data.hp;
    document.getElementById('spec-weight').innerText = data.weight;
    document.getElementById('active-bike-img').src = data.img;

    // Update active button state
    document.querySelectorAll('.model-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Filter Catalog Items
function filterCatalog(category) {
    const cards = document.querySelectorAll('.catalog-card');
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle Form Submission
function handleBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const model = document.getElementById('selected-model').value;
    const date = document.getElementById('ride-date').value;

    alert(`Success, ${name}! Your test drive for the ${model} is booked for ${date}. We will email you confirmation details shortly.`);
    document.getElementById('booking-form').reset();
}
