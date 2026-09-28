import { photos } from "./media";

const sharedFacilities = [
  {
    icon: "wifi",
    title: "Wi-Fi",
    detail: "24-hour high-speed campus internet in resident rooms.",
  },
  {
    icon: "sports",
    title: "Sports",
    detail: "Indoor games inside the hall, with campus courts nearby.",
  },
  {
    icon: "court",
    title: "Badminton",
    detail: "Court access on the residential side of campus.",
  },
  {
    icon: "lounge",
    title: "Common room",
    detail: "Shared lounge with newspapers and magazines.",
  },
  {
    icon: "laundry",
    title: "Laundry",
    detail: "Laundry facility for residents of the hall.",
  },
  {
    icon: "room",
    title: "Furnished room",
    detail: "Cot, study table, and almirah provided in each room.",
  },
  {
    icon: "shield",
    title: "Security",
    detail: "CCTV coverage and a security guard on duty around the clock.",
  },
  {
    icon: "mess",
    title: "Central mess",
    detail: "Residents dine at the Central Dining Hall beside the academic spine.",
  },
  {
    icon: "gym",
    title: "Gymnasium",
    detail: "Campus gymnasium shared across the halls of residence.",
  },
];

function hecEntry(role, name, email, phone) {
  return { role, name, email, phone };
}

export const hostels = [
  {
    id: "apj",
    code: "APJ",
    shortName: "APJ HOR",
    name: "A.P.J. Abdul Kalam Hall of Residence",
    tagline: "Centrally air-cooled · Shared rooms",
    audience: "Students",
    capacity: "574 rooms",
    image: photos.modern,
    gallery: [photos.modern, photos.room, photos.study, photos.campus],
    warden: {
      name: "Dr. Sivaraj Mohana Sundaram",
      email: "warden.apj@iiti.ac.in",
      phone: "0731-6605122",
    },
    officeEmail: "office.apj@iiti.ac.in",
    officePhone: "0731-6603149",
    about: [
      "A.P.J. Abdul Kalam Hall of Residence is one of the large shared halls on the Simrol campus. The block has 574 rooms and is centrally air cooled, so residents have a cooler room through the warmer months in Indore.",
      "Life in APJ follows the institute pattern: a warden looks after the hall, a junior assistant is the first desk contact, and every resident takes meals at the Central Dining Hall. The hall sits inside a fully residential campus, a short walk from academic pods, the learning resource centre, and the dining complex.",
    ],
    facilities: [
      {
        icon: "cool",
        title: "Air cooling",
        detail: "The hall is centrally air cooled.",
      },
      ...sharedFacilities,
    ],
    hec: [
      hecEntry("Warden", "Dr. Sivaraj Mohana Sundaram", "warden.apj@iiti.ac.in", "0731-6605122"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.apj@iiti.ac.in", "0731-6603149"),
      hecEntry("Caretaker", "Mr. Prashant Pahare", "office.apj@iiti.ac.in", "0731-6603149"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.apj@iiti.ac.in", "0731-6603149"),
    ],
    notices: [
      {
        date: "18 Aug 2026",
        title: "Room inventory check",
        body: "Residents should be present when the caretaker verifies cot, table, and almirah fittings. Report shortages the same day at the hall desk.",
      },
      {
        date: "02 Aug 2026",
        title: "Air-cooling maintenance window",
        body: "Plant-side servicing is scheduled on a weekday afternoon. Keep windows closed while the system is restarted.",
      },
    ],
    events: [
      {
        date: "September",
        title: "APJ hall night",
        place: "Common room",
        detail: "Music, quizzes, and a hall photograph for the Hostel Dazz gallery.",
      },
      {
        date: "October",
        title: "Badminton ladder",
        place: "Residential courts",
        detail: "Internal ladder before the inter-hostel championship.",
      },
    ],
  },
  {
    id: "vsb",
    code: "VSB",
    shortName: "VSB HOR",
    name: "Vikram Sarabhai Hall of Residence",
    tagline: "Shared rooms · 574 capacity",
    audience: "Students",
    capacity: "574 rooms",
    image: photos.campus,
    gallery: [photos.campus, photos.walkway, photos.friends, photos.library],
    warden: {
      name: "Dr. Sansuma Brahma",
      email: "warden.vsb@iiti.ac.in",
      phone: "0731-6605576",
    },
    officeEmail: "office.vsb@iiti.ac.in",
    officePhone: "0731-6603455",
    about: [
      "Vikram Sarabhai Hall of Residence houses students in shared rooms across a 574-room block. The hall is named for the scientist who shaped India’s space programme, and the common room keeps newspapers and a notice board for hall life.",
      "Dr. Sansuma Brahma is the warden. Day-to-day desk work sits with the junior assistant at the hall office. Residents use the same central mess, campus Wi-Fi, and security cover as the other halls.",
    ],
    facilities: sharedFacilities,
    hec: [
      hecEntry("Warden", "Dr. Sansuma Brahma", "warden.vsb@iiti.ac.in", "0731-6605576"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.vsb@iiti.ac.in", "0731-6603455"),
      hecEntry("Caretaker", "Mr. Subham Yadav", "office.vsb@iiti.ac.in", "0731-6603455"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.vsb@iiti.ac.in", "0731-6603455"),
    ],
    notices: [
      {
        date: "21 Aug 2026",
        title: "Common room timings",
        body: "The lounge stays open through the evening. Keep volume low after 10:30 pm so rooms along the corridor can study.",
      },
      {
        date: "05 Aug 2026",
        title: "Visitor register",
        body: "Guests must be entered at the security desk. Overnight guests need prior written approval from the warden.",
      },
    ],
    events: [
      {
        date: "September",
        title: "Sarabhai quiz evening",
        place: "VSB common room",
        detail: "A hall quiz ahead of the cultural fest.",
      },
      {
        date: "October",
        title: "Football selections",
        place: "Sports field",
        detail: "Trials for the VSB side in the inter-hostel championship.",
      },
    ],
  },
  {
    id: "hjb",
    code: "HJB",
    shortName: "HJB HOR",
    name: "Homi Jehangir Bhabha Hall of Residence",
    tagline: "Shared rooms · 574 capacity",
    audience: "Students",
    capacity: "574 rooms",
    image: photos.columns,
    gallery: [photos.columns, photos.books, photos.gathering, photos.field],
    warden: {
      name: "Dr. Ayan Mondal",
      email: "warden.hjb@iiti.ac.in",
      phone: "0731-6603279",
    },
    officeEmail: "office.hjb@iiti.ac.in",
    officePhone: "0731-6603447",
    about: [
      "Homi Jehangir Bhabha Hall of Residence is a 574-room student hall. Rooms are allotted on a sharing basis, which is how the institute builds the close working friendships alumni talk about long after they leave Simrol.",
      "The warden is Dr. Ayan Mondal. The hall office on extension 3447 is the first stop for maintenance, leave papers, and guest entries. Meals are at the Central Dining Hall, not in a separate mess inside the block.",
    ],
    facilities: sharedFacilities,
    hec: [
      hecEntry("Warden", "Dr. Ayan Mondal", "warden.hjb@iiti.ac.in", "0731-6603279"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.hjb@iiti.ac.in", "0731-6603447"),
      hecEntry("Caretaker", "Mr. Mahesh Kumar Sahu", "office.hjb@iiti.ac.in", "0731-6603447"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.hjb@iiti.ac.in", "0731-6603447"),
    ],
    notices: [
      {
        date: "16 Aug 2026",
        title: "Electrical complaint hour",
        body: "Fan, tube, and switch faults logged before 4 pm are passed to the works desk the same day.",
      },
      {
        date: "28 Jul 2026",
        title: "Anti-ragging reminder",
        body: "Any concern can be taken to the warden or hall staff. The reporter’s identity is kept confidential.",
      },
    ],
    events: [
      {
        date: "August",
        title: "HJB freshers’ evening",
        place: "Hall quadrangle",
        detail: "A welcome evening hosted with the hall secretary.",
      },
      {
        date: "November",
        title: "Chess and carrom open",
        place: "Common room",
        detail: "Internal finals feeding the inter-hostel indoor meet.",
      },
    ],
  },
  {
    id: "cvr",
    code: "CVR",
    shortName: "CVR HOR",
    name: "C.V. Raman Hall of Residence",
    tagline: "Shared rooms · 574 capacity",
    audience: "Students",
    capacity: "574 rooms",
    image: photos.library,
    gallery: [photos.library, photos.books, photos.study, photos.walkway],
    warden: {
      name: "Dr. Akshay Pratap Singh",
      email: "warden.cvr@iiti.ac.in",
      phone: "0731-6605171",
    },
    officeEmail: "office.cvr@iiti.ac.in",
    officePhone: "0731-6603454",
    about: [
      "C.V. Raman Hall of Residence provides 574 shared rooms for students of the institute. The hall office is the everyday contact for keys, complaints, and forms, while academic and dining buildings are a short walk away.",
      "Dr. Akshay Pratap Singh is the warden. Like the other student halls, CVR has furnished rooms, common-room reading material, laundry, indoor games, and round-the-clock security.",
    ],
    facilities: sharedFacilities,
    hec: [
      hecEntry("Warden", "Dr. Akshay Pratap Singh", "warden.cvr@iiti.ac.in", "0731-6605171"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.cvr@iiti.ac.in", "0731-6603454"),
      hecEntry("Caretaker", "Mr. Subham Yadav", "office.cvr@iiti.ac.in", "0731-6603454"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.cvr@iiti.ac.in", "0731-6603454"),
    ],
    notices: [
      {
        date: "11 Aug 2026",
        title: "Leave form desk",
        body: "Weekend home travel should be entered on the leave form and countersigned before departure. Blank copies are with the caretaker.",
      },
      {
        date: "22 Jul 2026",
        title: "Laundry tokens",
        body: "Collect a fresh token batch from the hall office on Monday morning.",
      },
    ],
    events: [
      {
        date: "September",
        title: "Raman memorial talk",
        place: "Common room",
        detail: "A short student talk and hall dinner photo at the central mess.",
      },
      {
        date: "October",
        title: "Athletics heats",
        place: "Sports complex",
        detail: "100 m and relay heats for the inter-hostel meet.",
      },
    ],
  },
  {
    id: "da",
    code: "DA",
    shortName: "DA HOR",
    name: "Devi Ahilya Hall of Residence",
    tagline: "Women residents · 574 rooms",
    audience: "Women students",
    capacity: "574 rooms",
    image: photos.garden,
    gallery: [photos.garden, photos.friends, photos.study, photos.columns],
    warden: {
      name: "Dr. Aratrika Das",
      email: "warden.da@iiti.ac.in",
      phone: "0731-6603528",
    },
    officeEmail: "office.da@iiti.ac.in",
    officePhone: "0731-6603450",
    about: [
      "Devi Ahilya Hall of Residence is the institute’s hall dedicated to women students. It has 574 rooms and is looked after by Warden Dr. Aratrika Das and Associate Warden Dr. Srashtasrita Das.",
      "The hall is meant to be a secure, comfortable base for study and campus life. Entry is supervised, CCTV and security are in place, and residents use the central dining facility, campus Wi-Fi, laundry, and the shared sports and gym spaces.",
    ],
    facilities: [
      {
        icon: "shield",
        title: "Supervised entry",
        detail: "Security desk and CCTV, with guest entries cleared by the hall office.",
      },
      ...sharedFacilities.filter((item) => item.icon !== "shield"),
    ],
    hec: [
      hecEntry("Warden", "Dr. Aratrika Das", "warden.da@iiti.ac.in", "0731-6603528"),
      hecEntry("Associate Warden", "Dr. Srashtasrita Das", "awarden.da@iiti.ac.in", "0731-6603333 ext. 5283"),
      hecEntry("Caretaker", "Ms. Tanishka Sikarwar", "office.da@iiti.ac.in", "0731-6603450"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.da@iiti.ac.in", "0731-6603450"),
    ],
    notices: [
      {
        date: "19 Aug 2026",
        title: "Guest entry timing",
        body: "Day guests must be signed in at the security desk and leave by the hour posted on the hall notice board.",
      },
      {
        date: "30 Jul 2026",
        title: "Warden open hour",
        body: "Residents can meet the warden’s office on the published weekday slot. Write to warden.da@iiti.ac.in to book a time.",
      },
    ],
    events: [
      {
        date: "October",
        title: "Ahilya evening",
        place: "DA common room",
        detail: "Music and a photo corner for the Hostel Dazz gallery.",
      },
      {
        date: "November",
        title: "Indoor sports hour",
        place: "Hall sports room",
        detail: "Badminton and board games ahead of the women’s fixtures.",
      },
    ],
  },
  {
    id: "dae",
    code: "DAE",
    shortName: "DAE HOR",
    name: "Devi Ahilya Extension Hall of Residence",
    tagline: "Women residents · DA extension",
    audience: "Women students",
    capacity: "Extension of DA Hall",
    image: photos.residence,
    gallery: [photos.residence, photos.garden, photos.room, photos.friends],
    warden: {
      name: "Dr. Aratrika Das",
      email: "warden.da@iiti.ac.in",
      phone: "0731-6603528",
    },
    officeEmail: "office.da@iiti.ac.in",
    officePhone: "0731-6603450",
    about: [
      "DAE HOR is the Devi Ahilya extension, the additional women’s accommodation administered with Devi Ahilya Hall. The institute staff directory lists one junior assistant for DA and the DA extension, and the same hall office handles both desks.",
      "Warden Dr. Aratrika Das holds additional charge, with Dr. Srashtasrita Das as associate warden. Room type, security, and dining follow the Devi Ahilya pattern: shared furnished rooms, supervised entry, and meals at the Central Dining Hall.",
    ],
    facilities: [
      {
        icon: "shield",
        title: "Supervised entry",
        detail: "Extension entry is covered by the Devi Ahilya security arrangement.",
      },
      ...sharedFacilities.filter((item) => item.icon !== "shield"),
    ],
    hec: [
      hecEntry("Warden", "Dr. Aratrika Das (additional charge)", "warden.da@iiti.ac.in", "0731-6603528"),
      hecEntry("Associate Warden", "Dr. Srashtasrita Das", "awarden.da@iiti.ac.in", "0731-6603333 ext. 5283"),
      hecEntry("Caretaker", "Ms. Tanishka Sikarwar", "office.da@iiti.ac.in", "0731-6603450"),
      hecEntry("Hall Secretary", "Elected with Devi Ahilya Hall", "office.da@iiti.ac.in", "0731-6603450"),
    ],
    notices: [
      {
        date: "14 Aug 2026",
        title: "Extension desk hours",
        body: "Keys, complaints, and forms for DAE are accepted at the DA hall office on 0731-6603450.",
      },
      {
        date: "01 Aug 2026",
        title: "Allotment slips",
        body: "Residents moving between DA and the extension should collect a revised allotment slip before shifting luggage.",
      },
    ],
    events: [
      {
        date: "October",
        title: "DA & DAE joint evening",
        place: "Devi Ahilya common room",
        detail: "A shared cultural evening for both women’s halls.",
      },
      {
        date: "November",
        title: "Walk and wellness morning",
        place: "Campus loop",
        detail: "An easy morning walk organised with the sports secretary.",
      },
    ],
  },
  {
    id: "pm-ajay",
    code: "PM-AJAY",
    shortName: "PM-AJAY HOSTEL",
    name: "P.M. Ajay Hall of Residence",
    tagline: "Shared rooms · 264 rooms",
    audience: "Students",
    capacity: "264 rooms",
    image: photos.walkway,
    gallery: [photos.walkway, photos.residence, photos.study, photos.dining],
    warden: {
      name: "Dr. Sansuma Brahma",
      email: "warden.pmajay@iiti.ac.in",
      phone: "0731-6605576",
    },
    officeEmail: "office.pmajay@iiti.ac.in",
    officePhone: "0731-6605271",
    about: [
      "P.M. Ajay Hall of Residence is a smaller student block with 264 rooms. Dr. Sansuma Brahma is the warden, alongside charge of Vikram Sarabhai Hall, and the hall keeps its own office desk.",
      "Residents have the standard furnished room, Wi-Fi, common room, laundry, and security cover. Food is served at the Central Dining Hall, which can seat the campus at scale and also houses kiosks for everyday needs.",
    ],
    facilities: sharedFacilities,
    hec: [
      hecEntry("Warden", "Dr. Sansuma Brahma", "warden.pmajay@iiti.ac.in", "0731-6605576"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.pmajay@iiti.ac.in", "0731-6605271"),
      hecEntry("Caretaker", "Mr. Aman Jain", "office.pmajay@iiti.ac.in", "0731-6605271"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.pmajay@iiti.ac.in", "0731-6605271"),
    ],
    notices: [
      {
        date: "09 Aug 2026",
        title: "Allotment confirmation",
        body: "Newly allotted residents should confirm the room number at the PM-AJAY desk before collecting keys.",
      },
      {
        date: "25 Jul 2026",
        title: "Maintenance slip",
        body: "Plumbing and civil slips are collected twice a day at the caretaker window.",
      },
    ],
    events: [
      {
        date: "September",
        title: "PM-AJAY open mic",
        place: "Common room",
        detail: "A short evening of music and readings.",
      },
      {
        date: "October",
        title: "Cricket nets",
        place: "Practice nets",
        detail: "Hall practice before the championship weekend.",
      },
    ],
  },
  {
    id: "bh-07",
    code: "BH-07",
    shortName: "BH-07 HOSTEL",
    name: "BH-07 Hall of Residence",
    tagline: "New hall · Large capacity",
    audience: "Students",
    capacity: "732",
    image: photos.residence,
    gallery: [photos.residence, photos.modern, photos.field, photos.gym],
    warden: {
      name: "Dr. Subhadeep Paladhi",
      email: "warden.bh07@iiti.ac.in",
      phone: "0731-6603307",
    },
    officeEmail: "office.bh07@iiti.ac.in",
    officePhone: "0731-6605351",
    about: [
      "BH-07 is the newer, larger hall of residence, listed by the institute with a capacity of 732. Dr. Subhadeep Paladhi is the warden. The public directory identifies it as the new hostel block on campus.",
      "The hall office on 0731-6605351 is the first point of contact. Rooms follow the institute standard — sharing, basic furniture, Wi-Fi, and security — and residents join the rest of the campus at the Central Dining Hall.",
    ],
    facilities: sharedFacilities,
    hec: [
      hecEntry("Warden", "Dr. Subhadeep Paladhi", "warden.bh07@iiti.ac.in", "0731-6603307"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.bh07@iiti.ac.in", "0731-6605351"),
      hecEntry("Caretaker", "BH-07 Hall Office", "office.bh07@iiti.ac.in", "0731-6605351"),
      hecEntry("Hall Secretary", "Elected by the residents", "office.bh07@iiti.ac.in", "0731-6605351"),
    ],
    notices: [
      {
        date: "20 Aug 2026",
        title: "New-block orientation",
        body: "Residents allotted to BH-07 should attend the hall briefing for entry rules, complaint routing, and mess registration.",
      },
      {
        date: "06 Aug 2026",
        title: "Snag list",
        body: "Civil or electrical snags in newly occupied rooms can be mailed to office.bh07@iiti.ac.in with the room number.",
      },
    ],
    events: [
      {
        date: "September",
        title: "BH-07 house evening",
        place: "Hall lawn",
        detail: "The first house evening of the session, open to residents of the block.",
      },
      {
        date: "October",
        title: "Basketball trials",
        place: "Sports complex",
        detail: "Selections for the BH-07 championship squad.",
      },
    ],
  },
  {
    id: "jcb",
    code: "JCB",
    shortName: "JCB HOR",
    name: "Jagadish Chandra Bose Hall of Residence",
    tagline: "Married scholars & staff · Apartments",
    audience: "Married students and staff",
    capacity: "Single-room apartments",
    image: photos.apartment,
    gallery: [photos.apartment, photos.garden, photos.residence, photos.dining],
    warden: {
      name: "Dr. Sourav Chandra",
      email: "warden.jcb@iiti.ac.in",
      phone: "0731-6605159",
    },
    officeEmail: "office.jcb@iiti.ac.in",
    officePhone: "0731-6605315",
    about: [
      "Jagadish Chandra Bose Hall of Residence is set aside for married research students and some staff of the institute. Each unit is a single-room apartment with a small kitchen, rather than a shared student room.",
      "Dr. Sourav Chandra is the warden. Accommodation requests are only for married students and IITI staff, and they are processed through the hall office. Family guests still follow the guest and security rules published by the Chief Warden Office.",
    ],
    facilities: [
      {
        icon: "apartment",
        title: "Apartment kitchen",
        detail: "A single-room apartment with a small kitchen for married residents and staff.",
      },
      {
        icon: "wifi",
        title: "Wi-Fi",
        detail: "Campus network access for the apartment.",
      },
      {
        icon: "shield",
        title: "Security",
        detail: "CCTV and security cover consistent with the other halls.",
      },
      {
        icon: "mess",
        title: "Dining option",
        detail: "Central Dining Hall remains available; apartments also have a kitchen.",
      },
      {
        icon: "laundry",
        title: "Laundry",
        detail: "Campus laundry facilities are open to residents.",
      },
      {
        icon: "gym",
        title: "Gymnasium",
        detail: "Campus gymnasium and sports fields are shared with the other halls.",
      },
    ],
    hec: [
      hecEntry("Warden", "Dr. Sourav Chandra", "warden.jcb@iiti.ac.in", "0731-6605159"),
      hecEntry("Associate Warden", "Announced by the Hall Office each session", "office.jcb@iiti.ac.in", "0731-6605315"),
      hecEntry("Caretaker", "Ms. Pratibha Sunil Chandanshive", "office.jcb@iiti.ac.in", "0731-6605315"),
      hecEntry("Hall Secretary", "Residents’ representative", "office.jcb@iiti.ac.in", "0731-6605315"),
    ],
    notices: [
      {
        date: "15 Aug 2026",
        title: "Apartment request window",
        body: "Married students and staff seeking a J.C. Bose apartment should write to office.jcb@iiti.ac.in with the supporting note from the academic or administration office.",
      },
      {
        date: "27 Jul 2026",
        title: "Kitchen safety",
        body: "Keep the apartment kitchen clear of stored cardboard. Report gas or electrical smell to security immediately.",
      },
    ],
    events: [
      {
        date: "September",
        title: "Residents’ meet",
        place: "JCB common area",
        detail: "A start-of-session meeting with the warden and caretaker.",
      },
      {
        date: "December",
        title: "Family evening",
        place: "Hall lawn",
        detail: "A quiet evening for apartment residents during Hostel Dazz week.",
      },
    ],
  },
];

export function getHostelById(id) {
  return hostels.find((hostel) => hostel.id === id);
}
