import type { Project } from "@/types";

const projects: Project[] = [
  {
    id: "707865871",
    name: "Dendron",
    description:
      "note taking web application built with Next.js 13. It allows users to create, edit, organize and search notes.",
    repo: "https://github.com/Mohamed-lifa7/dendron",
    demo: "https://dendron-swart.vercel.app/",
  },
  {
    id: "701455257",
    name: "Next Drive",
    description:
      "Next Drive is a powerful web application that closely resembles Google Drive. It is designed to simplify file management tasks such as uploading, organizing files into folders (including nested folders), and offering a comprehensive search functionality, among other essential features.",
    repo: "https://github.com/Mohamed-lifa7/next-drive",
    status: "On Hold",
    demo: undefined,
  },
  {
    id: "690022790",
    name: "NextPix Gallery",
    description:
      "NextPix Gallery is a simple image gallery web application built with Next.js App Directory, Tailwind CSS, Shadcn UI, TypeScript, and Zod. It fetches images from the Pexels API and displays them in an elegant gallery format. ",
    repo: "https://github.com/Mohamed-lifa7/NextPix-Gallery",
    demo: "https://next-pix-gallery.vercel.app/",
    status: "Completed",
  },
];

export { projects };
