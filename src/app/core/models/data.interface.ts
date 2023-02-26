export interface Data {
  languages: Language[];
  frameworks: Framework[];
  tools: Tool[];
}

export interface Language {
  name: string;
  icon: string;
}

export interface Framework extends Language {}
export interface Tool extends Language {}
