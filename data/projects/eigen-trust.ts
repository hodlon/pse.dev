import { ProjectInterface, ProjectStatus } from "@/lib/types"

export const eigenTrust: ProjectInterface = {
  id: "eigen-trust",
  section: "pse",
  projectStatus: ProjectStatus.INACTIVE,
  image: "",
  name: "EigenTrust",
  links: {
    github: "https://github.com/eigen-trust/protocol",
  },
  tags: {
    keywords: ["Reputation", "Identity"],
    themes: ["build"],
    types: ["Infrastructure/protocol"],
    builtWith: ["ethereum attestation service", "halo2", "ethers.rs"],
  },
}
