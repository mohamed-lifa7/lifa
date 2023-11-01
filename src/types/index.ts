import type { Url } from "next/dist/shared/lib/router/router";

interface Project {
  id: string;
  name: string;
  description: string;
  repo: Url;
  demo?: Url;
  status?: "Under Development" | "Completed" | "On Hold" | "Planning" | "Other";
}

export type { Project };
