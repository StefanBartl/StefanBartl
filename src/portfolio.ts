interface CodingSkillz {
    hoursSpentCodingLastMonth?: number;
    favoriteEditor?: string;
    languageRatings?: Map<string, string>;
    interpretersAndCompilers: number;
    yearsOfExperience: number;
    securityTools: ReadonlyArray<string>;
    latestVulnerability: string;
    skillz: string[] | null;
    certificates?: string[];
    currentlyLearning?: string[];
}

const wkdMood = Symbol("🍮");

export interface WKD extends CodingSkillz {
    mood: typeof wkdMood;
    getActualMood: () => string
    nickname: string;
    contact: string;
}
