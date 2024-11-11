interface teamMember {
  name: string;
  role: string;
  pfp: string;
  motto: string;
  imgLoading?: "eager" | "lazy";
  imgWidth: number;
  imgHeight: number;
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