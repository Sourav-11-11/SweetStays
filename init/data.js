const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    price: 800,
    location: "Portland",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out onto the sandy beach from this beautiful condo.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on a peaceful lake.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Luxury Penthouse",
    description: "Panoramic city views from this luxury penthouse.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Ski Chalet",
    description: "Hit the slopes right from your doorstep.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Safari Lodge",
    description: "Experience wildlife in luxury safari accommodations.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a preserved canal house in Amsterdam.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Cotswolds Cottage",
    description: "Charming countryside escape.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Boston Brownstone",
    description: "Elegant historic brownstone.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    price: 2200,
    location: "Boston",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Bali Bungalow",
    description: "Beachfront bungalow with pool.",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Banff Cabin",
    description: "Mountain views in Banff.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    price: 1500,
    location: "Banff",
    country: "Canada",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Miami Art Deco Apartment",
    description: "1920s glamour apartment.",
    image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579",
    price: 1600,
    location: "Miami",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Phuket Villa",
    description: "Luxury villa with infinity pool.",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Scottish Castle",
    description: "Historic castle stay.",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Dubai Desert Oasis",
    description: "Luxury desert retreat.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    price: 5000,
    location: "Dubai",
    country: "UAE",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Montana Log Cabin",
    description: "Rustic wilderness cabin.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
    price: 1100,
    location: "Montana",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Greek Beach Villa",
    description: "Mediterranean beachfront escape.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Eco Treehouse",
    description: "Eco-friendly forest retreat.",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Charleston Cottage",
    description: "Historic southern charm.",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    price: 1600,
    location: "Charleston",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Tokyo Apartment",
    description: "Modern central Tokyo stay.",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "New Hampshire Cabin",
    description: "Scenic lakefront retreat.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Maldives Villa",
    description: "Overwater luxury villa.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Aspen Ski Chalet",
    description: "Luxury ski resort stay.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    price: 4000,
    location: "Aspen",
    country: "United States",
    owner: "69a5fc12c7f8a4b888100726",
  },
  {
    title: "Costa Rica Beach House",
    description: "Secluded surf getaway.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    owner: "69a5fc12c7f8a4b888100726",
  },
];

const sampleReviews = [
  // Cozy Beachfront Cottage
  {
    comment: "Amazing views and very peaceful! The cottage is perfect for a romantic getaway.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Good experience overall. The beach is just steps away!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Loved every moment here. Highly recommended!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Modern Loft in Downtown
  {
    comment: "Perfect location in the heart of the city. Very modern and clean.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Great loft, but a bit noisy due to city traffic.",
    rating: 3,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Awesome stay! Would definitely book again.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Mountain Retreat
  {
    comment: "Such a serene place to unwind. Nature at its best!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Perfect for a peaceful weekend away from the city.",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Beautiful cabin with stunning mountain views!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Historic Villa in Tuscany
  {
    comment: "A taste of Italian luxury! Absolutely enchanting.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Wonderful experience staying in a historic villa.",
    rating: 4,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Living the Tuscan dream! Highly recommended.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Secluded Treehouse Getaway
  {
    comment: "Unique and magical! A once-in-a-lifetime experience.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing treehouse stay! The kids loved it.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Very cool place, feels like being in nature.",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Beachfront Paradise
  {
    comment: "Paradise found! Perfect beach vacation spot.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Stunning beachfront location with excellent amenities.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Beautiful views and great service!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Rustic Cabin by the Lake
  {
    comment: "Peaceful lakefront cabin, perfect for fishing!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Great getaway spot. Very relaxing environment.",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Lovely cabin with beautiful lake views!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Luxury Penthouse
  {
    comment: "Extraordinary views from this luxury penthouse!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing amenities and panoramic city views.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Luxury at its finest! Worth every penny.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Ski Chalet
  {
    comment: "Perfect ski lodge experience! Very cozy.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Great location on the slopes with excellent facilities.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing ski chalet with wonderful views!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Safari Lodge
  {
    comment: "Incredible wildlife experience! Unforgettable adventure.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Luxury safari experience with amazing animals.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Best safari lodge experience ever!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Historic Canal House
  {
    comment: "Charming Amsterdam canal house! Very authentic.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Beautiful historic building with modern comfort.",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Wonderful Amsterdam experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Private Island Retreat
  {
    comment: "Once in a lifetime experience! Absolutely heavenly.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Private island paradise! Dream vacation realized.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Incredible private island getaway!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Cotswolds Cottage
  {
    comment: "Charming countryside village experience!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Perfect romantic getaway in the Cotswolds.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Beautiful cottage with countryside charm!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Boston Brownstone
  {
    comment: "Historic brownstone with modern amenities.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Elegant Boston accommodation!",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Great location in historic Boston!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Bali Bungalow
  {
    comment: "Tropical paradise with beachfront access!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Perfect Bali getaway with pool!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Beautiful Bali experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Banff Cabin
  {
    comment: "Stunning mountain views in Banff!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Perfect cabin retreat in the mountains.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Great mountain experience in Banff!",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Miami Art Deco Apartment
  {
    comment: "Glamorous roaring twenties experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Beautiful Art Deco style apartment!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Fabulous Miami stay!",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Phuket Villa
  {
    comment: "Luxurious infinity pool villa in Phuket!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Amazing luxury villa experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Beautiful Phuket villa!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Scottish Castle
  {
    comment: "Historic castle experience! Absolutely magical.",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Enchanting Scottish castle stay!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing historic castle in Scotland!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Dubai Desert Oasis
  {
    comment: "Luxury desert retreat with amazing views!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Incredible desert oasis experience!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Breathtaking Dubai desert experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Montana Log Cabin
  {
    comment: "Rustic wilderness experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Beautiful Montana log cabin!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Great cabin retreat in Montana!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Greek Beach Villa
  {
    comment: "Mediterranean perfection!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Beautiful Greek island villa!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing Mediterranean experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Eco Treehouse
  {
    comment: "Eco-friendly forest retreat! Very sustainable.",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Wonderful eco-treehouse experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Beautiful and eco-friendly!",
    rating: 4,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Charleston Cottage
  {
    comment: "Historic Southern charm!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Lovely Charleston cottage!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Charming southern hospitality experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Tokyo Apartment
  {
    comment: "Modern Tokyo living experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing Tokyo apartment!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Great central Tokyo location!",
    rating: 4,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // New Hampshire Cabin
  {
    comment: "Scenic lakefront retreat!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Beautiful New Hampshire cabin!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Perfect lakeside getaway!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  // Maldives Villa
  {
    comment: "Overwater paradise! Absolutely stunning.",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Incredible Maldives experience!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing overwater villa!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  // Aspen Ski Chalet
  {
    comment: "Luxury ski resort experience!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
  {
    comment: "Perfect Aspen ski chalet!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Wonderful ski resort stay!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  // Costa Rica Beach House
  {
    comment: "Secluded surf getaway paradise!",
    rating: 5,
    author: "69a5fc12c7f8a4b888100726", // vemuru
  },
  {
    comment: "Amazing Costa Rica beach experience!",
    rating: 5,
    author: "69a6025a4f25bb561f693ef3", // demo
  },
  {
    comment: "Perfect Costa Rican beach house!",
    rating: 5,
    author: "69a8175fb7df0aebb8b9b26e", // KIvee
  },
];

module.exports = { data: sampleListings, reviews: sampleReviews };
