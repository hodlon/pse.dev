import { ProjectStatus } from "@/lib/types"
import { LocaleTypes } from "@/app/i18n/settings"

export interface LangProps {
  params: {
    lang: LocaleTypes
  }
}

export type IThemeStatus = Partial<
  Record<
    ProjectStatus,
    {
      label: string
      icon: any
    }
  >
>

export type IThemesButton = Record<
  string,
  {
    label: string
    icon: any
  }
>
