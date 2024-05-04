interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'MikeMa的运动记录',
  siteUrl: 'https://www.strava.com/athletes/macavalo',
  logo: 'https://lh3.googleusercontent.com/a/ACg8ocKw1rZ3CWn8eGALCiMO4X6MPUriZXwRE2j1RcIhLU7DiKY=s96-c',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '老爸',
      url: 'https://bossma.vercel.app/',
    },
    {
      name: '老江',
      url: 'https://jzx.vercel.app/',
    },
  ],
};

export default data;
