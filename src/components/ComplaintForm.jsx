import { useMemo, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { hostels } from "../data/hostels";

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-iiti-ink outline-none transition focus:border-iiti-royal focus:ring-2 focus:ring-iiti-gold/40";

const categories = ["Maintenance", "Electrical", "Plumbing", "Internet/LAN", "Security", "Feedback"];

export default function ComplaintForm({ initialCategory = "Maintenance", initialHostel = "", compact = false }) {
  const [done, setDone] = useState(null);
  const [errors, setErrors] = useState({});

  const defaultHostel = useMemo(
    () => hostels.find((hostel) => hostel.id === initialHostel)?.id ?? "",
    [initialHostel],
  );

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = {
      name: data.get("name")?.toString().trim() ?? "",
      roll: data.get("roll")?.toString().trim() ?? "",
      hostelId: data.get("hostelId")?.toString() ?? "",
      room: data.get("room")?.toString().trim() ?? "",
      category: data.get("category")?.toString() ?? "",
      message: data.get("message")?.toString().trim() ?? "",
    };
    const nextErrors = {};
    if (!next.name) nextErrors.name = "Enter your name.";
    if (!next.hostelId) nextErrors.hostelId = "Choose a hall.";
    if (!next.room) nextErrors.room = "Enter the room or apartment number.";
    if (next.message.length < 12) nextErrors.message = "Describe the issue in a sentence or two.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const hostel = hostels.find((item) => item.id === next.hostelId);
    const email = next.category === "Security" ? "securityhelpdesk@iiti.ac.in" : hostel.officeEmail;
    const subject = `${next.category} · ${hostel.code} · Room ${next.room}`;
    const body = [
      `Name: ${next.name}`,
      `Roll number: ${next.roll || "—"}`,
      `Hall: ${hostel.name}`,
      `Room: ${next.room}`,
      `Category: ${next.category}`,
      "",
      next.message,
    ].join("\n");
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDone({ email, mailto, hostel });
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950">
        <p className="flex items-center gap-2 font-semibold">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          Draft ready for {done.hostel.shortName}
        </p>
        <p className="mt-2 leading-relaxed">
          This page does not file the complaint on the institute system. Open your email to send it to the official desk at {done.email}.
        </p>
        <a
          href={done.mailto}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-iiti-navy px-4 py-2 text-sm font-semibold text-white hover:bg-iiti-royal"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email {done.email}
        </a>
        <button type="button" className="ml-3 text-sm font-semibold text-iiti-royal underline" onClick={() => setDone(null)}>
          Write another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${compact ? "" : "sm:p-6"}`} noValidate>
      <p className="text-sm leading-relaxed text-iiti-muted">
        Preview form only. Submitting prepares an email to the hall office or the security desk. It is not stored on a server.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-iiti-navy">
          Name
          <input name="name" className={fieldClass} autoComplete="name" />
          {errors.name && <span className="mt-1 block text-xs text-red-700">{errors.name}</span>}
        </label>
        <label className="block text-sm font-medium text-iiti-navy">
          Roll number
          <input name="roll" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-iiti-navy">
          Hall
          <select name="hostelId" className={fieldClass} defaultValue={defaultHostel}>
            <option value="">Select a hall</option>
            {hostels.map((hostel) => (
              <option key={hostel.id} value={hostel.id}>
                {hostel.shortName}
              </option>
            ))}
          </select>
          {errors.hostelId && <span className="mt-1 block text-xs text-red-700">{errors.hostelId}</span>}
        </label>
        <label className="block text-sm font-medium text-iiti-navy">
          Room
          <input name="room" className={fieldClass} />
          {errors.room && <span className="mt-1 block text-xs text-red-700">{errors.room}</span>}
        </label>
        <label className="block text-sm font-medium text-iiti-navy sm:col-span-2">
          Category
          <select name="category" className={fieldClass} defaultValue={initialCategory}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-iiti-navy sm:col-span-2">
          What should the office know?
          <textarea name="message" rows={4} className={fieldClass} />
          {errors.message && <span className="mt-1 block text-xs text-red-700">{errors.message}</span>}
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex items-center rounded-full bg-iiti-gold px-5 py-2.5 text-sm font-bold text-iiti-navy transition hover:bg-[#e3c45a]"
      >
        Prepare email to the office
      </button>
    </form>
  );
}
