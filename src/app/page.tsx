import ProjectCard from "@/components/project-card";
import { projects } from "@/constant";
export default function HomePage() {
  return (
    <main className="container  mx-auto my-4 w-full max-w-4xl">
      <div className="flex flex-col space-y-4">
        <section>
          <h2 className="text-xl font-semibold">About</h2>
          <p>
            You see, I might not have much to brag about, but I do know how to
            center a div! 😎
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
