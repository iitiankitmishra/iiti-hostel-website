import { photos } from "./media";

export const pages = {
  "rules/hostel-rules": {
    eyebrow: "Rules",
    title: "Hostel Rules",
    intro:
      "IIT Indore is fully residential. These are the everyday rules residents are expected to follow inside every hall of residence.",
    sections: [
      {
        heading: "Living in the hall",
        bullets: [
          "Rooms are allotted by the hall office. Residents must not exchange or sublet a room without written approval.",
          "Each room is issued with a cot, study table, and almirah. Damage beyond normal wear is chargeable at the time of no-dues.",
          "Quiet hours run through the night. Music, speakers, and group work should shift to the common room.",
          "The hall office must be told if a resident will be away overnight. Use the leave form before travelling home.",
          "Guests are signed in at the security desk. Overnight guests need the warden’s prior approval.",
        ],
      },
      {
        heading: "Care of the building",
        bullets: [
          "Cooking is not permitted in shared student rooms. J.C. Bose apartments are the exception, and those kitchens must be kept clear and safe.",
          "Posters, nails, and extra wiring on walls need the caretaker’s consent.",
          "Electrical complaints, leaks, and civil defects go to the hall office the same day they are noticed.",
          "CCTV and the security guard are part of the hall. Tampering with either is a disciplinary matter.",
        ],
      },
    ],
  },
  "rules/mess-rules": {
    eyebrow: "Rules",
    title: "Mess Rules",
    intro:
      "Every hostel resident dines at the Central Dining Hall. A students’ dining committee sets the menu and watches hygiene, quality, and taste, and reports to the Dining Warden.",
    sections: [
      {
        heading: "At the dining hall",
        bullets: [
          "Mess membership is part of residence. Carry your identity card if the counter asks for it.",
          "Food is for residents. Taking meals out for someone who is not enrolled needs the dining office’s say-so.",
          "Plates, cups, and cutlery stay inside the hall. Waste goes into the bins provided, with wet and dry kept apart.",
          "Feedback on a dish is welcome. Write to diningwardenoffice@iiti.ac.in or speak to the mess convenor.",
          "The night canteen is a separate counter and follows its own posted hours.",
        ],
      },
      {
        heading: "Dining Warden",
        body: "Dr. Kalandi Charan Pradhan, Dining Warden. Office: diningwardenoffice@iiti.ac.in · 0731-6605155. The hall is equipped for about 2,500 diners at a time, with a listed capacity of 3,000, and runs three kitchens.",
      },
    ],
  },
  "rules/disciplinary-guidelines": {
    eyebrow: "Rules",
    title: "Disciplinary Guidelines",
    intro:
      "Hall discipline is there to keep a shared residential campus safe and liveable. The warden of the hall is the first authority, and the Chief Warden Office takes up matters that go beyond one hall.",
    sections: [
      {
        heading: "What invites action",
        bullets: [
          "Ragging, harassment, or intimidation of any resident.",
          "Possession or use of prohibited substances, or bringing the campus police matter into a room.",
          "Damage to furniture, doors, CCTV, or fire equipment.",
          "Repeated quiet-hour violations, unauthorised guests, or subletting.",
          "Misuse of the campus network, including sharing login credentials.",
        ],
      },
      {
        heading: "How a matter moves",
        bullets: [
          "The caretaker or security desk notes the incident and informs the warden.",
          "The resident is heard before a penalty is recommended.",
          "Serious cases are reported to the Chief Warden and, where needed, to Student Affairs.",
          "Penalties can include a warning, recovery of cost, restriction of privileges, or referral to the institute disciplinary process.",
        ],
      },
    ],
  },
  "rules/anti-ragging": {
    eyebrow: "Rules",
    title: "Anti-Ragging Policy",
    intro:
      "IIT Indore treats ragging as a criminal offence and has zero tolerance for it. An anti-ragging committee works to keep the halls free of ragging, and students are reminded of the consequences through the year.",
    sections: [
      {
        heading: "If you need to report",
        bullets: [
          "Speak to your hostel warden or any hall staff member. You may also write to chiefwarden@iiti.ac.in.",
          "The identity of a person who reports ragging is kept strictly confidential.",
          "Security can be reached immediately on +91-6265224771 if someone is unsafe right now.",
          "Do not confront a group alone. Move to the security desk or the hall office and ask for the warden.",
        ],
      },
      {
        heading: "What counts",
        body: "Any conduct that insults, frightens, excludes, or forces a student — including online — can amount to ragging. Seniors do not have a right to “introduce” juniors through tasks, abuse, or humiliation. A friendly campus does not need that, and the institute will not treat it as tradition.",
      },
    ],
  },
  "booking/guest-house": {
    eyebrow: "Hostel Booking",
    title: "Guest House Booking",
    intro:
      "Official guests of the institute, and visitors cleared by a faculty or staff host, are booked through the Guest House Office. This is separate from a student bringing a personal guest into a hall.",
    contacts: [
      { label: "Guest House Manager", value: "Mr. Ashok Garasiya" },
      { label: "Phone", value: "0731-6603422", href: "tel:07316603422" },
      { label: "Email", value: "guesthouse@iiti.ac.in", href: "mailto:guesthouse@iiti.ac.in" },
    ],
    sections: [
      {
        heading: "How to request",
        bullets: [
          "Write to guesthouse@iiti.ac.in with arrival and departure dates, number of guests, and the name of the faculty or office host.",
          "Student-initiated guest house stays need the warden or the concerned faculty member to confirm the request.",
          "Personal overnight guests inside a hall are not booked here. Use the guest accommodation form and your hall office.",
        ],
      },
    ],
  },
  "booking/student-allotment": {
    eyebrow: "Hostel Booking",
    title: "Student Allotment",
    intro:
      "Accommodation is provided on a sharing basis for students of all academic programmes. Allotment is done by the Hall of Residence Office at the start of a programme and when a student changes status.",
    sections: [
      {
        heading: "What to expect",
        bullets: [
          "New students receive a hall and room after admission formalities and the anti-ragging undertaking.",
          "Women students are allotted in Devi Ahilya Hall or the Devi Ahilya extension.",
          "Married research students and eligible staff apply separately for a J.C. Bose apartment.",
          "Room changes during the semester need a written request to the warden, copied to the Chief Warden Office.",
          "Write to hostel@iiti.ac.in or call 0731-6603468 for allotment questions.",
        ],
      },
    ],
  },
  "booking/vacation-stay": {
    eyebrow: "Hostel Booking",
    title: "Vacation Stay",
    intro:
      "Halls are not automatically open as hotels during vacations. A resident who needs to stay back for research, a project, or an institute duty must take approval before the vacation begins.",
    sections: [
      {
        heading: "Apply before you stay",
        bullets: [
          "Send a short request to your warden with dates, reason, and the faculty supervisor’s note if the stay is academic.",
          "The caretaker will confirm whether your current room remains with you or you will shift to a designated vacation block.",
          "Mess service during vacations may be a reduced menu. Check with diningwardenoffice@iiti.ac.in.",
          "Unapproved stay can be treated as a disciplinary matter and may affect the no-dues clearance.",
        ],
      },
    ],
  },
  "booking/rules": {
    eyebrow: "Hostel Booking",
    title: "Booking Rules",
    intro: "A short reading of who can book what on the residential campus.",
    sections: [
      {
        heading: "Which desk to use",
        bullets: [
          "Student room allotment: Hall of Residence Office, hostel@iiti.ac.in.",
          "Vacation stay: the warden of your own hall.",
          "Guest house for official visitors: guesthouse@iiti.ac.in, 0731-6603422.",
          "Personal guest inside a hall: guest accommodation form, approved by the warden before arrival.",
          "J.C. Bose apartments: married students and institute staff only, through office.jcb@iiti.ac.in.",
        ],
      },
    ],
  },
  "forms/no-dues": {
    eyebrow: "Download Forms",
    title: "No Dues Form",
    intro:
      "Clearance from the hall is required before you leave the institute or withdraw from residence. Print this sheet, complete it, and submit it at your hall office. Ask the caretaker if a newer institute copy is in circulation.",
    printable: {
      id: "no-dues",
      fields: ["Name", "Roll number", "Hall and room", "Programme", "Date of vacating", "Caretaker remark", "Warden signature"],
    },
    sections: [
      {
        heading: "Clear these desks",
        bullets: [
          "Hall caretaker, for keys, furniture, and room condition.",
          "Dining office, for mess dues.",
          "Accounts, if a caution deposit is involved, through the HCU accounts desk.",
          "Library and academics run their own no-dues. This sheet covers the hall only.",
        ],
      },
    ],
  },
  "forms/leave": {
    eyebrow: "Download Forms",
    title: "Leave Form",
    intro:
      "Use this when you will be away from the hall overnight. Submit it to the caretaker before you travel. In an emergency, inform security and file the form on the next working day.",
    printable: {
      id: "leave",
      fields: ["Name", "Roll number", "Hall and room", "Leaving on", "Returning on", "Destination and contact number", "Parent or supervisor informed", "Warden / caretaker signature"],
    },
    sections: [
      {
        heading: "Before you go",
        bullets: [
          "Lock the room and hand over nothing to an unregistered guest.",
          "If you share the room, tell your roommate the dates.",
          "Late-night departure should be noted at the security desk as well.",
        ],
      },
    ],
  },
  "forms/guest-accommodation": {
    eyebrow: "Download Forms",
    title: "Guest Accommodation Form",
    intro:
      "A personal guest in the hall needs this form and the warden’s approval before arrival. Parents, siblings, and project collaborators are typical cases. The guest house is a different booking.",
    printable: {
      id: "guest",
      fields: ["Resident name and room", "Guest name", "Relationship", "ID proof type", "From", "To", "Purpose", "Warden approval"],
    },
    sections: [
      {
        heading: "At the gate",
        bullets: [
          "The guest signs the security register and keeps photo identification.",
          "Devi Ahilya and the extension follow the women’s hall guest timings posted on their notice board.",
          "Approval can be refused if the hall is full or the dates clash with an institute event.",
        ],
      },
    ],
  },
  "forms/maintenance-request": {
    eyebrow: "Download Forms",
    title: "Maintenance Request",
    intro:
      "For a paper slip at the caretaker window, print this request. For a faster route, use the complaint pages and email the hall office with the same details.",
    printable: {
      id: "maintenance",
      fields: ["Name", "Hall and room", "Category (electrical / plumbing / civil / other)", "Description", "Date noticed", "Caretaker received on"],
    },
    formCategory: "Maintenance",
    sections: [
      {
        heading: "What helps the works desk",
        bullets: [
          "Room number, a plain description, and whether the fault is unsafe right now.",
          "A photo can be attached to the email. Do not send pictures of people.",
          "Water leakage and burning smell should also be told to security on the hall desk phone.",
        ],
      },
    ],
  },
  "facilities/central-mess": {
    eyebrow: "Facilities",
    title: "Central Mess",
    intro:
      "Dining, academic pods, and the Learning Resource Centre sit together, so a resident can walk from class to the library to a meal. The Central Dining Hall is mandatory for hostel residents.",
    image: photos.dining,
    contacts: [
      { label: "Dining Warden", value: "Dr. Kalandi Charan Pradhan" },
      { label: "Warden email", value: "diningwarden@iiti.ac.in", href: "mailto:diningwarden@iiti.ac.in" },
      { label: "Office", value: "diningwardenoffice@iiti.ac.in", href: "mailto:diningwardenoffice@iiti.ac.in" },
      { label: "Phone", value: "0731-6605155", href: "tel:07316605155" },
    ],
    sections: [
      {
        heading: "How the mess is run",
        bullets: [
          "Three kitchens serve up to about 2,500 people at a time. The hall’s listed capacity is 3,000.",
          "A students’ dining committee decides the menu and checks hygiene, quality, and taste.",
          "The committee reports to the Dining Warden.",
          "Kiosks for snacks, groceries, and small electronics sit alongside the dining hall.",
          "Frequent feedback is how quality is kept. Complaints can go to the dining office or the mess convenor.",
        ],
      },
    ],
  },
  "facilities/night-canteen": {
    eyebrow: "Facilities",
    title: "Night Canteen",
    intro:
      "A night canteen runs from the central dining area for residents who need a meal or a snack after the main mess service. Hours move with the academic calendar and are posted at the counter.",
    image: photos.dining,
    sections: [
      {
        heading: "Using the canteen",
        bullets: [
          "It is for campus residents. Guests pay as the counter directs.",
          "Packets and cups go into the bins. The night staff is a small team, so clear your table.",
          "Menu suggestions can be sent to diningwardenoffice@iiti.ac.in.",
          "The canteen is not a substitute for the subscribed mess meal.",
        ],
      },
    ],
  },
  "facilities/sports": {
    eyebrow: "Facilities",
    title: "Sports Facilities",
    intro:
      "Each hall has indoor games, and the campus holds the larger courts and fields used for the inter-hostel championship.",
    image: photos.field,
    sections: [
      {
        heading: "Where to play",
        bullets: [
          "Indoor boards and table games in the hall common room.",
          "Badminton courts on the residential campus.",
          "Outdoor fields for football, cricket, and athletics.",
          "The gymnasium is shared. See Laundry & Gymnasium for access notes.",
          "Hall teams are fielded through the sports secretary during Hostel Dazz season.",
        ],
      },
    ],
  },
  "facilities/laundry-gym": {
    eyebrow: "Facilities",
    title: "Laundry & Gymnasium",
    intro:
      "Laundry is provided for hall residents, and the gymnasium is a campus facility shared by all halls rather than a private gym inside every block.",
    image: photos.gym,
    sections: [
      {
        heading: "Laundry",
        bullets: [
          "Tokens or slots are issued by the hall caretaker.",
          "Mark your clothes. The desk cannot sort unmarked items reliably.",
          "Report a damaged machine to the caretaker instead of trying to repair it.",
        ],
      },
      {
        heading: "Gymnasium",
        bullets: [
          "Use indoor shoes and a towel. Outdoor boots stay outside.",
          "Re-rack weights. The next resident is usually a neighbour from another hall.",
          "If you are new to a machine, ask the attendant rather than guessing a load.",
          "Hours are posted at the gym door and may change during examinations.",
        ],
      },
    ],
  },
  "facilities/wifi": {
    eyebrow: "Facilities",
    title: "Wi-Fi Setup",
    intro:
      "Every hall has 24-hour high-speed internet. Devices are registered so the network stays traceable and fair for the whole campus.",
    sections: [
      {
        heading: "Getting connected",
        bullets: [
          "Use the credentials issued when you join. Do not share them with a roommate or a guest.",
          "Register laptops and phones with the hall office or the campus network desk, including the device MAC address if they ask for it.",
          "A guest device is temporary and should be removed when the guest leaves.",
          "Wired LAN faults inside a room are an Internet/LAN complaint, not a password reset.",
          "Streaming and downloads that choke a floor will be throttled. Academic use comes first during examinations.",
        ],
      },
    ],
  },
  "complaints/maintenance": {
    eyebrow: "Complaints",
    title: "Maintenance Portal",
    intro:
      "Start with your hall office. The caretaker routes civil, electrical, plumbing, and housekeeping jobs to the works desks. This page helps you draft that message.",
    formCategory: "Maintenance",
    sections: [
      {
        heading: "Before you write",
        bullets: [
          "Note the hall, room number, and when the fault started.",
          "Say if water, power, or a lock is unsafe right now, and call the hall security desk as well.",
          "Keep one complaint per issue so the works ticket stays clear.",
        ],
      },
    ],
  },
  "complaints/electrical": {
    eyebrow: "Complaints",
    title: "Electrical",
    intro: "Fans, tubes, switches, and room wiring are logged with the hall caretaker and passed to the electrical works desk.",
    formCategory: "Electrical",
    sections: [
      {
        heading: "Stay safe",
        bullets: [
          "Do not open a switchboard or tape a bare wire.",
          "A burning smell or spark is an emergency. Leave the room and call security on +91-6265224771.",
          "Extra heaters and open hotplates are not allowed in shared rooms.",
        ],
      },
    ],
  },
  "complaints/plumbing": {
    eyebrow: "Complaints",
    title: "Plumbing",
    intro: "Leaks, blocked drains, and low water pressure are plumbing complaints. A spreading leak should be reported by phone the same hour.",
    formCategory: "Plumbing",
    sections: [
      {
        heading: "What to include",
        bullets: [
          "Washroom or room number, and whether water is reaching the corridor.",
          "A photo of the leak helps the plumber carry the right part.",
          "Do not leave a tap running to “keep the line alive”.",
        ],
      },
    ],
  },
  "complaints/internet": {
    eyebrow: "Complaints",
    title: "Internet / LAN",
    intro: "Room Wi-Fi and LAN points are maintained with the campus network team. Password sharing is not a fix, and it breaks the acceptable-use rule.",
    formCategory: "Internet/LAN",
    sections: [
      {
        heading: "Useful details",
        bullets: [
          "Is the fault one room, one floor, or the whole hall?",
          "Wi-Fi, wired LAN, or both?",
          "Device type, and whether other residents see the same drop.",
          "Write to your hall office and mark the subject Internet/LAN.",
        ],
      },
    ],
  },
  "complaints/security": {
    eyebrow: "Complaints",
    title: "Security",
    intro:
      "For anything happening right now — a stranger in the corridor, a lost resident, a medical emergency — call the security hotline before you fill in a form.",
    formCategory: "Security",
    urgent: true,
    contacts: [
      { label: "Security supervisor", value: "+91-6265224771", href: "tel:+916265224771" },
      { label: "Control room", value: "0731-6603524 / 9589518299", href: "tel:9589518299" },
      { label: "Email", value: "securityhelpdesk@iiti.ac.in", href: "mailto:securityhelpdesk@iiti.ac.in" },
    ],
    sections: [
      {
        heading: "Non-emergency reports",
        body: "Lost ID cards, a broken lock, or a gate procedure question can go to the hall security desk and then by email to securityhelpdesk@iiti.ac.in. Ragging reports can also go straight to the warden; your name will be kept confidential.",
      },
    ],
  },
  "dazz/events": {
    eyebrow: "Hostel Dazz",
    title: "Events",
    intro:
      "Hostel Dazz is the residential calendar: hall nights, the annual cultural fest, and the inter-hostel sports championship. Dates are fixed by the student council with the Chief Warden and announced on this board.",
    events: [
      {
        date: "September",
        title: "Hall nights",
        venue: "Each hall common room",
        detail: "Music, quizzes, and house photographs. Open to residents of that hall.",
      },
      {
        date: "October",
        title: "Inter-hostel sports weekend",
        venue: "Sports complex",
        detail: "Athletics, football, cricket, and indoor finals. Squads come through the sports secretary.",
      },
      {
        date: "November",
        title: "Annual cultural fest",
        venue: "Campus lawns",
        detail: "The main Hostel Dazz nights: performances, food stalls run with the mess, and the gallery wall.",
      },
    ],
  },
  "dazz/cultural-fest": {
    eyebrow: "Hostel Dazz",
    title: "Annual Hostel Cultural Fest",
    intro:
      "The cultural fest is the night the nine halls share one stage. It is organised by the cultural secretary with the General Secretary (Hostels), under the Chief Warden’s permission for timings, sound, and guest entry.",
    image: photos.fest,
    sections: [
      {
        heading: "Taking part",
        bullets: [
          "Each hall puts up at least one performance. Rehearsals stay inside quiet hours unless the warden clears a later slot.",
          "Outside guests need the guest form. A fest pass is not a substitute for the security register.",
          "Stalls that serve food must be agreed with the Dining Warden so they do not clash with the mess menu.",
          "Write to hostel@iiti.ac.in with the subject Hostel Dazz to reach the council desk.",
        ],
      },
    ],
  },
  "dazz/sports": {
    eyebrow: "Hostel Dazz",
    title: "Sports Inter-Hostel Championship",
    intro:
      "The championship is the sporting half of Hostel Dazz. Halls field teams, the sports secretary publishes fixtures, and the campus fields and courts are blocked for match days.",
    image: photos.field,
    events: [
      { date: "Week 1", title: "Athletics and badminton", venue: "Track and courts", detail: "Heats in the morning, finals under lights where the court allows." },
      { date: "Week 1", title: "Football and cricket", venue: "Main field", detail: "League games, with a final on the closing evening." },
      { date: "Week 2", title: "Indoor finals", venue: "Hall sports rooms", detail: "Chess, carrom, and table tennis." },
    ],
    sections: [
      {
        heading: "Squads",
        body: "Give your name to the hall secretary. The sports secretary publishes the final list. Residents only — a guest cannot play a championship fixture.",
      },
    ],
  },
  "dazz/gallery": {
    eyebrow: "Hostel Dazz",
    title: "Photo Gallery",
    intro: "A shared album of the residential campus, hall life, and Hostel Dazz gatherings.",
    gallery: true,
  },
};

export function getPage(section, slug) {
  return pages[`${section}/${slug}`];
}

export const galleryPhotos = [
  photos.columns,
  photos.campus,
  photos.walkway,
  photos.fest,
  photos.crowd,
  photos.field,
  photos.dining,
  photos.library,
  photos.friends,
  photos.garden,
  photos.modern,
  photos.gathering,
];
