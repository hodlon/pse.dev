import { ProjectInterface, ProjectStatus } from "@/lib/types"

export const voicedeck: ProjectInterface = {
  id: "voice-deck",
  section: "collaboration",
  projectStatus: ProjectStatus.ACTIVE,
  image: "voiceDeck.svg",
  name: "VoiceDeck",
  links: {
    github: "https://github.com/VoiceDeck",
    website: "https://voicedeck.org/",
    twitter: "https://twitter.com/VoiceDeckDAO",
  },
  tags: {
    keywords: ["Public goods"],
    themes: ["play"],
    types: ["Application"],
    builtWith: ["anonAadhaar", "Hypercerts"],
  },
}
