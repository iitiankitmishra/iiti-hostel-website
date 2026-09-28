import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | IIT Indore Hostels`
      : "Hall of Residence | IIT Indore";
  }, [title]);
}
