export interface teamMember {
  name: string;
  role: string;
  pfp: string;
  imgWidth: number;
  imgHeight: number;
  imgLoading?: "eager" | "lazy";
  motto: string;
  secondaryPfp: string;
  secondaryImgWidth?: number;
  secondaryImgHeight?: number;
  secondaryImgLoading?: "eager" | "lazy";
  socialMedia: {
    x: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}

export const TEAM_MEMBERS: teamMember[] = [
  {
    name: "Eduardo Sanchez",
    role: "Web developer | UI/UX Designer",
    pfp: "/images/team/clxd.webp",
    secondaryPfp: "/images/team/clxd-2.webp",
    motto: "If you want it all, why you halfway in?.",
    imgLoading: "eager",
    imgWidth: 636,
    imgHeight: 636,
    socialMedia: {
      x: "https://x.com/CrashLanXD",
      github: "https://github.com/CrashLanXD/",
      facebook: "",
      instagram: "https://www.instagram.com/crashlanxd/",
    },
  },
  {
    name: "David",
    role: "Backend developer",
    pfp: "/images/team/david.webp",
    secondaryPfp: "/images/team/david-2.webp",
    motto: "The best way to predict the future is to invent it",
    imgLoading: "eager",
    imgWidth: 460,
    imgHeight: 460,
    socialMedia: {
      x: "",
      github: "https://github.com/dax-g",
      facebook: "",
      instagram: "https://www.instagram.com/__david.gg__/",
    },
  },
  {
    name: "Gamaliel",
    role: "collaborator",
    pfp: "/images/team/gama.webp",
    secondaryPfp: "/images/team/gama-2.webp",
    motto: "Irure labore ea exercitation deserunt duis pariatur cillum ea Lorem.",
    imgLoading: "eager",
    imgWidth: 309,
    imgHeight: 309,
    socialMedia: {
      x: "",
      github: "",
      facebook: "",
      instagram: "https://www.instagram.com/zxmbie___11",
    },
  },
  {
    name: "Diego",
    role: "collaborator",
    pfp: "/images/team/diego.webp",
    secondaryPfp: "/images/team/diego-3.webp",
    motto: "La verdadera grandeza radica en la capacidad de levantarse después de cada caída.",
    imgWidth: 785,
    imgHeight: 785,
    socialMedia: {
      x: "",
      github: "",
      facebook: "https://www.facebook.com/diego.isais.773",
      instagram: "",
    },
  },
  {
    name: "Jocsan",
    role: "Collaborator",
    pfp: "/images/team/jocsan.webp",
    secondaryPfp: "/images/team/jocsan-2.webp",
    motto: "Lo que tú haces en un día, yo lo hago en 24 horas.",
    imgWidth: 318,
    imgHeight: 318,
    socialMedia: {
      x: "",
      github: "",
      facebook: "",
      instagram: "https://www.instagram.com/jocsan.aguirre/",
    },
  },
];