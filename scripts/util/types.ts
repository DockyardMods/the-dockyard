export type Certification = {
  expiresAt: string;
};

export type ModEntry = {
  id: string;
  version: string;
  repo: string;
  manifestPath: string;
  gameVersionId: string;
  certification?: Certification;
};

export type Registry = {
  version: number;
  currentGameVersionId: string;
  mods: ModEntry[];
};
