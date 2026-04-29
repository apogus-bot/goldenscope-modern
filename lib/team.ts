export const teamMembers = [
  {
    name: 'Tony Ngo',
    slug: 'tony-ngo',
    originalPath: 'name-here-4',
    license: 'TREC #22826',
    image: '/assets/inspector-tony-crop.png',
    bio:
      'My name is Tony, and I am a licensed Texas Real Estate Professional Home Inspector, TREC #22826. We are a small, family-owned home inspection company that started in 2017. I have inspected over 800 properties. I graduated in 1987 with a Bachelor of Science in Manufacturing Systems Technology from the University of Houston. I have been a Certified Quality Engineer for over 30 years. I have worked in the oil, auto-part manufacturing, and semiconductor equipment industries. Due to my experience in quality control, my customers will gain an inspector who has a quick eye to find defects and imperfections. Our goal is straightforward: customers come first. We are trained to be professional, well equipped, and focused on efficiency.',
  },
  {
    name: 'Rikki Neel',
    slug: 'rikki-neel',
    originalPath: 'rikki-neel',
    license: 'TREC #22547',
    image: '/assets/inspector-rikki-crop.png',
    bio:
      "My name is Rikki Neel, I've been a TREC-licensed home inspector since 2017 and have inspected nearly 2,000 homes in the Greater Houston Area. As a Certified Master Inspector through the International Association of Certified Home Inspectors (InterNACHI), I pride myself on being both an active inspector and a recognized educator in the state of Texas. The wonderful clients I have the pleasure of meeting are absolutely the best part of the job. I treat every one of my clients like family, and inspect their homes as if my own parents were moving in. My passion for the inspection and construction industry continues to grow with each year.",
  },
  {
    name: 'Jason Dixon',
    slug: 'jason-dixon',
    originalPath: 'jason-dixon',
    license: 'TREC #25509',
    image: '/assets/inspector-jason-crop.png',
    bio:
      'As a TREC-licensed home inspector, I take a lot of pride in the service of this work. In working in this industry, I have the pleasure of interacting clients and providing them with key insights about their home. The most rewarding part of this job is that every day provides you with something new to learn.',
  },
  {
    name: 'Vi Tran',
    slug: 'vi-tran',
    originalPath: 'vi-tran',
    license: 'TREC #20411',
    image: '/assets/inspector-vi-crop.png',
    bio:
      "My name is Vi Tran, I am a TREC-licensed home inspector with over 5 years of experience in the inspection industry. Inspecting homes provides me with an opportunity to serve my community and meet new people from all over the world. I believe that every house tells a story, and that it's the inspector's responsibility to tell that story in a way that's informative and easy-to-understand. There's a certain level of adventure that comes with the job, and I enjoy the new challenges that present themselves in each house and situation.",
  },
] as const;

export type TeamMember = (typeof teamMembers)[number];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug || member.originalPath === slug);
}
