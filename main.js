/* --- Enhanced Global Academic Intelligence Data Matrix --- */
const universityData = [
    // AFRICA
    { name: "University of Cape Town", continent: "Africa", country: "South Africa", gpa: 3.5, budget: 12000, rate: "48%", link: "https://uct.ac.za", scholarship: "MasterCard Foundation Scholars Program", scholarshipLink: "https://uct.ac.za/scholarships/mastercard" },
    { name: "University of Lagos", continent: "Africa", country: "Nigeria", gpa: 3.3, budget: 5000, rate: "25%", link: "https://unilag.edu.ng", scholarship: "Unilag Endowment Fund Award", scholarshipLink: "https://unilag.edu.ng/scholarships" },
    { name: "Cairo University", continent: "Africa", country: "Egypt", gpa: 3.4, budget: 8000, rate: "52%", link: "https://cu.edu.eg", scholarship: "Nile Basin Initiative Grant", scholarshipLink: "https://cu.edu.eg/intl-aid" },
    { name: "University of Nairobi", continent: "Africa", country: "Kenya", gpa: 3.2, budget: 6000, rate: "60%", link: "https://uonbi.ac.ke", scholarship: "UoN Gandhi Smarak Nidhi Fund", scholarshipLink: "https://uonbi.ac.ke/gandhi-scholarships" },
    { name: "Makerere University", continent: "Africa", country: "Uganda", gpa: 3.1, budget: 4000, rate: "40%", link: "https://mak.ac.ug", scholarship: "Female Scholarship Initiative (FSI)", scholarshipLink: "https://mak.ac.ug/fsi" },
    { name: "University of Ghana", continent: "Africa", country: "Ghana", gpa: 3.4, budget: 9000, rate: "35%", link: "https://ug.edu.gh", scholarship: "UG Jubilee Scholarship Matrix", scholarshipLink: "https://ug.edu.gh/jubilee" },
    { name: "Stellenbosch University", continent: "Africa", country: "South Africa", gpa: 3.6, budget: 14000, rate: "43%", link: "https://sun.ac.za", scholarship: "Mandela Rhodes Scholarship Framework", scholarshipLink: "https://mandelarhodes.org" },
    { name: "Alexandria University", continent: "Africa", country: "Egypt", gpa: 3.3, budget: 7000, rate: "55%", link: "https://alexu.edu.eg", scholarship: "Mediterranean Academic Exchange Award", scholarshipLink: "https://alexu.edu.eg/scholarships" },
    { name: "Kenyatta University", continent: "Africa", country: "Kenya", gpa: 3.0, budget: 5500, rate: "65%", link: "https://ku.ac.ke", scholarship: "KU OAsis OOS Financial Aid", scholarshipLink: "https://ku.ac.ke/financial-aid" },
    { name: "Covenant University", continent: "Africa", country: "Nigeria", gpa: 3.5, budget: 11000, rate: "18%", link: "https://covenantuniversity.edu.ng", scholarship: "David Oyedepo Foundation Scholarship", scholarshipLink: "https://davidoyedepofoundation.org" },

    // ASIA
    { name: "Tsinghua University", continent: "Asia", country: "China", gpa: 3.9, budget: 15000, rate: "2%", link: "https://tsinghua.edu.cn", scholarship: "Schwarzman Scholars Award", scholarshipLink: "https://schwarzmanscholars.org" },
    { name: "University of Tokyo", continent: "Asia", country: "Japan", gpa: 3.8, budget: 22000, rate: "35%", link: "https://u-tokyo.ac.jp", scholarship: "MEXT Japanese Government Fellowship", scholarshipLink: "https://u-tokyo.ac.jp/en/prospective-students/mext.html" },
    { name: "NUS Singapore", continent: "Asia", country: "Singapore", gpa: 3.9, budget: 38000, rate: "5%", link: "https://nus.edu.sg", scholarship: "NUS ASEAN Undergraduate Scholarship", scholarshipLink: "https://nus.edu.sg/financial-aid" },
    { name: "Peking University", continent: "Asia", country: "China", gpa: 3.9, budget: 16000, rate: "2.3%", link: "https://pku.edu.cn", scholarship: "Yenching Academy Fellowship", scholarshipLink: "https://yenchingacademy.pku.edu.cn" },
    { name: "Seoul National University", continent: "Asia", country: "South Korea", gpa: 3.8, budget: 18000, rate: "14%", link: "https://snu.ac.kr", scholarship: "Global Korea Scholarship (GKS)", scholarshipLink: "https://snu.ac.kr/admission/international" },
    { name: "IIT Bombay", continent: "Asia", country: "India", gpa: 4.0, budget: 6000, rate: "1%", link: "https://iitb.ac.in", scholarship: "IITB Heritage Foundation Grant", scholarshipLink: "https://iitbheritagefoundation.org" },
    { name: "HKU", continent: "Asia", country: "Hong Kong", gpa: 3.8, budget: 28000, rate: "10%", link: "https://hku.hk", scholarship: "HKU Foundation Scholarship", scholarshipLink: "https://hku.hk/scholarships" },
    { name: "Kyoto University", continent: "Asia", country: "Japan", gpa: 3.7, budget: 21000, rate: "38%", link: "https://kyoto-u.ac.jp", scholarship: "Kyoto iUP Scholarship Program", scholarshipLink: "https://iup.kyoto-u.ac.jp/scholarship" },
    { name: "KAIST", continent: "Asia", country: "South Korea", gpa: 3.9, budget: 15000, rate: "8%", link: "https://kaist.ac.kr", scholarship: "KAIST International Student Scholarship", scholarshipLink: "https://kaist.ac.kr/en/html/admission" },
    { name: "NTU Singapore", continent: "Asia", country: "Singapore", gpa: 3.8, budget: 36000, rate: "12%", link: "https://ntu.edu.sg", scholarship: "Nanyang Scholarship Framework", scholarshipLink: "https://ntu.edu.sg/nanyang-scholarship" },

    // EUROPE
    { name: "Oxford University", continent: "Europe", country: "UK", gpa: 3.9, budget: 55000, rate: "14%", link: "https://ox.ac.uk", scholarship: "Rhodes Scholarship Program", scholarshipLink: "https://rhodeshouse.ox.ac.uk" },
    { name: "Cambridge University", continent: "Europe", country: "UK", gpa: 3.9, budget: 57000, rate: "15%", link: "https://cam.ac.uk", scholarship: "Gates Cambridge Scholarship", scholarshipLink: "https://gatescambridge.org" },
    { name: "ETH Zurich", continent: "Europe", country: "Switzerland", gpa: 3.9, budget: 15000, rate: "25%", link: "https://ethz.ch", scholarship: "Excellence Scholarship & Opportunity (ESOP)", scholarshipLink: "https://ethz.ch/esop" },
    { name: "Sorbonne", continent: "Europe", country: "France", gpa: 3.6, budget: 18000, rate: "20%", link: "https://sorbonne.fr", scholarship: "Eiffel Excellence Scholarship", scholarshipLink: "https://campusfrance.org/en/eiffel-scholarship" },
    { name: "TUM Munich", continent: "Europe", country: "Germany", gpa: 3.7, budget: 8000, rate: "30%", link: "https://tum.de", scholarship: "DAAD Global Master Excellence Grant", scholarshipLink: "https://daad.de" },
    { name: "University of Amsterdam", continent: "Europe", country: "Netherlands", gpa: 3.7, budget: 24000, rate: "40%", link: "https://uva.nl", scholarship: "Amsterdam Merit Scholarship (AMS)", scholarshipLink: "https://uva.nl/ams" },
    { name: "Sapienza Rome", continent: "Europe", country: "Italy", gpa: 3.3, budget: 11000, rate: "50%", link: "https://uniroma1.it", scholarship: "Italian Government MAECI Grant", scholarshipLink: "https://uniroma1.it/maeci" },
    { name: "Imperial College", continent: "Europe", country: "UK", gpa: 3.8, budget: 52000, rate: "18%", link: "https://imperial.ac.uk", scholarship: "President's Undergraduate Scholarships", scholarshipLink: "https://imperial.ac.uk/presidents-scholarships" },
    { name: "Heidelberg University", continent: "Europe", country: "Germany", gpa: 3.6, budget: 6000, rate: "28%", link: "https://uni-heidelberg.de", scholarship: "Amirana Scholarship Matrix", scholarshipLink: "https://uni-heidelberg.de/amirana" },
    { name: "University of Bologna", continent: "Europe", country: "Italy", gpa: 3.4, budget: 12000, rate: "45%", link: "https://unibo.it", scholarship: "Unibo Action 1 & 2 Waiver Package", scholarshipLink: "https://unibo.it/action-waivers" },

    // NORTH AMERICA
    { name: "Harvard", continent: "North America", country: "USA", gpa: 4.0, budget: 82000, rate: "4%", link: "https://harvard.edu", scholarship: "Harvard Financial Aid Initiative (HFAI)", scholarshipLink: "https://college.harvard.edu/financial-aid" },
    { name: "Stanford", continent: "North America", country: "USA", gpa: 4.0, budget: 85000, rate: "3.9%", link: "https://stanford.edu", scholarship: "Knight-Hennessy Scholars Program", scholarshipLink: "https://knight-hennessy.stanford.edu" },
    { name: "University of Toronto", continent: "North America", country: "Canada", gpa: 3.7, budget: 45000, rate: "43%", link: "https://utoronto.ca", scholarship: "Lester B. Pearson International Scholarship", scholarshipLink: "https://future.utoronto.ca/pearson" },
    { name: "UNAM", continent: "North America", country: "Mexico", gpa: 3.5, budget: 5000, rate: "10%", link: "https://unam.mx", scholarship: "UNAM High Academic Performance Fellowship", scholarshipLink: "https://unam.mx/becas" },
    { name: "MIT", continent: "North America", country: "USA", gpa: 4.0, budget: 81000, rate: "4.1%", link: "https://mit.edu", scholarship: "MIT Need-Based Institutional Grant System", scholarshipLink: "https://sfs.mit.edu" },
    { name: "McGill University", continent: "North America", country: "Canada", gpa: 3.8, budget: 38000, rate: "46%", link: "https://mcgill.ca", scholarship: "McCall MacBain Scholars Program", scholarshipLink: "https://mccallmacbainscholars.org" },
    { name: "UBC", continent: "North America", country: "Canada", gpa: 3.6, budget: 41000, rate: "50%", link: "https://ubc.ca", scholarship: "International Major Entrance Scholarship (IMES)", scholarshipLink: "https://you.ubc.ca/financial-scholarships" },
    { name: "Tec de Monterrey", continent: "North America", country: "Mexico", gpa: 3.6, budget: 26000, rate: "35%", link: "https://tec.mx", scholarship: "Becas Líderes del Mañana (100% Waiver)", scholarshipLink: "https://lideresdelmanana.itesm.mx" },
    { name: "Yale University", continent: "North America", country: "USA", gpa: 3.9, budget: 80000, rate: "6%", link: "https://yale.edu", scholarship: "Yale Pell-Match & Global Grants Fund", scholarshipLink: "https://finaid.yale.edu" },
    { name: "IPN Mexico", continent: "North America", country: "Mexico", gpa: 3.4, budget: 4000, rate: "12%", link: "https://ipn.mx", scholarship: "Beca Institucional de Aprovechamiento Académico", scholarshipLink: "https://ipn.mx/becas" },

    // OCEANIA
    { name: "University of Melbourne", continent: "Oceania", country: "Australia", gpa: 3.7, budget: 35000, rate: "70%", link: "https://unimelb.edu.au", scholarship: "Melbourne Global Graduate Scholarship", scholarshipLink: "https://scholarships.unimelb.edu.au" },
    { name: "University of Auckland", continent: "Oceania", country: "New Zealand", gpa: 3.6, budget: 32000, rate: "45%", link: "https://auckland.ac.nz", scholarship: "University of Auckland International Student Excellence", scholarshipLink: "https://auckland.ac.nz/international-scholarships" },
    { name: "ANU", continent: "Oceania", country: "Australia", gpa: 3.8, budget: 37000, rate: "35%", link: "https://anu.edu.au", scholarship: "ANU Chancellor's International Scholarship", scholarshipLink: "https://anu.edu.au/study/scholarships" },
    { name: "University of Sydney", continent: "Oceania", country: "Australia", gpa: 3.7, budget: 39000, rate: "30%", link: "https://sydney.edu.au", scholarship: "Vice-Chancellor's International Scholarships", scholarshipLink: "https://sydney.edu.au/scholarships" },
    { name: "University of Queensland", continent: "Oceania", country: "Australia", gpa: 3.5, budget: 34000, rate: "40%", link: "https://uq.edu.au", scholarship: "UQ Destination Australia Scholarship Matrix", scholarshipLink: "https://scholarships.uq.edu.au" },
    { name: "UNSW Sydney", continent: "Oceania", country: "Australia", gpa: 3.6, budget: 38000, rate: "60%", link: "https://unsw.edu.au", scholarship: "UNSW International Scientia Coursework Award", scholarshipLink: "https://scholarships.unsw.edu.au" },
    { name: "Monash University", continent: "Oceania", country: "Australia", gpa: 3.5, budget: 36000, rate: "40%", link: "https://monash.edu", scholarship: "Monash International Leadership Scholarship", scholarshipLink: "https://monash.edu/scholarships" },
    { name: "University of Otago", continent: "Oceania", country: "New Zealand", gpa: 3.4, budget: 29000, rate: "50%", link: "https://otago.ac.nz", scholarship: "Otago International Excellence Framework", scholarshipLink: "https://otago.ac.nz/scholarships" },
    { name: "Victoria Wellington", continent: "Oceania", country: "New Zealand", gpa: 3.3, budget: 28000, rate: "64%", link: "https://wgtn.ac.nz", scholarship: "Wellington Global Graduate Award", scholarshipLink: "https://wgtn.ac.nz/scholarships" },
    { name: "USP Fiji", continent: "Oceania", country: "Fiji", gpa: 3.0, budget: 12000, rate: "75%", link: "https://usp.ac.fj", scholarship: "USP Regional Student Assistance Waiver", scholarshipLink: "https://usp.ac.fj/scholarships" },

    // SOUTH AMERICA
    { name: "USP Brazil", continent: "South America", country: "Brazil", gpa: 3.7, budget: 0, rate: "15%", link: "https://usp.br", scholarship: "USP International Scientific Initiation Grant", scholarshipLink: "https://usp.br/international" },
    { name: "UBA Argentina", continent: "South America", country: "Argentina", gpa: 3.5, budget: 0, rate: "100%", link: "http://uba.ar", scholarship: "UBA Academic Merit Fee Exemption Package", scholarshipLink: "http://uba.ar/becas" },
    { name: "University of Chile", continent: "South America", country: "Chile", gpa: 3.6, budget: 12000, rate: "20%", link: "https://uchile.cl", scholarship: "Beca Universidad de Chile Framework", scholarshipLink: "https://uchile.cl/becas" },
    { name: "Uniandes", continent: "South America", country: "Colombia", gpa: 3.7, budget: 19000, rate: "22%", link: "https://uniandes.edu.co", scholarship: "Beca Quiero Estudiar Endowment System", scholarshipLink: "https://uniandes.edu.co/quiero-estudiar" },
    { name: "PUC Chile", continent: "South America", country: "Chile", gpa: 3.7, budget: 15000, rate: "18%", link: "https://uc.cl", scholarship: "Beca de Excelencia Académica PUC", scholarshipLink: "https://uc.cl/aranceles-y-becas" },
    { name: "Unicamp", continent: "South America", country: "Brazil", gpa: 3.6, budget: 0, rate: "12%", link: "https://unicamp.br", scholarship: "Unicamp SAE Research Assistance Grant", scholarshipLink: "https://sae.unicamp.br" },
    { name: "UNAL Colombia", continent: "South America", country: "Colombia", gpa: 3.5, budget: 2000, rate: "10%", link: "https://unal.edu.co", scholarship: "UNAL Best Graduate Exemption Pathway", scholarshipLink: "https://unal.edu.co/becas" },
    { name: "San Marcos Peru", continent: "South America", country: "Peru", gpa: 3.4, budget: 1500, rate: "8%", link: "https://unmsm.edu.pe", scholarship: "San Marcos Institutional Food & Tuition Subsidies", scholarshipLink: "https://unmsm.edu.pe/ogbe" },
    { name: "PUCP Peru", continent: "South America", country: "Peru", gpa: 3.5, budget: 11000, rate: "30%", link: "https://pucp.edu.pe", scholarship: "Beca R.P. Jorge Dintilhac PUCP Framework", scholarshipLink: "https://pucp.edu.pe/becas" },
    { name: "UFRJ Brazil", continent: "South America", country: "Brazil", gpa: 3.5, budget: 0, rate: "14%", link: "https://ufrj.br", scholarship: "UFRJ Institutional Student Assistance Matrix", scholarshipLink: "https://ufrj.br/auxilios" },

    // ANTARCTICA
    { name: "McMurdo Station", continent: "Antarctica", country: "Ross Island", gpa: 3.9, budget: 0, rate: "1.2%", link: "https://usap.gov", scholarship: "NSF Polar Research Field Fellowship", scholarshipLink: "https://nsf.gov" },
    { name: "Amundsen-Scott", continent: "Antarctica", country: "South Pole", gpa: 4.0, budget: 0, rate: "0.5%", link: "https://usap.gov", scholarship: "IceCube Neutrino Observatory Research Grant", scholarshipLink: "https://usap.gov" },
    { name: "Palmer Station", continent: "Antarctica", country: "Anvers Island", gpa: 3.8, budget: 0, rate: "3%", link: "https://usap.gov", scholarship: "Palmer Marine Ecosystems Analysis Grant", scholarshipLink: "https://usap.gov" },
    { name: "Rothera", continent: "Antarctica", country: "Adelaide Island", gpa: 3.9, budget: 0, rate: "2%", link: "https://bas.ac.uk", scholarship: "British Antarctic Survey Elite Fellowship", scholarshipLink: "https://bas.ac.uk" },
    { name: "Halley VI", continent: "Antarctica", country: "Brunt Ice", gpa: 4.0, budget: 0, rate: "0.8%", link: "https://bas.ac.uk", scholarship: "Atmospheric Field Infrastructure Stipend", scholarshipLink: "https://bas.ac.uk" },
    { name: "Showa Station", continent: "Antarctica", country: "East Antarctica", gpa: 3.9, budget: 0, rate: "1.5%", link: "https://nipr.ac.jp", scholarship: "Japanese National Polar Institute Fellowship", scholarshipLink: "https://nipr.ac.jp" },
    { name: "Concordia Outpost", continent: "Antarctica", country: "Dome C", gpa: 3.9, budget: 0, rate: "1.1%", link: "https://esa.int", scholarship: "ESA Deep Space Analog Simulation Grant", scholarshipLink: "https://esa.int" },
    { name: "Vostok Lab", continent: "Antarctica", country: "Lake Vostok", gpa: 4.0, budget: 0, rate: "0.4%", link: "http://aari.ru", scholarship: "AARI Subglacial Core Exploration Stipend", scholarshipLink: "http://aari.ru" },
    { name: "Princess Elisabeth", continent: "Antarctica", country: "Utsteinen", gpa: 3.8, budget: 0, rate: "4%", link: "http://antarcticstation.org", scholarship: "International Polar Foundation Zero-Emission Fellowship", scholarshipLink: "http://antarcticstation.org" },
    { name: "Bharati Compound", continent: "Antarctica", country: "Larsemann Hills", gpa: 3.7, budget: 0, rate: "5%", link: "http://ncpor.res.in", scholarship: "NCPOR Indian Polar Science Research Grant", scholarshipLink: "http://ncpor.res.in" }
];

/* --- System Identity & Single-Page Engine Initialization --- */
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetedNavBtn = document.getElementById(`btn-${pageId}`);
    if (targetedNavBtn) targetedNavBtn.classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    document.getElementById('display-name').innerText = name;
    document.getElementById('prof-name').innerText = name;
    document.getElementById('prof-email').innerText = document.getElementById('userEmail').value;
    document.getElementById('prof-major').innerText = document.getElementById('userMajor').value || "Undecided Major";
    
    const linkedIn = document.getElementById('userLinkedin').value;
    const linkedInBtn = document.getElementById('prof-link');
    if(linkedIn) { linkedInBtn.href = linkedIn; linkedInBtn.style.display = "inline-block"; }
    
    document.getElementById('mainNav').style.display = "flex";
    showPage('home');
    populateCountries();
    renderUniversities();
}

function logout() {
    document.getElementById('mainNav').style.display = "none";
    showPage('auth');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

/* --- Dynamic Filter Engine & Matrix Rendering --- */
function populateCountries() {
    const continent = document.getElementById('continentFilter').value;
    const countryFilter = document.getElementById('countryFilter');
    const countries = new Set();
    
    universityData.forEach(uni => {
        if (continent === 'all' || uni.continent === continent) {
            countries.add(uni.country);
        }
    });
    
    countryFilter.innerHTML = '<option value="all">All Available Sectors</option>';
    countries.forEach(country => {
        countryFilter.innerHTML += `<option value="${country}">${country}</option>`;
    });
}

function updateCountrySelect() {
    populateCountries();
    renderUniversities();
}

function renderUniversities() {
    const continent = document.getElementById('continentFilter').value;
    const country = document.getElementById('countryFilter').value;
    const maxBudget = parseInt(document.getElementById('budgetRange').value);
    const userGpa = parseFloat(document.getElementById('userGpa').value) || 0.0;
    
    document.getElementById('budgetLabel').innerText = `$${maxBudget.toLocaleString()}`;
    const container = document.getElementById('university-grid');
    container.innerHTML = '';
    
    const filteredUnis = universityData.filter(uni => {
        if (continent !== 'all' && uni.continent !== continent) return false;
        if (country !== 'all' && uni.country !== country) return false;
        if (uni.budget > maxBudget) return false;
        return true;
    });
    
    filteredUnis.forEach(uni => {
        const isMatch = userGpa >= uni.gpa;
        const badgeClass = isMatch ? 'match' : 'reach';
        const badgeText = isMatch ? 'Matched' : 'Reach Target';
        
        const cardHTML = `
            <div class="uni-card glass">
                <span class="badge ${badgeClass}">${badgeText}</span>
                <h3>${uni.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin: 4px 0 16px 0;">${uni.country}, ${uni.continent}</p>
                
                <div style="margin: 14px 0; font-size: 0.9rem; line-height: 1.6;">
                    <div>📊 Minimum GPA: <b>${uni.gpa}</b></div>
                    <div>💰 Tuition Fee: <b>${uni.budget === 0 ? 'Free / Fully Funded' : '$' + uni.budget.toLocaleString()}</b></div>
                    <div>🎯 Acceptance: <b>${uni.rate}</b></div>
                </div>
                
                <!-- Scholarship Embedded Module -->
                <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed var(--glass-border);">
                    <label style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); font-weight:700;">Institutional Scholarship</label>
                    <div style="font-weight: 500; font-size: 0.9rem; margin-top: 2px; color: var(--text-main);">${uni.scholarship}</div>
                    <a href="${uni.scholarshipLink}" target="_blank" style="display: inline-block; font-size: 0.8rem; margin-top: 6px; color: var(--accent); text-decoration: none; font-weight: 600;">
                        Apply For Scholarship ↗
                    </a>
                </div>
                
                <a href="${uni.link}" target="_blank" style="text-decoration: none; display: block;">
                    <button class="btn-glow" style="margin-top: 20px;">Visit Portal</button>
                </a>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

/* --- Portfolio Profile Matrix Controls --- */
function addAchievement() {
    const input = document.getElementById('achievementInput');
    if(!input.value.trim()) return;
    const list = document.getElementById('achievementList');
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
    updateProgress(15);
}

function addRecommendation() {
    const author = document.getElementById('recAuthor').value.trim();
    const text = document.getElementById('recText').value.trim();
    if(!author || !text) return;
    
    const feed = document.getElementById('recommendationFeed');
    const card = document.createElement('div');
    card.className = 'endorsement-card';
    card.innerHTML = `<p>"${text}"</p><span class="author">— ${author}</span>`;
    feed.prepend(card);
    
    document.getElementById('recAuthor').value = '';
    document.getElementById('recText').value = '';
    updateProgress(20);
}

function updateProgress(amount) {
    const bar = document.getElementById('progressBar');
    const txt = document.getElementById('progressTxt');
    let current = parseInt(bar.style.width);
    let updated = Math.min(current + amount, 100);
    bar.style.width = updated + '%';
    txt.innerText = updated + '%';
}
