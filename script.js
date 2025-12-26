// 1. Data
const paragraphs = [
    "The morning sun peeked over the horizon, casting a golden glow across the sleepy village. Birds began to chirp, welcoming the new day with a symphony of melodies that echoed through the trees. The villagers slowly stirred, the smell of fresh bread wafting from the local bakery, signaling that breakfast was nearly ready. It was a peaceful moment, one that seemed to suspend time before the hustle and bustle of daily life took over. In these quiet seconds, the world felt perfect, a harmonious blend of nature and humanity coexisting in a delicate balance that was rarely disturbed by the chaos outside.",

    "Technology has revolutionized the way we communicate, breaking down geographical barriers that once isolated communities. With the click of a button, we can instantly share thoughts, images, and videos with someone on the other side of the globe. However, this convenience comes with a price, as the digital world often distracts us from the physical reality right in front of us. Finding a balance between our online presence and our real-world connections is essential for mental well-being. We must remember to look up from our screens and appreciate the beauty of the tangible world that surrounds us every single day.",

    "The old library was a sanctuary of silence and knowledge, with shelves that stretched all the way to the high, vaulted ceiling. Dust motes danced in the shafts of light filtering through the stained-glass windows, illuminating leather-bound books that held centuries of wisdom. The smell of old paper and ink was intoxicating to those who loved to read, a scent that promised adventure and mystery. Every book was a doorway to a different world, waiting for a curious mind to turn the page and step inside. It was a place where time stood still, and the only thing that mattered was the story.",

    "Space exploration represents the pinnacle of human curiosity and engineering, pushing the boundaries of what is possible. Astronauts train for years to endure the harsh conditions of zero gravity, risking their lives to further our understanding of the universe. From the moon landing to the rovers exploring the dusty surface of Mars, every mission brings us closer to answering the fundamental question of whether we are alone. The vastness of the cosmos is both terrifying and beautiful, reminding us of how small we are in the grand scheme of things, yet how significant our drive to explore truly is.",

    "The sound of rain tapping against the windowpane creates a soothing rhythm that is perfect for reading or deep thought. Outside, the world is washed in grey, the colors muted by the steady downpour that nourishes the earth. Puddles form on the sidewalks, reflecting the streetlights like shattered mirrors, while people rush by under colorful umbrellas. There is a certain comfort in being indoors during a storm, wrapped in a warm blanket with a hot cup of tea. It is a time to slow down, to listen to the natural music of the weather, and to simply be present in the moment.",

    "Coding is often compared to solving a complex puzzle, where every piece must fit perfectly for the picture to be complete. A single missing semicolon or a misspelled variable can cause the entire program to crash, leading to hours of frustration. Yet, there is no feeling quite like the satisfaction of finally fixing a bug and watching the code run smoothly. It requires patience, logic, and a creative mind to structure algorithms that are efficient and clean. For developers, the screen is a canvas, and code is the paint used to build the digital infrastructure of our modern world.",

    "The mountain climber gripped the rock face, his fingers searching for a secure hold as the wind whipped around him. Below, the valley was a patchwork quilt of green fields and blue rivers, a breathtaking view that made the arduous climb worth every struggle. His muscles burned with exertion, but his focus remained sharp, his mind calculating every move with precision. Reaching the summit was not just about conquering the mountain, but about conquering his own fears and limitations. Standing at the top, breathing in the thin, crisp air, he felt a profound sense of achievement that only nature could provide.",

    "Jazz music is a conversation between instruments, a spontaneous exchange of ideas that relies heavily on improvisation. The saxophone might lead with a sorrowful melody, only for the trumpet to respond with a bright, energetic burst of notes. The drummer keeps the heartbeat of the song, adding texture and drive, while the piano weaves harmonious chords that tie everything together. It is a genre that celebrates individual expression within a collective effort, creating a unique experience every time it is played. To listen to jazz is to witness the creative process in real-time, unpredictable and undeniably alive.",

    "In the heart of the bustling city, the traffic moved like a sluggish river of steel and glass. Horns blared in a chaotic symphony of frustration, while pedestrians weaved through the gridlock with practiced ease. Skyscrapers towered overhead, blocking out the sun and creating artificial canyons where the wind howled. Despite the noise and the crowds, there was an electric energy to the city, a pulse that drew people in from all walks of life. It was a place of opportunity and anonymity, where anyone could reinvent themselves if they had the courage to step into the fast lane.",

    "Gardening is a lesson in patience and hope, a practice that connects us directly to the cycle of life. Planting a seed requires faith that, with enough water and sunlight, it will eventually break through the soil and grow. Watching a seedling transform into a flourishing plant is a rewarding experience that teaches us about resilience and care. The garden changes with the seasons, offering a visual reminder of the passage of time and the impermanence of all living things. It is a peaceful retreat where one can get their hands dirty and nurture something beautiful into existence.",

    "Artificial Intelligence is rapidly evolving, changing industries from healthcare to finance with unprecedented speed. Algorithms can now diagnose diseases with higher accuracy than some doctors and predict market trends in milliseconds. However, the rise of AI also raises ethical questions about privacy, employment, and the nature of consciousness itself. As we integrate these intelligent systems into our daily lives, we must ensure they are designed to assist humanity rather than replace it. The future will depend on our ability to collaborate with machines, leveraging their computational power while maintaining the empathy and judgment that are uniquely human.",

    "The ocean covers more than seventy percent of our planet, yet much of it remains unexplored and shrouded in mystery. Deep beneath the waves, bioluminescent creatures light up the darkness, thriving in environments that would crush a human in seconds. The coral reefs, vibrant and teeming with life, act as the rainforests of the sea, supporting a diverse ecosystem. However, pollution and climate change threaten these delicate habitats, putting countless species at risk. Protecting the ocean is not just about saving marine life; it is about preserving the health of the entire global environment for future generations.",

    "Architecture is the art of shaping space, blending functionality with aesthetic beauty to create structures that define our skylines. From the ancient pyramids to modern glass skyscrapers, buildings tell the story of the civilizations that constructed them. A great architect considers not just the visual impact, but how light enters a room, how sound travels, and how people will move through the space. It is a discipline that requires a deep understanding of mathematics, physics, and human psychology. When done well, architecture inspires us, providing shelter while simultaneously elevating our spirits through form and design.",

    "Cooking is a form of chemistry that happens in the kitchen, where heat and time transform raw ingredients into something delicious. A chef must understand how flavors balance, how acids cut through fat, and how texture affects the dining experience. It is a sensory art, appealing to sight, smell, and taste all at once. Sharing a meal is one of the oldest human traditions, a way to bond with family and friends over a table laden with food. Whether it is a simple stew or a gourmet feast, cooking is an expression of love and creativity.",

    "Running a marathon is a test of physical endurance and mental fortitude that pushes the human body to its absolute limits. The training takes months of dedication, waking up early to run miles before the rest of the world is awake. On race day, the adrenaline carries runners through the first half, but the real challenge begins when fatigue sets in. It is a battle against the desire to stop, requiring a mindset that refuses to give up. Crossing the finish line is a moment of pure triumph, a realization that the impossible is actually achievable.",

    "Photography is the art of capturing a fleeting moment and preserving it forever within a static image. A photographer learns to see the world differently, noticing the play of light and shadow, the composition of shapes, and the emotion in a face. It is not just about having an expensive camera; it is about having an eye for the story unfolding in front of the lens. A single photograph can evoke powerful memories, transport us to distant places, or reveal truths that were previously unseen. It allows us to freeze time and hold onto pieces of the past.",

    "The desert is a landscape of extremes, where scorching heat during the day gives way to freezing temperatures at night. To the untrained eye, it may appear barren, but it is actually full of life adapted to survive in harsh conditions. Cacti store water in their thick skins, and nocturnal animals emerge only when the sun goes down to hunt. The shifting sand dunes create a mesmerizing, ever-changing topography that is sculpted by the wind. There is a stark, quiet beauty in the desert, a sense of solitude that is both intimidating and deeply peaceful.",

    "Quantum physics challenges our understanding of reality, describing a world where particles can exist in two places at once. Concepts like entanglement and superposition seem to contradict the laws of the macroscopic world we interact with daily. Scientists work tirelessly to unravel these mysteries, building massive particle colliders to smash atoms together at near-light speeds. The discoveries made in this field could lead to revolutionary technologies, such as quantum computers that solve problems in seconds that would take current supercomputers thousands of years. It is a frontier of science that proves the universe is stranger than we ever imagined.",

    "History is not just a collection of dates and names; it is the complex tapestry of human experience woven over millennia. By studying the past, we gain insight into the mistakes and triumphs that have shaped our current society. It teaches us empathy for those who lived in different times and circumstances, reminding us that human nature remains largely unchanged. Ruins of ancient civilizations stand as silent witnesses to the rise and fall of empires. Understanding history helps us navigate the present and make more informed decisions for the future, hopefully breaking the cycle of repeating past errors.",

    "Winter transforms the landscape into a wonderland of white, covering the ground in a soft blanket of snow. The air is crisp and cold, biting at exposed skin, while breath forms misty clouds in the atmosphere. Trees stand bare and skeletal against the grey sky, their branches accumulating layers of frost. It is a season of dormancy, where nature rests and prepares for the rebirth of spring. Despite the cold, there is warmth to be found in gathering around a fireplace, drinking hot cocoa, and enjoying the stillness that winter brings to the world."
];

// 2. Variables
let timer = 0;
let interval = null;
let isPlaying = false;
let totalErrors = 0;
let currentErrors = 0;

// DOM Elements
const timeSelect = document.getElementById('time-select');
const usernameInput = document.getElementById('username');
const setupArea = document.getElementById('setup-area');
const gameArea = document.getElementById('game-area');
const quoteDisplay = document.getElementById('quote-display');
const textInput = document.getElementById('text-input');
const timeDisplay = document.getElementById('time-display');
const wpmDisplay = document.getElementById('wpm-display');
const accuracyDisplay = document.getElementById('accuracy-display'); // New
const restartBtn = document.getElementById('restart-btn');
const leaderboardList = document.getElementById('leaderboard-list');

// Initialize
document.addEventListener('DOMContentLoaded', updateLeaderboardUI);

// 3. Start Game
function startGame() {
    const username = usernameInput.value.trim();
    if (!username) {
        alert("Please enter a name first!");
        return;
    }

    // Reset UI
    setupArea.style.display = 'none';
    gameArea.style.display = 'block';
    restartBtn.style.display = 'none';
    textInput.value = '';
    textInput.disabled = false;
    textInput.focus();
    
    wpmDisplay.innerText = 0;
    accuracyDisplay.innerText = 100;
    totalErrors = 0;

    // Select random text and split into spans
    const text = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    quoteDisplay.innerHTML = ''; // Clear old text
    
    // Create a <span> for each character in the quote
    text.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplay.appendChild(characterSpan);
    });

    // Set Timer
    timer = parseInt(timeSelect.value);
    timeDisplay.innerText = timer;

    // Start Logic
    isPlaying = true;
    startTimer();
}

function startTimer() {
    interval = setInterval(() => {
        timer--;
        timeDisplay.innerText = timer;
        
        if (timer === 0) {
            endGame();
        }
    }, 1000);
}

// 4. Input Handling (The Core Logic)
textInput.addEventListener('input', () => {
    if(!isPlaying) return;

    const arrayQuote = quoteDisplay.querySelectorAll('span');
    const arrayValue = textInput.value.split('');

    let correctChars = 0;
    currentErrors = 0; // Reset for this specific pass

    // Loop through every character in the quote
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];

        if (character == null) {
            // Character hasn't been typed yet
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
        } 
        else if (character === characterSpan.innerText) {
            // Correct character
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
            correctChars++;
        } 
        else {
            // Incorrect character
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            currentErrors++;
        }
    });

    // Update Stats
    calculateStats(correctChars, arrayValue.length);
});

function calculateStats(correctChars, totalTyped) {
    // WPM Calculation (Standard: 5 characters = 1 word)
    const timeElapsed = parseInt(timeSelect.value) - timer;
    if(timeElapsed > 0) {
        const wpm = Math.round((correctChars / 5) / (timeElapsed / 60));
        wpmDisplay.innerText = wpm < 0 || !wpm ? 0 : wpm;
    }

    // Accuracy Calculation
   def calculate_accuracy(correct, total):
    if total == 0:
        return 0.0 # Avoid division by zero
    
    accuracy = (correct / total) * 100
    return round(accuracy, 2)


// 5. End Game
function endGame() {
    clearInterval(interval);
    isPlaying = false;
    textInput.disabled = true;
    restartBtn.style.display = 'inline-block';

    const finalWPM = wpmDisplay.innerText;
    const finalAcc = accuracyDisplay.innerText;
    const username = usernameInput.value;

    alert(`Time's up! \nWPM: ${finalWPM} \nAccuracy: ${finalAcc}%`);
    saveScore(username, finalWPM, finalAcc);
}

// 6. Leaderboard
function saveScore(name, score, accuracy) {
    let scores = JSON.parse(localStorage.getItem('typeScores')) || [];
    
    // Save WPM and Accuracy
    scores.push({ name: name, score: parseInt(score), accuracy: parseInt(accuracy) });
    
    // Sort by WPM (descending)
    scores.sort((a, b) => b.score - a.score);
    
    localStorage.setItem('typeScores', JSON.stringify(scores.slice(0, 10)));
    updateLeaderboardUI();
}

function updateLeaderboardUI() {
    const scores = JSON.parse(localStorage.getItem('typeScores')) || [];
    leaderboardList.innerHTML = scores.map((s, index) => 
        `<li>
            <span>#${index + 1} ${s.name}</span>
            <span>
                <strong>${s.score} WPM</strong> 
                <small>(${s.accuracy}%)</small>
            </span>
        </li>`
    ).join('');
}

function clearLeaderboard() {
    if(confirm("Clear leaderboard?")) {
        localStorage.removeItem('typeScores');
        updateLeaderboardUI();
    }
}

function resetGame() {
    gameArea.style.display = 'none';
    setupArea.style.display = 'block';
    usernameInput.value = '';

}
