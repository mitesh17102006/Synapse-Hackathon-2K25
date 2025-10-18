const allData = {
    marketplace: {
        books: [
            { icon: '📚', title: 'Data Structures & Algorithms', price: '₹450', seller: 'Arjun Kumar', condition: 'Like New', rating: 4.8, desc: 'CS textbook with all chapters, minimal highlighting', verified: true },
            { icon: '📗', title: 'Engineering Mathematics', price: '₹350', seller: 'Priya Sharma', condition: 'Good', rating: 4.3, desc: 'Vol 1 & 2, previous semester notes included', verified: false },
            { icon: '📕', title: 'Digital Electronics', price: '₹400', seller: 'Rahul Menon', condition: 'Like New', rating: 4.6, desc: 'Latest edition, no damage, quick sell', verified: true },
            { icon: '📙', title: 'Thermodynamics Notes', price: '₹150', seller: 'Sneha Nair', condition: 'Good', rating: 4.4, desc: 'Handwritten notes, all important topics covered', verified: false },
            { icon: '📔', title: 'C Programming Book', price: '₹300', seller: 'Karthik Raj', condition: 'Excellent', rating: 4.7, desc: 'Balagurusamy, with solved examples', verified: true },
            { icon: '📓', title: 'Circuit Theory', price: '₹380', seller: 'Divya Krishna', condition: 'Good', rating: 4.5, desc: 'ECE core subject, well maintained', verified: true }
        ],
        vehicles: [
            { icon: '🚲', title: 'Hero Sprint Bicycle', price: '₹3,500', seller: 'Amit Verma', condition: 'Good', rating: 4.5, desc: 'Used for 1 year, well maintained, new tires', verified: true },
            { icon: '🛵', title: 'Honda Activa', price: '₹35,000', seller: 'Rohan Pillai', condition: 'Excellent', rating: 4.8, desc: '2022 model, single owner, all papers clear', verified: true },
            { icon: '🚴', title: 'Firefox Mountain Bike', price: '₹8,000', seller: 'Lakshmi Das', condition: 'Like New', rating: 4.9, desc: 'Gear cycle, barely used, perfect condition', verified: true },
            { icon: '🏍️', title: 'Yamaha FZ', price: '₹55,000', seller: 'Vinay Kumar', condition: 'Good', rating: 4.6, desc: '2020 model, 25000km, serviced regularly', verified: true },
            { icon: '🚲', title: 'BSA Ladybird', price: '₹2,800', seller: 'Meera Nair', condition: 'Fair', rating: 4.2, desc: 'Ladies bicycle, functional, needs minor repair', verified: false },
            { icon: '🛵', title: 'TVS Jupiter', price: '₹32,000', seller: 'Suresh Babu', condition: 'Good', rating: 4.4, desc: '2021 model, good mileage, well maintained', verified: true }
        ],
        instruments: [
            { icon: '🎸', title: 'Acoustic Guitar', price: '₹6,500', seller: 'Aditya Menon', condition: 'Good', rating: 4.7, desc: 'Yamaha F310, with carry bag and picks', verified: true },
            { icon: '🎹', title: 'Keyboard Casio', price: '₹8,000', seller: 'Shreya Iyer', condition: 'Excellent', rating: 4.9, desc: '61 keys, stand included, barely used', verified: true },
            { icon: '🥁', title: 'Practice Drum Pad', price: '₹2,500', seller: 'Nikhil George', condition: 'Like New', rating: 4.5, desc: 'With drumsticks, perfect for practice', verified: true },
            { icon: '🏏', title: 'Cricket Kit', price: '₹4,000', seller: 'Vishal Reddy', condition: 'Good', rating: 4.4, desc: 'Bat, pads, gloves, helmet - complete set', verified: false },
            { icon: '🏸', title: 'Badminton Rackets', price: '₹1,800', seller: 'Anjali Krishnan', condition: 'Good', rating: 4.3, desc: 'Pair of Yonex rackets with shuttlecocks', verified: true },
            { icon: '⚽', title: 'Football & Pump', price: '₹800', seller: 'Aryan Shah', condition: 'Good', rating: 4.2, desc: 'Nike football, size 5, with air pump', verified: false }
        ]
    },
    'lost-found': {
        lost: [
            { icon: '🎧', title: 'AirPods Pro', location: 'Near Library', date: 'Oct 15, 2025', desc: 'White AirPods Pro with charging case', status: 'Lost' },
            { icon: '💧', title: 'Water Bottle', location: 'Lecture Hall 3', date: 'Oct 16, 2025', desc: 'Blue insulated water bottle with stickers', status: 'Lost' },
            { icon: '🪪', title: 'ID Card', location: 'Main Gate', date: 'Oct 17, 2025', desc: 'Student ID card with name Rajesh Kumar', status: 'Lost' },
            { icon: '💻', title: 'Laptop Charger', location: 'CS Lab', date: 'Oct 14, 2025', desc: 'Dell laptop charger 65W', status: 'Lost' },
            { icon: '📚', title: 'Notebook', location: 'Canteen', date: 'Oct 18, 2025', desc: 'Red spiral notebook - Mathematics notes', status: 'Lost' },
            { icon: '🔑', title: 'Keys', location: 'Sports Complex', date: 'Oct 13, 2025', desc: 'Bunch of keys with Avengers keychain', status: 'Lost' }
        ],
        found: [
            { icon: '🔑', title: 'Black Keys', location: 'Library - 2nd Floor', date: 'Oct 17, 2025', desc: 'Black keys with leather keychain', status: 'Found' },
            { icon: '☂️', title: 'Red Umbrella', location: 'LHC Building', date: 'Oct 16, 2025', desc: 'Large red umbrella, slightly worn', status: 'Found' },
            { icon: '🔢', title: 'Calculator', location: 'Lecture Hall 5', date: 'Oct 18, 2025', desc: 'Scientific calculator Casio fx-991', status: 'Found' },
            { icon: '📓', title: 'Blue Notebook', location: 'Canteen Area', date: 'Oct 15, 2025', desc: 'Blue notebook with physics notes', status: 'Found' },
            { icon: '🎧', title: 'White AirPods', location: 'Hostel D Entrance', date: 'Oct 14, 2025', desc: 'Apple AirPods in white case', status: 'Found' },
            { icon: '🔌', title: 'Phone Charger', location: 'CS Lab', date: 'Oct 13, 2025', desc: 'Type-C charging cable and adapter', status: 'Found' }
        ]
    },
    events: [
        { icon: '🎭', title: 'Cultural Night 2025', date: 'Oct 25, 2025', time: '6:00 PM - 10:00 PM', venue: 'Open Air Theatre', organizer: 'Cultural Committee', desc: 'Annual cultural festival with dance, music, and drama performances', status: 'Upcoming' },
        { icon: '💻', title: 'Hackathon - Code Sprint', date: 'Oct 28, 2025', time: '9:00 AM - 9:00 PM', venue: 'Computer Center', organizer: 'Tech Club', desc: '24-hour coding competition with amazing prizes', status: 'Upcoming' },
        { icon: '🏏', title: 'Inter-Hostel Cricket', date: 'Oct 30, 2025', time: '4:00 PM - 7:00 PM', venue: 'Sports Ground', organizer: 'Sports Committee', desc: 'Annual cricket tournament between hostels', status: 'Upcoming' },
        { icon: '📚', title: 'Workshop: AI & ML', date: 'Nov 2, 2025', time: '2:00 PM - 5:00 PM', venue: 'Seminar Hall', organizer: 'IEEE Student Chapter', desc: 'Introduction to Artificial Intelligence and Machine Learning', status: 'Registration Open' },
        { icon: '🎵', title: 'Music Fest - Ragam', date: 'Nov 5, 2025', time: '5:00 PM - 11:00 PM', venue: 'Main Auditorium', organizer: 'Music Club', desc: 'Live performances by student bands and artists', status: 'Registration Open' },
        { icon: '🎨', title: 'Art Exhibition', date: 'Nov 8, 2025', time: '10:00 AM - 6:00 PM', venue: 'Student Activity Center', organizer: 'Fine Arts Club', desc: 'Showcase of student artwork and photography', status: 'Upcoming' }
    ],
    placement: [
        { icon: '🏢', title: 'Google India', package: '₹42 LPA', role: 'Software Engineer', eligibility: 'CS, EC', students: '12 placed', rating: 4.9 },
        { icon: '🏢', title: 'Microsoft', package: '₹38 LPA', role: 'SDE - Full Stack', eligibility: 'CS, IT', students: '15 placed', rating: 4.8 },
        { icon: '🏢', title: 'Amazon', package: '₹35 LPA', role: 'SDE-1', eligibility: 'All branches', students: '18 placed', rating: 4.7 },
        { icon: '🏢', title: 'Adobe', package: '₹30 LPA', role: 'Software Developer', eligibility: 'CS, EC, EE', students: '8 placed', rating: 4.8 },
        { icon: '🏢', title: 'Goldman Sachs', package: '₹28 LPA', role: 'Analyst', eligibility: 'CS, EC', students: '10 placed', rating: 4.6 },
        { icon: '🏢', title: 'Infosys', package: '₹8 LPA', role: 'System Engineer', eligibility: 'All branches', students: '45 placed', rating: 4.3 }
    ],
    clubs: [
        { icon: '💻', title: 'Tech Club', members: '250+', category: 'Technical', desc: 'Coding, hackathons, and tech workshops', rating: 4.8, achievements: 'Won 3 National Hackathons', events: 'Weekly coding sessions', contact: 'techclub@nitc.ac.in' },
        { icon: '🎭', title: 'Drama Club', members: '120+', category: 'Cultural', desc: 'Theatre performances and acting workshops', rating: 4.7, achievements: '15+ Productions staged', events: 'Monthly performances', contact: 'drama@nitc.ac.in' },
        { icon: '🎵', title: 'Music Society', members: '180+', category: 'Cultural', desc: 'Concerts, jam sessions, and music events', rating: 4.9, achievements: 'Best College Band 2024', events: 'Open Mic every Friday', contact: 'music@nitc.ac.in' },
        { icon: '📸', title: 'Photography Club', members: '90+', category: 'Creative', desc: 'Photo walks, exhibitions, and workshops', rating: 4.6, achievements: '5 State-level exhibitions', events: 'Monthly photo walks', contact: 'photo@nitc.ac.in' },
        { icon: '⚽', title: 'Sports Committee', members: '300+', category: 'Sports', desc: 'Inter-hostel tournaments and sports events', rating: 4.5, achievements: 'IIT Madras Tournament Winners', events: 'Daily practice sessions', contact: 'sports@nitc.ac.in' },
        { icon: '📚', title: 'Literary Club', members: '100+', category: 'Cultural', desc: 'Debates, poetry, and creative writing', rating: 4.4, achievements: 'National Debate Champions', events: 'Weekly book club meets', contact: 'literary@nitc.ac.in' },
        { icon: '🤖', title: 'Robotics Club', members: '140+', category: 'Technical', desc: 'Build robots, compete in competitions', rating: 4.7, achievements: 'Robocon Finalists 2024', events: 'Bi-weekly workshops', contact: 'robotics@nitc.ac.in' },
        { icon: '🎨', title: 'Fine Arts Club', members: '85+', category: 'Creative', desc: 'Painting, sketching, and art exhibitions', rating: 4.5, achievements: 'Annual Art Festival organizers', events: 'Art classes every Tuesday', contact: 'arts@nitc.ac.in' },
        { icon: '🎬', title: 'Film Society', members: '110+', category: 'Cultural', desc: 'Film screenings, discussions, and making', rating: 4.6, achievements: 'Short film festival winners', events: 'Movie screenings every weekend', contact: 'films@nitc.ac.in' },
        { icon: '🔬', title: 'Science Club', members: '95+', category: 'Technical', desc: 'Science exhibitions and research projects', rating: 4.4, achievements: 'Best Science Expo 2024', events: 'Monthly science talks', contact: 'science@nitc.ac.in' },
        { icon: '🌍', title: 'Social Service Club', members: '160+', category: 'Social', desc: 'Community service and outreach programs', rating: 4.8, achievements: 'Helped 500+ families', events: 'Weekly village visits', contact: 'social@nitc.ac.in' },
        { icon: '♟️', title: 'Chess Club', members: '75+', category: 'Sports', desc: 'Chess tournaments and training sessions', rating: 4.3, achievements: 'State Championship participants', events: 'Daily evening sessions', contact: 'chess@nitc.ac.in' }
    ],
    hostel: [
        { icon: '🎫', title: 'Electrical Issues', desc: 'Report power outages, faulty switches, or lighting problems', action: 'Report Issue', priority: 'High', avgTime: '2-4 hours' },
        { icon: '💧', title: 'Plumbing Problems', desc: 'Water leakage, drainage, or tap repair issues', action: 'Report Issue', priority: 'High', avgTime: '3-6 hours' },
        { icon: '🪟', title: 'Room Maintenance', desc: 'Furniture repair, door/window fixes, painting needs', action: 'Report Issue', priority: 'Medium', avgTime: '1-2 days' },
        { icon: '🌡️', title: 'AC/Fan Repair', desc: 'Air conditioning or ceiling fan not working properly', action: 'Report Issue', priority: 'Medium', avgTime: '4-8 hours' },
        { icon: '🧹', title: 'Cleaning Services', desc: 'Request deep cleaning or report sanitation issues', action: 'Request Service', priority: 'Low', avgTime: '1 day' },
        { icon: '🔐', title: 'Lock & Key Issues', desc: 'Lost keys, broken locks, or security concerns', action: 'Report Urgent', priority: 'High', avgTime: '1-2 hours' },
        { icon: '📋', title: 'My Tickets', desc: 'Track all your reported issues and their current status', action: 'View Status', priority: 'N/A', avgTime: 'Real-time' },
        { icon: '📊', title: 'Issue Statistics', desc: 'View common problems and average resolution times', action: 'View Stats', priority: 'N/A', avgTime: 'N/A' },
        { icon: '💬', title: 'Rate Service', desc: 'Provide feedback on resolved issues and services', action: 'Give Feedback', priority: 'N/A', avgTime: 'N/A' },
        { icon: '🔔', title: 'Notifications', desc: 'Get updates when your tickets are being processed', action: 'Manage Alerts', priority: 'N/A', avgTime: 'Instant' },
        { icon: '📞', title: 'Emergency Contact', desc: 'Direct contact for urgent hostel emergencies 24/7', action: 'Call Now', priority: 'Critical', avgTime: 'Immediate' },
        { icon: '📅', title: 'Maintenance Schedule', desc: 'View upcoming scheduled maintenance in your block', action: 'View Schedule', priority: 'N/A', avgTime: 'N/A' }
    ]
};

let currentSection = 'marketplace';
let currentFilter = 'all';

function renderCards(section = 'marketplace', filter = 'all') {
    const grid = document.getElementById('cardsGrid');
    let data = [];

    if (section === 'marketplace') {
        if (filter === 'all') {
            data = [...allData.marketplace.books, ...allData.marketplace.vehicles, ...allData.marketplace.instruments];
        } else {
            data = allData.marketplace[filter] || [];
        }
        renderMarketplaceCards(data, grid);
    } else if (section === 'lost-found') {
        data = [...allData['lost-found'].lost, ...allData['lost-found'].found];
        renderLostFoundCards(data, grid);
    } else if (section === 'events') {
        data = allData.events;
        renderEventCards(data, grid);
    } else if (section === 'placement') {
        data = allData.placement;
        renderPlacementCards(data, grid);
    } else if (section === 'clubs') {
        data = allData.clubs;
        renderClubCards(data, grid);
    } else if (section === 'hostel') {
        data = allData.hostel;
        renderHostelCards(data, grid);
    }
}

function renderMarketplaceCards(data, grid) {
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                ${item.verified ? '<span class="card-badge">✓ Verified</span>' : ''}
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="meta-item">👤 ${item.seller}</span>
                    <span class="meta-item">⭐ ${item.rating}</span>
                    <span class="meta-item" style="color: #10B981;">✓ ${item.condition}</span>
                </div>
                <p class="card-description">${item.desc}</p>
                <div class="card-footer">
                    <div class="price-tag">${item.price}</div>
                    <button class="action-btn" onclick="contactSeller('${item.title}')">Contact</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLostFoundCards(data, grid) {
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image" style="background: linear-gradient(135deg, ${item.status === 'Lost' ? '#EF4444, #DC2626' : '#10B981, #059669'});">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                <span class="card-badge">${item.status}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="meta-item">📍 ${item.location}</span>
                    <span class="meta-item">📅 ${item.date}</span>
                </div>
                <p class="card-description">${item.desc}</p>
                <div class="card-footer" style="border: none;">
                    <button class="action-btn" style="width: 100%;" onclick="alert('${item.status === 'Lost' ? 'Reporting match...' : 'Claiming item...'}')">
                        ${item.status === 'Lost' ? 'I Found This!' : 'Claim Item'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderEventCards(data, grid) {
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image" style="background: linear-gradient(135deg, #8B5CF6, #7C3AED);">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                <span class="card-badge">${item.status}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="meta-item">📅 ${item.date}</span>
                    <span class="meta-item">⏰ ${item.time}</span>
                </div>
                <div class="card-meta">
                    <span class="meta-item">📍 ${item.venue}</span>
                    <span class="meta-item">👥 ${item.organizer}</span>
                </div>
                <p class="card-description">${item.desc}</p>
                <div class="card-footer" style="border: none;">
                    <button class="action-btn" style="width: 100%;" onclick="alert('Registering for ${item.title}...')">Register Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPlacementCards(data, grid) {
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image" style="background: linear-gradient(135deg, #F59E0B, #D97706);">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                <span class="card-badge">⭐ ${item.rating}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="meta-item">💼 ${item.role}</span>
                </div>
                <div class="card-meta">
                    <span class="meta-item">🎓 ${item.eligibility}</span>
                    <span class="meta-item" style="color: #10B981;">✅ ${item.students}</span>
                </div>
                <div class="card-footer">
                    <div class="price-tag">${item.package}</div>
                    <button class="action-btn" onclick="alert('Viewing ${item.title} details...')">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderClubCards(data, grid) {
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image" style="background: linear-gradient(135deg, #EC4899, #DB2777);">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                <span class="card-badge">${item.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-meta">
                    <span class="meta-item">👥 ${item.members} Members</span>
                    <span class="meta-item">⭐ ${item.rating}</span>
                </div>
                <p class="card-description">${item.desc}</p>
                <div style="background: #F0F9FF; padding: 0.8rem; border-radius: 10px; margin: 1rem 0; font-size: 0.85rem;">
                    <p style="color: #1E3A8A; margin-bottom: 0.3rem;"><strong>🏆 Achievements:</strong> ${item.achievements}</p>
                    <p style="color: #64748B; margin-bottom: 0.3rem;"><strong>📅 Events:</strong> ${item.events}</p>
                    <p style="color: #64748B;"><strong>📧 Contact:</strong> ${item.contact}</p>
                </div>
                <div class="card-footer" style="border: none;">
                    <button class="action-btn" style="width: 100%;" onclick="alert('Joining ${item.title}...')">Register for Club event</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderHostelCards(data, grid) {
    const priorityColors = {
        'Critical': '#EF4444',
        'High': '#F59E0B',
        'Medium': '#3B82F6',
        'Low': '#10B981',
        'N/A': '#94A3B8'
    };
    
    grid.innerHTML = data.map(item => `
        <div class="enhanced-card">
            <div class="card-image" style="background: linear-gradient(135deg, #06B6D4, #0891B2);">
                <div style="font-size: 5rem; z-index: 1;">${item.icon}</div>
                ${item.priority !== 'N/A' ? `<span class="card-badge" style="background: ${priorityColors[item.priority]};">${item.priority}</span>` : ''}
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.desc}</p>
                ${item.avgTime !== 'N/A' ? `
                <div style="background: #F0F9FF; padding: 0.8rem; border-radius: 10px; margin: 1rem 0; font-size: 0.85rem;">
                    <p style="color: #1E3A8A; margin-bottom: 0.3rem;"><strong>⏱️ Avg Resolution Time:</strong> ${item.avgTime}</p>
                    <p style="color: #64748B;"><strong>🎯 Priority Level:</strong> <span style="color: ${priorityColors[item.priority]}; font-weight: 600;">${item.priority}</span></p>
                </div>
                ` : ''}
                <div class="card-footer" style="border: none; padding-top: ${item.avgTime !== 'N/A' ? '0.5rem' : '1.5rem'};">
                    <button class="action-btn" style="width: 100%;" onclick="alert('${item.action}...')">${item.action}</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterItems(category) {
    if (currentSection !== 'marketplace') return;
    currentFilter = category;
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    renderCards('marketplace', category);
}

function loadSection(section) {
    currentSection = section;
    currentFilter = 'all';
    
    const titles = {
        'marketplace': 'Trending in Marketplace',
        'lost-found': 'Lost & Found Items',
        'events': 'Upcoming Events',
        'placement': 'Placement Analytics',
        'clubs': 'Campus Clubs',
        'hostel': 'Hostel Services'
    };
    
    document.getElementById('sectionTitle').textContent = titles[section];
    
    // Update filter tabs visibility
    const filterTabs = document.querySelector('.filter-tabs');
    if (section === 'marketplace') {
        filterTabs.style.display = 'flex';
        filterTabs.innerHTML = `
            <button class="tab active" onclick="filterItems('all')">All</button>
            <button class="tab" onclick="filterItems('books')">Books</button>
            <button class="tab" onclick="filterItems('vehicles')">Vehicles</button>
            <button class="tab" onclick="filterItems('instruments')">Instruments</button>
        `;
    } else {
        filterTabs.style.display = 'none';
    }
    
    renderCards(section, 'all');
}

function contactSeller(itemTitle) {
    alert(`📱 Contact Seller for "${itemTitle}"\n\nThis would open:\n• Direct messaging\n• Phone call option\n• Email option\n• Make an offer dialog`);
}

function showAddItemModal() {
    alert('➕ Add New Item\n\nThis would open a form to:\n• Upload photos\n• Add title & description\n• Set price\n• Choose category\n• Add location\n• Set condition');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Initial render
renderCards();