import {
  BedDouble,
  Dumbbell,
  Home,
  Newspaper,
  ShieldCheck,
  Shirt,
  Snowflake,
  Trophy,
  Utensils,
  Volleyball,
  Wifi,
} from "lucide-react";

const icons = {
  wifi: Wifi,
  sports: Trophy,
  court: Volleyball,
  lounge: Newspaper,
  laundry: Shirt,
  room: BedDouble,
  shield: ShieldCheck,
  cool: Snowflake,
  gym: Dumbbell,
  mess: Utensils,
  apartment: Home,
};

export default function FacilityList({ facilities }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility) => {
        const Icon = icons[facility.icon] ?? ShieldCheck;
        return (
          <li key={facility.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-iiti-mist text-iiti-royal">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-iiti-navy">{facility.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-iiti-muted">{facility.detail}</p>
          </li>
        );
      })}
    </ul>
  );
}
