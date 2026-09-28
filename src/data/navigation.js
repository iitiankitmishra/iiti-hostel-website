export const navItems = [
  { label: "Home", to: "/" },
  { label: "People", to: "/people" },
  {
    label: "Rules",
    children: [
      { label: "Hostel Rules", to: "/rules/hostel-rules" },
      { label: "Mess Rules", to: "/rules/mess-rules" },
      { label: "Disciplinary Guidelines", to: "/rules/disciplinary-guidelines" },
      { label: "Anti-Ragging Policy", to: "/rules/anti-ragging" },
    ],
  },
  {
    label: "Hostel Booking",
    children: [
      { label: "Guest House Booking", to: "/booking/guest-house" },
      { label: "Student Allotment", to: "/booking/student-allotment" },
      { label: "Vacation Stay", to: "/booking/vacation-stay" },
      { label: "Rules", to: "/booking/rules" },
    ],
  },
  {
    label: "Download Forms",
    children: [
      { label: "No Dues Form", to: "/forms/no-dues" },
      { label: "Leave Form", to: "/forms/leave" },
      { label: "Guest Accommodation Form", to: "/forms/guest-accommodation" },
      { label: "Maintenance Request", to: "/forms/maintenance-request" },
    ],
  },
  {
    label: "Facilities",
    children: [
      { label: "Central Mess", to: "/facilities/central-mess" },
      { label: "Night Canteen", to: "/facilities/night-canteen" },
      { label: "Sports Facilities", to: "/facilities/sports" },
      { label: "Laundry & Gymnasium", to: "/facilities/laundry-gym" },
      { label: "Wi-Fi Setup", to: "/facilities/wifi" },
    ],
  },
  {
    label: "Complaints",
    children: [
      { label: "Maintenance Portal", to: "/complaints/maintenance" },
      { label: "Electrical", to: "/complaints/electrical" },
      { label: "Plumbing", to: "/complaints/plumbing" },
      { label: "Internet/LAN", to: "/complaints/internet" },
      { label: "Security", to: "/complaints/security" },
    ],
  },
  {
    label: "Hostel Dazz",
    badge: "New",
    spark: true,
    align: "right",
    children: [
      { label: "Events", to: "/dazz/events" },
      { label: "Annual Hostel Cultural Fest", to: "/dazz/cultural-fest" },
      { label: "Sports Inter-Hostel Championship", to: "/dazz/sports" },
      { label: "Photo Gallery", to: "/dazz/gallery" },
    ],
  },
  { label: "Contact us", to: "/contact" },
];

export const footerQuickLinks = [
  { label: "Hostel Rules", to: "/rules/hostel-rules" },
  { label: "Guest House Booking", to: "/booking/guest-house" },
  { label: "Maintenance Portal", to: "/complaints/maintenance" },
  { label: "Hostel Dazz", to: "/dazz/events" },
  { label: "People", to: "/people" },
  { label: "Download Forms", to: "/forms/leave" },
];

export const keyContacts = {
  gs: {
    label: "General Secretary (Hostels)",
    phone: "0731-6603468",
    email: "hostel@iiti.ac.in",
  },
  studentAffairs: {
    label: "Student Affairs Office",
    phone: "0731-6603410",
    email: "dosa@iiti.ac.in",
  },
  chiefWarden: {
    label: "Chief Warden Office",
    phone: "0731-6603346",
    email: "chiefwarden@iiti.ac.in",
  },
  mess: {
    label: "Central Mess Administration",
    phone: "0731-6605155",
    email: "diningwardenoffice@iiti.ac.in",
  },
  securityDesk: {
    label: "Security Desk",
    phone: "+91-6265224771",
    email: "securityhelpdesk@iiti.ac.in",
  },
  securityRoom: {
    label: "Security Control Room",
    phone: "0731-6603524 / 9589518299",
    email: "securityhelpdesk@iiti.ac.in",
  },
  medical: {
    label: "Health Centre",
    phone: "0731-6603571",
    note: "Ext. 3571 / 3187 / 3433",
  },
  ambulance: {
    label: "Ambulance",
    phone: "7509062832",
  },
  hallOffice: {
    label: "Hall of Residence Office",
    phone: "0731-6603468",
    email: "hostel@iiti.ac.in",
  },
};

export function findNavGroup(pathname) {
  return navItems.find((item) => item.children?.some((child) => child.to === pathname));
}
