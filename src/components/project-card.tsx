import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Icons } from "./icons";
import Link from "next/link";

const ProjectCard = (project: Project) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <h3 className="mr-2">{project.name}</h3>{" "}
          {project.status && (
            <Badge
              variant={
                project?.status == "Planning"
                  ? "default"
                  : project?.status == "On Hold"
                  ? "destructive"
                  : "outline"
              }
            >
              {project?.status}
            </Badge>
          )}{" "}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden">
          <p className="line-clamp-3">{project.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end ">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild={!!project.demo}
              variant="secondary"
              disabled={!project.demo}
            >
              {project.demo ? (
                <Link href={project.demo} target="_blank" rel="noreferrer">
                  Live
                </Link>
              ) : (
                "Not Available"
              )}
            </Button>
          </TooltipTrigger>
          {!project.demo && (
            <TooltipContent>
              <p>There is no live demo</p>
            </TooltipContent>
          )}
        </Tooltip>
        <Button asChild className="ml-4">
          <Link href={project.repo} target="_blank" rel="noreferrer">
            {" "}
            <Icons.gitHub className="mr-2 h-4 w-4" /> Code{" "}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
