export type HeadlineOption = {
  id: string;
  headline: string;
  subtext: string;
};

// Three options for client sign-off. Option A is wired into the live
// hero by default — swap `SELECTED_HEADLINE_ID` below once a choice
// is made.
export const HEADLINE_OPTIONS: HeadlineOption[] = [
  {
    id: "a",
    headline: "Move Heavy Industry Forward",
    subtext:
      "Warehousing, transportation, and supply chain logistics — plus forklift, crane, HIAB, and heavy machinery hire, all from one trusted partner in Lagos.",
  },
  {
    id: "b",
    headline: "Logistics and Heavy Lifting, Handled",
    subtext:
      "From daily distribution to crane and HIAB hire for your toughest jobs, Blejoe keeps goods and heavy equipment moving on schedule.",
  },
  {
    id: "c",
    headline: "Everything That Moves Your Business",
    subtext:
      "Full-service warehousing and transportation, backed by forklift, crane, HIAB, and heavy-machinery haulage hire — one call does it all.",
  },
];

export const SELECTED_HEADLINE_ID = "a";

export const selectedHeadline =
  HEADLINE_OPTIONS.find((h) => h.id === SELECTED_HEADLINE_ID) ?? HEADLINE_OPTIONS[0];
