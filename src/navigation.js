import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'पाठ्यक्रम',
      links: [
        {
          text: 'वर्ग 1',
          href: getPermalink('/classes/class-one'),
        },
        {
          text: 'वर्ग 2',
          href: getPermalink('/classes/class-two'),
        },
        {
          text: 'वर्ग 3',
          href: getPermalink('/classes/class-three'),
        },
        {
          text: 'वर्ग 4',
          href: getPermalink('/classes/class-four'),
        },
        {
          text: 'वर्ग 5',
          href: getPermalink('/classes/class-five'),
        },
      ],
    },
    {
      text: 'प्राचार्य के डेस्क से',
      href: '/message-from-principal',
    },
    {
      text: 'पुस्तकालय सेवाएँ',
      href: '/library-services',
    },
  ],
  actions: [{ text: 'संपर्क करें', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'पाठ्यक्रम',
      links: [
        { text: 'वर्ग 1', href: '/classes/class-one' },
        { text: 'वर्ग 2', href: '/classes/class-two' },
        { text: 'वर्ग 3', href: '/classes/class-three' },
        { text: 'वर्ग 4', href: '/classes/class-four' },
        { text: 'वर्ग 5', href: '/classes/class-five' },
      ],
    },
    {
      title: 'संगठन',
      links: [
        { text: 'संपर्क करें', href: '/contact' },
        { text: 'करियर', href: '/careers' },
        {
          text: 'प्राचार्य के डेस्क से',
          href: '/message-from-principal',
        },
        {
          text: 'पुस्तकालय सेवाएँ',
          href: '/library-services',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'शर्तें', href: getPermalink('/terms') },
    { text: 'गोपनीयता नीति', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    (C) 2024 · सर्वाधिकार सुरक्षित
  `,
};
