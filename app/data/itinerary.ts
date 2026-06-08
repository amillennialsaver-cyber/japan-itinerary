export interface Day {
  day: number;
  date: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  emoji: string;
  tag: string;
  tagColor: string;
  highlights: string[];
  morning: { title: string; desc: string };
  afternoon: { title: string; desc: string };
  evening: { title: string; desc: string };
  eat: string;
  tip: string;
  transport?: string;
}

export const itinerary: Day[] = [
  {
    day: 1, date: "14 Mar", city: "Tokyo — Arrival", region: "Tokyo",
    lat: 35.6762, lng: 139.6503, emoji: "✈️", tag: "Arrival", tagColor: "#1A2744",
    highlights: ["Check in & recover", "Shinjuku first night"],
    morning: { title: "Arrive at Narita / Haneda", desc: "Land, clear customs, and take the Narita Express or Limousine Bus straight to Shinjuku. Check into your hotel and freshen up — the journey will take it out of you." },
    afternoon: { title: "Gentle explore: Shinjuku", desc: "Walk off the jet lag around Shinjuku. Pop into Takashimaya Times Square for a browse, grab a coffee and watch the city buzz around you. Keep it low key." },
    evening: { title: "First ramen dinner", desc: "Head to Omoide Yokocho ('Memory Lane') — a tiny alley of smoky yakitori and ramen stalls behind Shinjuku station. Order tonkotsu ramen and a cold Sapporo. Welcome to Japan." },
    eat: "Omoide Yokocho, Shinjuku", tip: "Get a Suica card at the airport — it's a rechargeable transit card that works on every train, bus, and even in convenience stores.", transport: "Narita Express (¥3,070) or Limousine Bus (¥3,200)"
  },
  {
    day: 2, date: "15 Mar", city: "Tokyo — Shibuya & Harajuku", region: "Tokyo",
    lat: 35.6580, lng: 139.7016, emoji: "🏙️", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Shibuya Crossing", "Meiji Shrine", "Takeshita Street"],
    morning: { title: "Meiji Shrine", desc: "Start with the serene forested path to Meiji Shrine in Harajuku — one of Tokyo's most peaceful escapes. Arrive early before the crowds and walk the gravel path through towering cedars." },
    afternoon: { title: "Harajuku & Omotesando", desc: "Wander wild Takeshita Street for colourful street food and fashion, then stroll the leafy Omotesando boulevard — Tokyo's answer to the Champs-Élysées — for designer shops and architecture." },
    evening: { title: "Shibuya Crossing & Pokemon Centre", desc: "Head down to Shibuya for golden hour. Watch the famous scramble crossing from the Starbucks terrace above, then dive into the madness yourself. Don't miss the Pokemon Centre Shibuya on the 6th floor of Shibuya Parco — an incredible shop with exclusive merchandise you can't get in the UK." },
    eat: "Ichiran Ramen Shibuya — solo ramen booths, iconic experience. Or Afuri ramen in Harajuku for yuzu-infused shio ramen", tip: "While in Harajuku, visit the Tamagotchi Factory in the Harajuku Tokyu Plaza building — create your own custom Tamagotchi. Book online in advance as slots fill quickly. Also: Shibuya Sky rooftop is stunning at sunset — book ahead."
  },
  {
    day: 3, date: "16 Mar", city: "Tokyo — Asakusa & Ueno", region: "Tokyo",
    lat: 35.7148, lng: 139.7967, emoji: "⛩️", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Senso-ji Temple", "Nakamise shopping street", "Ueno Park"],
    morning: { title: "Senso-ji Temple, Asakusa", desc: "Tokyo's oldest and most famous temple. Go early (7am) to beat the tour groups — the Kaminarimon gate and Nakamise shopping street leading to the main hall is magical in the morning mist. Nearby Tokyo Solamachi (Tokyo Skytree mall) has a wonderful Sylvanian Families flagship store — *optional detour if you're fans, with exclusive Japan-only sets*." },
    afternoon: { title: "Ueno Park & Museums", desc: "A short walk to Ueno Park. If cherry blossoms are starting, this is ground zero. Visit the Tokyo National Museum for world-class Japanese art, or the Ueno Zoo if you fancy a panda sighting." },
    evening: { title: "Akihabara — GameBoy Workshop & Electric Town", desc: "Hop on the Yamanote line to Akihabara. Head to the Custom GameBoy Workshop (book online in advance) where you can build and customise your own GameBoy from scratch — an incredible hands-on experience. Then explore the neon-drenched electronics district and try a maid café." },
    eat: "Asakusa Imahan — famous sukiyaki & shabu-shabu near Senso-ji. Also try Kappabashi street nearby for kitchen tool shopping and free samples", tip: "Book the Custom GameBoy Workshop at gameboy.tokyo well in advance — slots fill up fast and it takes 2-3 hours. A genuinely unique Tokyo experience."
  },
  {
    day: 4, date: "17 Mar", city: "Tokyo — Shinjuku & Ginza", region: "Tokyo",
    lat: 35.6895, lng: 139.6917, emoji: "🌆", tag: "City", tagColor: "#1A2744",
    highlights: ["Tokyo Metropolitan Govt building views", "Ginza shopping", "Kabukicho"],
    morning: { title: "Sumo Tournament or Observation Deck", desc: "If you're visiting during a Tokyo sumo tournament (January, May, or September basho — check dates), this is a must. Spend the morning at Ryogoku Kokugikan watching the sport in all its ceremony. Alternatively, head to the free 45th-floor observation deck of Tokyo Metropolitan Government Building for panoramic city views." },
    afternoon: { title: "Ginza & Uniqlo Flagship", desc: "Walk the upscale Ginza district — Japan's answer to Bond Street. Don't miss the Uniqlo Ginza flagship — 12 floors of incredible Japanese-quality basics, exclusives, and UT collaborations you won't find in the UK. Also visit Itoya stationery (8 floors of beautiful paper goods) and browse the teamLab digital art space." },
    evening: { title: "Shinjuku Golden Gai", desc: "End the night in Golden Gai — a labyrinth of over 200 tiny bars, each seating around 8 people. Each one has its own theme and character. Just pick a bar with a light on and duck in." },
    eat: "Sushi Yoshitake (Michelin 3-star, book months ahead) or Uobei Shibuya for fun conveyor belt contrast. For a budget treat: Tsukiji Outer Market for fresh sushi at stalls", tip: "Golden Gai bars often have a small cover charge (¥500-1000). It's worth it — these are some of the most unique drinking experiences in the world."
  },
  {
    day: 5, date: "18 Mar", city: "Tokyo — Odaiba & TeamLab", region: "Tokyo",
    lat: 35.6267, lng: 139.7759, emoji: "🎨", tag: "Art", tagColor: "#6B3FA0",
    highlights: ["teamLab Borderless", "Odaiba waterfront", "Palette Town"],
    morning: { title: "teamLab Planets, Toyosu", desc: "Book in advance — this immersive digital art museum is one of the most spectacular things you'll do in Japan. Wade through water rooms, walk through flower gardens, and lose yourselves in infinity mirrors." },
    afternoon: { title: "Odaiba artificial island", desc: "Take the driverless Yurikamome monorail to Odaiba — a futuristic island in Tokyo Bay. See the Rainbow Bridge, the life-size Gundam statue, and the retro-futuristic shopping malls." },
    evening: { title: "Sunset over Tokyo Bay", desc: "Watch the sun set behind Rainbow Bridge from Odaiba beach — a surreal mix of sandy beach and city skyline. Head to DiverCity Tokyo for dinner with the Gundam watching over you. *Optional: Yomiuri Land theme park and PokePark Kanto are in the Tama area (40 mins from central Tokyo) — perfect for a full day trip if you want to swap this day*." },
    eat: "Bills Odaiba for incredible bay-view brunch. Or Trex Odaiba for all-you-can-eat wagyu — genuinely outstanding value at ¥4,000", tip: "teamLab tickets MUST be booked weeks in advance online. Don't assume you can walk in — they consistently sell out."
  },
  {
    day: 6, date: "19 Mar", city: "Nikko Day Trip", region: "Tokyo",
    lat: 36.7594, lng: 139.5983, emoji: "🏯", tag: "Day Trip", tagColor: "#2D6A4F",
    highlights: ["Tosho-gu Shrine", "Shinkyo Bridge", "Kegon Falls"],
    morning: { title: "Train to Nikko", desc: "Take the Tobu Nikko Line (2hrs from Asakusa, ~¥1,400) to Nikko — a UNESCO World Heritage mountain town. The Tosho-gu shrine complex is Japan's most ornate, dripping in gold leaf and intricate carvings." },
    afternoon: { title: "Kegon Falls & Lake Chuzenji", desc: "Take a bus up the mountain to spectacular Kegon Falls — 97 metres of thundering water. Lake Chuzenji beside it is stunning, especially if early spring snow still lingers on the peaks." },
    evening: { title: "Return to Tokyo", desc: "Head back to Tokyo in the evening. Pick up onsen manju (hot spring sweets) at Nikko station as edible souvenirs. Easy, relaxed evening back in the city." },
    eat: "Gyoshintei in Nikko — kaiseki in a stunning old villa. Or Suzuya for yuba (tofu skin) dishes, a Nikko speciality you won't find elsewhere", tip: "Buy a Nikko Pass at Asakusa station — covers the round trip train and buses in Nikko for ¥4,520, saving you about ¥2,000."
  },
  {
    day: 7, date: "20 Mar", city: "Tokyo → Hakone", region: "Hakone",
    lat: 35.2322, lng: 139.1069, emoji: "🗻", tag: "Nature", tagColor: "#2D6A4F",
    highlights: ["Mt. Fuji views", "Onsen ryokan", "Hakone Open Air Museum"],
    morning: { title: "Shinkansen to Odawara", desc: "Check out of your Tokyo hotel and take the Shinkansen to Odawara (35 min, ¥2,810), then the Hakone Tozan train up into the mountains. If the sky is clear, you'll glimpse Fuji from the train." },
    afternoon: { title: "Hakone Open Air Museum", desc: "One of Japan's best sculpture parks — Picasso, Moore, and Rodin set against mountain scenery. The Foot Bath inside the grounds is a lovely mid-afternoon treat after all the walking." },
    evening: { title: "Ryokan & Onsen", desc: "Check into your ryokan (traditional inn) and experience the full Japanese hospitality ritual: yukata robes, tatami floors, an elaborate multi-course kaiseki dinner, and a long soak in the outdoor onsen." },
    eat: "Dinner at your ryokan is included — typically 8-10 courses of seasonal Japanese cuisine", tip: "Get the Hakone Free Pass (¥6,100 from Shinjuku) — it covers all transport in the Hakone area including the ropeway, boats, and trains for 2 days."
  },
  {
    day: 8, date: "21 Mar", city: "Hakone — Mt. Fuji Views", region: "Hakone",
    lat: 35.1855, lng: 138.8704, emoji: "🗻", tag: "Nature", tagColor: "#2D6A4F",
    highlights: ["Owakudani volcanic valley", "Lake Ashi boat cruise", "Fuji views"],
    morning: { title: "Owakudani volcanic valley", desc: "Take the ropeway up to Owakudani — an active volcanic area with sulphurous steam venting from the ground. Buy the famous black eggs (boiled in volcanic hot springs) and soak in the wild lunar landscape." },
    afternoon: { title: "Lake Ashi boat cruise", desc: "Sail across Lake Ashi on a pirate ship (yes, really) with Mt. Fuji reflected in the water on clear days. Disembark at Hakone-machi and explore the old cedar avenue of the Tokaido road." },
    evening: { title: "Second night at the ryokan", desc: "Another evening of total relaxation. Try the sake flight at your ryokan if offered — many serve local regional varieties. The communal onsen is magical late at night when most guests have gone to bed." },
    eat: "Hatago Ichi near Hakone-Yumoto for mountain vegetables and river fish. Try the kaiseki breakfast at your ryokan too — it's often as impressive as dinner", tip: "Fuji is notoriously shy — it's often hidden in cloud. Early mornings and late afternoons after rain give the clearest views."
  },
  {
    day: 9, date: "22 Mar", city: "Hakone → Kyoto", region: "Kyoto",
    lat: 35.0116, lng: 135.7681, emoji: "🏯", tag: "Travel", tagColor: "#1A2744",
    highlights: ["Shinkansen journey", "Arrive Kyoto", "Gion evening stroll"],
    morning: { title: "Check out & Shinkansen", desc: "Take the Tozan train back to Odawara and board the Shinkansen to Kyoto (2hrs 15min, ~¥13,000 or covered by JR Pass). Watch the countryside transform as you head west — Mt. Fuji disappears behind you." },
    afternoon: { title: "Check in & Nishiki Market", desc: "Drop bags at your Kyoto hotel then explore Nishiki Market — a narrow 400-year-old covered street lined with tiny food stalls. Try pickled vegetables, fresh tofu, grilled skewers, and green tea sweets." },
    evening: { title: "Gion district at dusk", desc: "Walk through Gion as darkness falls — Kyoto's famous geisha district. The wooden ochaya teahouses glow golden and if you're very lucky, you might spot a maiko (apprentice geisha) hurrying between appointments." },
    eat: "Tousuiro — stunning tofu kaiseki in a 200-year-old machiya. Or Nishiki Market stalls for a self-guided dinner of pickles, grilled skewers, and fresh yudofu", tip: "If you have a JR Pass, the Shinkansen to Kyoto is fully covered. If not, book Shinkansen tickets through SmartEX app for English-language booking."
  },
  {
    day: 10, date: "23 Mar", city: "Kyoto — Arashiyama", region: "Kyoto",
    lat: 35.0094, lng: 135.6727, emoji: "🎋", tag: "Nature", tagColor: "#2D6A4F",
    highlights: ["Bamboo Grove", "Tenryu-ji garden", "Monkey park"],
    morning: { title: "Bamboo Grove (go early!)", desc: "Arrive at Arashiyama's famous bamboo grove by 7am — before tour groups arrive. The towering green stalks creak and sway overhead in an otherworldly way. It's genuinely one of the most beautiful places on earth." },
    afternoon: { title: "Nintendo Museum & Tenryu-ji", desc: "The Nintendo Museum is a 20-minute train ride from central Kyoto in Uji — a must for any Nintendo fan. Interactive exhibits, playable history, and exclusive merchandise. Book tickets online well in advance (they sell out weeks ahead). Alternatively stay in Arashiyama: Tenryu-ji temple has a sublime 700-year-old garden — hire a rowboat on the Oi River and drift past weeping cherry trees." },
    evening: { title: "Back to central Kyoto", desc: "Take the scenic Sagano Romantic Train through the Hozu River gorge (book tickets at the station) back towards central Kyoto. Evening in Pontocho — a narrow lantern-lit alley of restaurants along the Kamogawa river." },
    eat: "Kitcho Arashiyama (Michelin 3-star, book months ahead) for a special occasion. Budget option: Hirano-ya near Tenryu-ji for gorgeous river-view tofu dishes at a fraction of the price", tip: "Arashiyama gets unbearably busy by 9am. Stay overnight in the area or arrive on the first bus from central Kyoto."
  },
  {
    day: 11, date: "24 Mar", city: "Kyoto — Fushimi & Nishiyama", region: "Kyoto",
    lat: 34.9671, lng: 135.7727, emoji: "⛩️", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Fushimi Inari", "Sake breweries", "Nishiki Market"],
    morning: { title: "Fushimi Inari Shrine", desc: "The thousands of vermillion torii gates winding up Mt. Inari are iconic. Walk past the first few crowded gates then keep going up — within 20 minutes the crowds thin and you have the mountain largely to yourself." },
    afternoon: { title: "Fushimi sake district", desc: "Fushimi is Kyoto's sake brewing district — the soft underground water makes it perfect for brewing. Visit the Gekkeikan Okura Sake Museum (¥600 with a tasting) and walk the old brewery canal streets." },
    evening: { title: "Pontocho alley dinner", desc: "Book a restaurant in Pontocho — the narrow alley running parallel to the Kamogawa. In summer restaurants extend platforms over the river for open-air dining (known as kawayuka). Enchanting in every season." },
    eat: "Pontocho Yamatomi — excellent kaiseki with riverside views", tip: "Fushimi Inari is free and open 24 hours. Sunset and early morning are magical. The full hike to the summit and back is about 2-3 hours."
  },
  {
    day: 12, date: "25 Mar", city: "Kyoto — Higashiyama", region: "Kyoto",
    lat: 35.0038, lng: 135.7785, emoji: "🏮", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Kiyomizu-dera", "Ninenzaka & Sannenzaka", "Maruyama Park"],
    morning: { title: "Kiyomizu-dera Temple", desc: "One of Japan's most impressive temples, built on a wooden stage jutting out from a hillside with no nails. The views over Kyoto's rooftops are superb. Walk the stone-paved Sannenzaka approach for pottery and ceramics shops." },
    afternoon: { title: "Higashiyama walking district", desc: "The best-preserved historic streetscape in Japan. Wander from Kiyomizu-dera north through Ninenzaka and Sannenzaka — two-story wooden machiya shops selling matcha, fans, and lacquerware. Feels like stepping into Edo Japan." },
    evening: { title: "Maruyama Park at night", desc: "Kyoto's most famous cherry blossom spot. Even before bloom, the weeping Gion-shidare cherry tree is magnificent lit up at night. The park lanterns and food stalls create a festive hanami atmosphere." },
    eat: "Nakamura-ro — one of Japan's oldest restaurants (est. 1716) inside Yasaka Shrine", tip: "Kiyomizu-dera is under ongoing restoration — check which sections might be scaffolded during your visit at the official website."
  },
  {
    day: 13, date: "26 Mar", city: "Nara Day Trip", region: "Nara",
    lat: 34.6851, lng: 135.8048, emoji: "🦌", tag: "Day Trip", tagColor: "#2D6A4F",
    highlights: ["Free-roaming deer", "Todai-ji temple", "Kasuga Taisha shrine"],
    morning: { title: "Train to Nara", desc: "45 minutes from Kyoto on the Kintetsu or JR line. As you exit Nara station, you're immediately greeted by deer — over 1,000 of them roam freely through the city and park. They're sacred and surprisingly bold." },
    afternoon: { title: "Todai-ji & Kasuga Taisha", desc: "Todai-ji houses the world's largest bronze Buddha — 15 metres tall, in a hall said to be the world's largest wooden structure. Then walk through the lantern-lined path to Kasuga Taisha, with 3,000 stone lanterns." },
    evening: { title: "Return to Kyoto", desc: "Back in Kyoto for the evening. Tonight is a good night for a simple izakaya meal — sit at the bar, order small plates and sake, and watch the chefs at work. The perfect antidote to temple overload." },
    eat: "Nakatanidou for freshly pounded mochi (queue is worth it!). Also try Maguro Yamamoto for incredible tuna sashimi bowls near Kintetsu Nara station — one of Japan's best value lunches", tip: "Buy shika senbei (deer crackers, ¥200) to feed the deer. Hold the bag above your head immediately or they WILL mob you — they can be surprisingly pushy!"
  },
  {
    day: 14, date: "27 Mar", city: "Kyoto — Golden & Silver Pavilions", region: "Kyoto",
    lat: 35.0394, lng: 135.7292, emoji: "✨", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Kinkaku-ji (Golden Pavilion)", "Ryoan-ji rock garden", "Philosopher's Path"],
    morning: { title: "Kinkaku-ji (Golden Pavilion)", desc: "Go early — the golden pavilion reflected in the mirror pond is perhaps Japan's single most iconic image. It genuinely does glow gold in the morning sun. Arrive at 9am opening to beat the worst crowds." },
    afternoon: { title: "Ryoan-ji rock garden", desc: "The world's most famous zen rock garden — 15 stones on raked white gravel. You can never see all 15 at once from any angle. Sit on the wooden veranda and just... be still for a moment." },
    evening: { title: "Philosopher's Path", desc: "Walk the canal-side Philosopher's Path — a 2km route lined with hundreds of cherry trees. In late March, depending on the year, you might catch the very first blossoms. One of Japan's most romantic evening walks." },
    eat: "Omen — a beloved noodle restaurant near Ginkaku-ji, perfect after the Philosopher's Path", tip: "Kinkaku-ji gets 5,000 visitors a day in peak season. Arrive exactly at 9am opening — there's a brief window before tour buses arrive."
  },
  {
    day: 15, date: "28 Mar", city: "Kyoto → Osaka → Suzuka", region: "Suzuka",
    lat: 34.8431, lng: 136.5411, emoji: "🏎️", tag: "F1 Qualifying", tagColor: "#C9985A",
    highlights: ["Travel to Suzuka", "F1 Qualifying Day", "Circuit atmosphere"],
    morning: { title: "Check out & travel to Suzuka", desc: "Check out of your Kyoto hotel and take the train via Osaka to Suzuka (about 2 hours total). Store luggage at Suzuka station lockers. The town buzzes with F1 fans from all over the world this weekend." },
    afternoon: { title: "F1 Qualifying at Suzuka", desc: "Head to Suzuka Circuit for qualifying. The track's figure-eight layout means you can walk between different sections. The S-curves and 130R corner are must-watch spots — the cars are breathtakingly fast." },
    evening: { title: "F1 fan zone & atmosphere", desc: "After qualifying, soak up the incredible atmosphere around the circuit. Fan merchandise, live music, and the unique camaraderie of F1 fans from around the world. Stay for the evening fan events." },
    eat: "Suzuka Circuit has great Japanese street food — yakitori, ramen and takoyaki throughout the venue", tip: "Buy a grandstand ticket for Qualifying too — the V1/V2 grandstands overlook the start/finish and pit lane. The sound of these new 2026 power unit cars is extraordinary."
  },
  {
    day: 16, date: "29 Mar", city: "Suzuka — Race Day! 🏎️", region: "Suzuka",
    lat: 34.8431, lng: 136.5411, emoji: "🏁", tag: "RACE DAY", tagColor: "#9B1B30",
    highlights: ["Japanese Grand Prix", "Suzuka Circuit", "Podium celebrations"],
    morning: { title: "Race day morning at Suzuka", desc: "Arrive early to soak up the pre-race atmosphere — the grid walk, national anthems, and the raw roar of F1 cars on the formation lap. The crowd energy at a Japanese GP is unlike any other race on the calendar." },
    afternoon: { title: "The Japanese Grand Prix", desc: "53 laps of one of the most demanding circuits in F1. The figure-eight layout, high-speed corners, and passionate Japanese crowd make this one of the best races of the year. The podium ceremony is electric." },
    evening: { title: "Celebration & travel to Osaka", desc: "After the podium, travel to Osaka (1.5 hours) and check in. Tonight is for celebrating — head to Dotonbori, Osaka's neon-drenched entertainment district, for street food and the incredible city energy." },
    eat: "Dotonbori: takoyaki (octopus balls) from Aizuya, the original takoyaki restaurant since 1933", tip: "Book race day tickets as soon as 2027 tickets go on sale — they sell out fast. V1/V2 grandstands for start/finish, or Dunlop corner for overtaking action."
  },
  {
    day: 17, date: "30 Mar", city: "Osaka — Food Capital", region: "Osaka",
    lat: 34.6937, lng: 135.5023, emoji: "🍜", tag: "Food", tagColor: "#C9985A",
    highlights: ["Dotonbori", "Kuromon Market", "Osaka street food"],
    morning: { title: "Kuromon Ichiba Market", desc: "Osaka's 'Kitchen' — a 580-stall covered market that's been feeding the city since 1822. Arrive hungry: fresh sashimi, grilled crab legs, wagyu skewers, and fruit all eaten standing up at the stalls." },
    afternoon: { title: "Osaka Castle", desc: "The magnificent white Osaka Castle surrounded by a moat and cherry trees. The surrounding park is one of Osaka's best hanami (flower viewing) spots if the blossoms have arrived. Museum inside traces Toyotomi Hideyoshi's story." },
    evening: { title: "Dotonbori at night", desc: "The full Dotonbori experience after dark — the giant Glico running man, the mechanical crab, neon reflections in the canal. Eat your way down: kushikatsu (breaded skewers), okonomiyaki, and fresh ramen." },
    eat: "Kani Doraku — the famous crab restaurant with the giant mechanical crab sign. Splurge on the crab kaiseki.", tip: "Osaka people are famously friendly and food-obsessed. The local saying is 'kuidaore' — eat until you drop. Lean into it."
  },
  {
    day: 18, date: "31 Mar", city: "Osaka — Shinsekai & Tennoji", region: "Osaka",
    lat: 34.6523, lng: 135.5060, emoji: "🗼", tag: "Culture", tagColor: "#9B1B30",
    highlights: ["Tsutenkaku tower", "Shinsekai district", "Sumiyoshi Taisha"],
    morning: { title: "Shinsekai & Tsutenkaku", desc: "Explore Shinsekai — a wonderfully retro 1950s district built to resemble Paris and New York. Tsutenkaku tower is Osaka's answer to the Eiffel Tower. The area is famous for kushikatsu — eat as many rounds as you like (but never double-dip the sauce)." },
    afternoon: { title: "Sumiyoshi Taisha Shrine", desc: "One of Japan's oldest and most important shrines — predating the influence of Chinese architecture. The distinctive straight-roofed style is uniquely Japanese. The arched Taiko-bashi bridge is beautiful to photograph." },
    evening: { title: "Namba & farewell Osaka dinner", desc: "Last night in the Kansai region — make it count. Namba is Osaka's beating heart: department store basement food halls (depachika), more street food, and countless bars. Try the highball bars popular with local salarymen." },
    eat: "Hajime — Osaka's Michelin 3-star for a special occasion dinner", tip: "The Osaka Amazing Pass (¥2,800/day) covers unlimited subway rides plus free entry to Tsutenkaku and other attractions — great value if you're moving around a lot."
  },
  {
    day: 19, date: "1 Apr", city: "Osaka → Hiroshima", region: "Hiroshima",
    lat: 34.3853, lng: 132.4553, emoji: "🕊️", tag: "History", tagColor: "#374151",
    highlights: ["Peace Memorial Museum", "Peace Park", "Okonomiyaki"],
    morning: { title: "Shinkansen to Hiroshima", desc: "45 minutes on the Shinkansen from Osaka. Check into your hotel and head straight to the Peace Memorial Park. The A-Bomb Dome — the skeletal ruins left deliberately standing — is one of the most haunting and important sights in the world." },
    afternoon: { title: "Peace Memorial Museum", desc: "One of the most important museums you'll ever visit. The exhibits documenting 6 August 1945 are profoundly moving. Allow 2-3 hours. The paper cranes left by visitors from around the world form an extraordinary wall of humanity." },
    evening: { title: "Hiroshima okonomiyaki", desc: "Hiroshima has its own version of okonomiyaki (savoury pancake) — layered rather than mixed, with noodles inside. Okonomimura is a building with 25 tiny okonomiyaki restaurants — pick one and watch the chef cook in front of you." },
    eat: "Okonomimura, floors 2-4 — the authentic Hiroshima-style okonomiyaki experience", tip: "The Peace Museum is free to enter on the first Sunday of each month. At other times it's ¥200 — one of the best value cultural experiences in Japan."
  },
  {
    day: 20, date: "2 Apr", city: "Miyajima Island", region: "Hiroshima",
    lat: 34.2954, lng: 132.3196, emoji: "⛩️", tag: "Nature", tagColor: "#2D6A4F",
    highlights: ["Floating torii gate", "Itsukushima Shrine", "Mt. Misen hike"],
    morning: { title: "Ferry to Miyajima", desc: "15-minute ferry from Hiroshima port to the sacred island of Miyajima (covered by JR Pass). The great torii gate of Itsukushima Shrine appears to float on the water at high tide — it's one of Japan's three views, and it earns that title." },
    afternoon: { title: "Mt. Misen hike", desc: "Hike or take the ropeway up Mt. Misen for sweeping views over the Seto Inland Sea and its hundreds of islands. Wild deer roam the island freely (even cheekier than Nara's). The primeval forest near the summit is primordial and beautiful." },
    evening: { title: "Sunset torii & return", desc: "Time the ferry back to catch sunset behind the torii gate — the red structure glows against the orange sky and water. One of Japan's most photographed moments. Return to Hiroshima for the night." },
    eat: "Kakiya — fresh oysters are Miyajima's speciality, grilled, baked, or raw. The oyster rice bowl is superb.", tip: "The floating torii effect depends on the tide — check tide times before you visit. High tide is when the gate appears to float; low tide lets you walk out to it."
  },
  {
    day: 21, date: "3 Apr", city: "Hiroshima → Tokyo → Home", region: "Tokyo",
    lat: 35.6762, lng: 139.6503, emoji: "🎌", tag: "Departure", tagColor: "#1A2744",
    highlights: ["Last morning in Japan", "Final ramen", "Fly home"],
    morning: { title: "Final morning", desc: "A last slow Japanese breakfast — perhaps a 7-Eleven onigiri and canned coffee, which is somehow perfect. Walk along the Ota River in Hiroshima one last time and pick up any final omiyage (souvenirs) for people back home." },
    afternoon: { title: "Shinkansen to Tokyo", desc: "4 hours back to Tokyo on the Shinkansen. If your flight is from Narita or Haneda, head straight there. If you have time, make one last stop in Tokyo for a bowl of ramen at your favourite spot from week one." },
    evening: { title: "Fly home", desc: "Board your flight with three weeks of extraordinary memories, probably 5,000 photos, and a suitcase full of Kit Kat flavours, ceramics, and things you didn't know you needed. Japan has a way of changing people." },
    eat: "Ichiran at Narita Airport — ramen in the departure lounge. The perfect last meal.", tip: "Japan's post boxes are red. Post your postcards here if you haven't already — airmail to the UK takes about 7-10 days and arrives after you do, which is a lovely thing."
  }
];

export const usefulInfo = [
  {
    category: "Apps to Download",
    icon: "📱",
    items: [
      "Kuli Kuli — AI-powered translation app that reads menus, signs, and text via your camera. Better than Google Translate for Japanese.",
      "Flush — finds your nearest public toilet. Essential in Japan where toilets can be hidden but are always immaculate.",
      "ChargeSpot — locate the nearest portable phone charger rental point. Available at convenience stores everywhere.",
      "Luup — rent electric scooters by the minute for exploring neighbourhoods. Great for Kyoto temple-hopping.",
      "Stamp Quest — collect digital stamps at famous landmarks and shrines. Fun way to track everywhere you visit.",
      "Bounce — store your luggage at local shops and hotels while you explore. Lifesaver on travel days.",
      "MyMizu — find free water refill stations across Japan. Saves money and plastic.",
      "Tabelog — Japan's most trusted restaurant review app (like a local TripAdvisor). Use it to find where locals actually eat.",
      "Google Maps — works brilliantly for Japanese public transport. Always use it for train routes and times.",
      "Suica (by JR East) — manage your Suica transit card digitally. Can be added to Apple Wallet too."
    ]
  },
  {
    category: "Essential Tips",
    icon: "💡",
    items: [
      "Toilets: Japanese toilets have heated seats and a control panel. The key buttons: 🚿 = bidet (front), 🚿 = rear wash, ♪ = sound masking, STOP = stop. The flush is usually a handle or big button on top.",
      "Cash is king: many restaurants, shrines, and smaller shops are cash-only. Always carry ¥10,000-20,000 on you. ATMs at 7-Eleven and Japan Post are the most reliable for foreign cards.",
      "Never skip queues: Japanese queue culture is sacred. Always line up in orderly fashion — jumping a queue is considered very rude.",
      "Never tip: tipping is not done in Japan and can cause genuine offence or confusion. The service will be exceptional regardless — it's simply cultural pride.",
      "Miji (convenience) stores: 7-Eleven, FamilyMart, and Lawson are incredible. Many have free hot water for tea and some offer free drinking water — just ask. Also have great food, ATMs, and toiletries.",
      "Shoes: you'll remove your shoes constantly (temples, ryokans, some restaurants). Wear easy slip-on shoes and make sure your socks are presentable!",
      "Rubbish bins are rare in public — carry a small bag for your rubbish until you find a convenience store bin.",
      "Escalators: stand on the left in Tokyo, right in Osaka. Never stand on the walking side.",
      "IC cards (Suica/Pasmo): always keep ¥1,000+ on your card. Running out mid-journey is annoying as you have to top up at a machine.",
      "Photography: always ask before photographing people, especially at shrines and in traditional areas like Gion. Some areas of Kyoto now ban street photography of geisha."
    ]
  },
  {
    category: "Getting Around",
    icon: "🚆",
    items: [
      "JR Pass (21 days): ¥100,000 (~£510) — covers all Shinkansen and JR trains. Worth it for this itinerary.",
      "Suica card: rechargeable IC card for local trains, buses, and convenience stores. Get one at the airport.",
      "Shinkansen: Tokyo→Kyoto 2h15m | Kyoto→Osaka 15m | Osaka→Hiroshima 45m | Hiroshima→Tokyo 4h",
      "Taxis are metered and honest but expensive. Use for late nights or when carrying lots of luggage.",
      "Google Maps works brilliantly for public transport in Japan — use it for everything."
    ]
  },
  {
    category: "Money",
    icon: "💴",
    items: [
      "Japan is still very cash-based. Always carry ¥10,000-20,000 in cash. 7-Eleven ATMs accept foreign cards.",
      "Budget: ~¥15,000-20,000/day per person for mid-range travel (food, transport, activities).",
      "Tipping is NOT done in Japan and can cause offence. Never tip.",
      "Tax-free shopping: show your passport at department stores for 8% tax refund on purchases over ¥5,000.",
      "IC Orica and Post Bank ATMs at convenience stores are the most reliable for foreign cards."
    ]
  },
  {
    category: "F1 Suzuka Tips",
    icon: "🏎️",
    items: [
      "2027 tickets go on sale via Suzuka Circuit website and F1 official site — set a reminder to book immediately.",
      "Best grandstands: V1/V2 (main straight & pit lane), Dunlop (overtaking spot), 130R (fastest corner).",
      "Arrive 90 mins early on race day — security queues are long and you don't want to miss the grid walk.",
      "The fan zone, merchandise village, and simulators are brilliant for the full weekend experience.",
      "Suzuka has brilliant food stalls throughout — don't eat before you arrive.",
      "Accommodation in Suzuka books out months in advance for race weekend. Stay in Nagoya (30 min by train) as backup."
    ]
  },
  {
    category: "Cherry Blossoms",
    icon: "🌸",
    items: [
      "Peak bloom in Tokyo and Kyoto is typically late March to early April — perfect for your trip!",
      "Best spots: Ueno Park (Tokyo), Maruyama Park (Kyoto), Osaka Castle, Philosopher's Path (Kyoto).",
      "Bloom dates vary by ~2 weeks each year. Check Japan Meteorological Corporation forecasts from January.",
      "Hanami (flower viewing picnics) happen everywhere during bloom. Join in — buy convenience store snacks and find a spot under the trees.",
      "Rain after peak bloom causes petals to fall — 'hanafubuki' (flower blizzard) — which is beautiful in its own way."
    ]
  },
  {
    category: "Language & Etiquette",
    icon: "🗣️",
    items: [
      "Learn: 'Arigatou gozaimasu' (thank you), 'Sumimasen' (excuse me/sorry), 'Eigo wo hanasemasu ka?' (do you speak English?).",
      "Bow when greeting — a small nod is fine for tourists. Deeper bows for more formal situations.",
      "No eating while walking (except at festivals). Eat at the stall or find a spot to stand still.",
      "Be quiet on trains — phone calls are frowned upon. Speak in hushed tones.",
      "Google Translate camera mode is a lifesaver for menus — point your camera at Japanese text for instant translation.",
      "Most restaurants have picture menus or plastic food displays outside. Point and smile — it works!"
    ]
  },
  {
    category: "Packing Essentials",
    icon: "🎒",
    items: [
      "Portable WiFi (pocket WiFi) or eSIM — essential. Rent at the airport or buy an eSIM before you fly.",
      "Comfortable walking shoes — you'll easily do 20,000+ steps a day.",
      "Small backpack for day trips. Large bags are awkward on crowded trains.",
      "Bring an umbrella or buy one (¥500 from any convenience store). Spring rain is common.",
      "Power adaptor: Japan uses Type A plugs (same as USA) — UK plugs need an adaptor.",
      "Leave room in your suitcase — you WILL buy things. Japan has incredible shopping."
    ]
  }
];
