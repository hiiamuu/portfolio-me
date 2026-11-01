import { cacheLife } from "next/cache";
import { site } from "@/data/site";

// Full years since the career start date (e.g. July 2023 → 3 in Nov 2026).
// Cached and re-checked daily so the page stays static but the number
// goes up on its own each July.
export async function getYearsOfExperience() {
  "use cache";
  cacheLife("days");

  const { year, month } = site.careerStart;
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() + 1 < month) years -= 1;
  return Math.max(years, 1);
}
