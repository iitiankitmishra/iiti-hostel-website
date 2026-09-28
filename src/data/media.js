const shot = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;

export const photos = {
  columns: {
    src: shot("photo-1541339907198-e08756dedf3f"),
    alt: "Academic building fronted by green lawns",
  },
  campus: {
    src: shot("photo-1562774053-701939374585"),
    alt: "University campus with wide green grounds",
  },
  modern: {
    src: shot("photo-1607237138185-eedd9c632b0b"),
    alt: "Contemporary campus block in daylight",
  },
  library: {
    src: shot("photo-1498243691581-b145c5f54a5a"),
    alt: "Students in a bright academic library",
  },
  gathering: {
    src: shot("photo-1523050854058-8df90110c9f1"),
    alt: "Students gathered on a university lawn",
  },
  walkway: {
    src: shot("photo-1564981797816-1043664bf78d"),
    alt: "Tree-lined walkway through a campus",
  },
  books: {
    src: shot("photo-1481627834876-b7833e8f5570"),
    alt: "Open books in a reading room",
  },
  field: {
    src: shot("photo-1574629810360-7efbbe195018"),
    alt: "Outdoor sports field",
  },
  gym: {
    src: shot("photo-1534438327276-14e5300c3a48"),
    alt: "Indoor gymnasium",
  },
  dining: {
    src: shot("photo-1567521464027-f127ff144326"),
    alt: "Shared dining hall",
  },
  room: {
    src: shot("photo-1555854877-bab0e564b8d5"),
    alt: "Furnished student room",
  },
  apartment: {
    src: shot("photo-1502672260266-1c1ef2d93688"),
    alt: "Compact residential apartment interior",
  },
  residence: {
    src: shot("photo-1460317442991-0ec209397118"),
    alt: "Residential block with landscaped frontage",
  },
  garden: {
    src: shot("photo-1449844908441-8829872d2607"),
    alt: "House set in a green garden",
  },
  fest: {
    src: shot("photo-1492684223066-81342ee5ff30"),
    alt: "Evening cultural gathering",
  },
  crowd: {
    src: shot("photo-1523580494863-6f3031224c94"),
    alt: "Students at a campus event",
  },
  study: {
    src: shot("photo-1434030216411-0b793f4b4173"),
    alt: "Student studying at a desk",
  },
  friends: {
    src: shot("photo-1529156069898-49953e39b3ac"),
    alt: "Friends sitting together outdoors",
  },
};

export const heroSlides = [
  { src: "/campus-1.jpg", alt: "IIT Indore lawns" },
  { src: "/campus-2.jpg", alt: "Hostel block" },
  { src: "/campus-3.jpg", alt: "Campus walkway" },
  { src: "/campus-4.jpg", alt: "Academic complex" },
];
