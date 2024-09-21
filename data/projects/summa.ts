import { ProjectInterface, ProjectStatus } from "@/lib/types"

export const summa: ProjectInterface = {
  id: "summa",
  section: "pse",
  projectStatus: ProjectStatus.ACTIVE,
  image: "summa.svg",
  name: "Summa",
  links: {
    github: "https://github.com/summa-dev",
  },
  tags: {
    keywords: ["Anonymity/privacy", "Computational Integrity"],
    themes: ["build", "play"],
    types: ["Infrastructure/protocol", "Application"],
    builtWith: ["halo2"],
  },
}
