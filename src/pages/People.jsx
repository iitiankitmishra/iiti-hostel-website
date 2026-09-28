import PageBanner from "../components/PageBanner";
import PersonCard from "../components/PersonCard";
import { hallWardens, leadership, officeStaff, studentCouncil } from "../data/people";
import useDocumentTitle from "../hooks/useDocumentTitle";

const sections = [
  {
    id: "leadership",
    eyebrow: "Section 1",
    title: "Chief Warden & Co-Chief Wardens",
    text: "The halls are collectively headed by the Chief Warden. The public directory lists one Chief Warden, with Student Affairs providing institute-level oversight. Co-Chief Warden appointments, when made, are circulated by the Chief Warden Office.",
    people: leadership,
  },
  {
    id: "wardens",
    eyebrow: "Section 2",
    title: "Hall Wardens & Associate Wardens",
    text: "Each hall is monitored by a warden. Devi Ahilya Hall also has a published associate warden, who shares that charge with the extension. The Dining Warden looks after the Central Dining Hall.",
    people: hallWardens,
  },
  {
    id: "council",
    eyebrow: "Section 3",
    title: "General Secretary (Hostels) & Student Council",
    text: "Names in this section illustrate the council layout for the portal. Email and phone go to the published Hall Office and Dining Office, which can direct you to the current office-bearers.",
    people: studentCouncil,
  },
  {
    id: "staff",
    eyebrow: "Section 4",
    title: "Hostel Office Staff & Caretakers",
    text: "Chief Warden Office staff sit with the hall junior assistants who run the everyday desk in each residence.",
    people: officeStaff,
  },
];

export default function People() {
  useDocumentTitle("People");

  return (
    <div>
      <PageBanner
        eyebrow="Directory"
        title="People"
        text="Wardens, student-affairs officers, hall staff, and the student council desks for the Halls of Residence."
      />
      <div className="border-b border-iiti-mist bg-white">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 text-sm font-semibold">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="shrink-0 rounded-full px-3 py-1.5 text-iiti-royal hover:bg-iiti-mist">
              {section.title}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-36">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-iiti-gold-ink">{section.eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl text-iiti-navy">{section.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-iiti-muted">{section.text}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {section.people.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        ))}
        <p className="text-sm text-iiti-muted">
          Faculty and staff records follow the public pages at{" "}
          <a className="font-semibold text-iiti-royal" href="https://hostel.iiti.ac.in/main/people" target="_blank" rel="noreferrer">
            hostel.iiti.ac.in/main/people
          </a>{" "}
          and the institute administrative directory.
        </p>
      </div>
    </div>
  );
}
