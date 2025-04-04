import { memo } from "react";
import {
  Linkedin,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/alexandruarmas/",
    color: "#0A66C2",
    gradient: "from-[#0077B5] via-[#0A66C2] to-[#00A0DC]",
    isPrimary: true
  },
  {
    name: "X (Twitter)",
    displayName: "X (Twitter)",
    subText: "@mrarmas02",
    icon: ({ className }) => (
      <svg 
        width="28px" 
        height="28px" 
        viewBox="0 0 24 24" 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g id="Icon/Social/x-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path 
            fill="#FFFFFF"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </g>
      </svg>
    ),
    url: "https://x.com/mrarmas02",
    color: "black",
    gradient: "from-[#000000] via-[#9333EA] to-[#FF3366]"
  },
  {
    name: "Linktree",
    displayName: "Linktree",
    subText: "@mrarmas",
    icon: ({ className }) => (
      <svg 
        width="28px" 
        height="28px" 
        viewBox="0 0 24 24" 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill="#FFFFFF"
            d="M7.64 2.58a.82.82 0 01.59-.25c.2 0 .41.08.56.22l3.4 3.4a.85.85 0 010 1.18.85.85 0 01-1.17 0l-2-2v6.62a.83.83 0 01-.83.83.83.83 0 01-.84-.83V5.13l-2 2a.85.85 0 01-1.18 0 .85.85 0 010-1.18zm9.5 9.61c.2 0 .4.09.56.23l3.4 3.4c.32.32.32.85 0 1.17a.85.85 0 01-1.18 0l-2-2v2.7c0 .47-.37.84-.83.84a.83.83 0 01-.84-.84v-2.7l-2 2a.85.85 0 01-1.18 0 .85.85 0 010-1.18l3.4-3.4a.82.82 0 01.56-.22h.1zm-9.5 0c.2 0 .4.09.56.23l3.4 3.4c.32.32.32.85 0 1.17a.85.85 0 01-1.18 0l-2-2v2.7c0 .47-.37.84-.83.84a.83.83 0 01-.84-.84v-2.7l-2 2a.85.85 0 01-1.18 0 .85.85 0 010-1.18l3.4-3.4a.82.82 0 01.56-.22h.1zm9.5-9.61a.82.82 0 01.59-.25c.2 0 .41.08.56.22l3.4 3.4a.85.85 0 010 1.18.85.85 0 01-1.17 0l-2-2v6.62a.83.83 0 01-.83.83.83.83 0 01-.84-.83V5.13l-2 2a.85.85 0 01-1.18 0 .85.85 0 010-1.18z"
          />
        </g>
      </svg>
    ),
    url: "https://linktr.ee/mrarmas",
    color: "#39E09B",
    gradient: "from-[#39E09B] via-[#43E660] to-[#43E660]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@mrarmas02",
    icon: ({ className }) => (
      <svg 
        width="28px" 
        height="28px" 
        viewBox="0 0 24 24" 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill="#FFFFFF"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </g>
      </svg>
    ),
    url: "https://github.com/mrarmas02",
    color: "black",
    gradient: "from-[#000000] via-[#6E5494] to-[#C9510C]"
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@mrarmas02",
    icon: ({ className }) => (
      <svg 
        width="24px" 
        height="24px" 
        viewBox="0 0 24 24" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            fill="#FFFFFF"
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
          />
        </g>
      </svg>
    ),
    url: "https://www.tiktok.com/@mrarmas02",
    color: "black",
    gradient: "from-[#FF0050] via-[#00F2EA] to-[#7000FF]"
  }
];

const SocialLinks = memo(() => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [twitter, linktree, github, tiktok] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-4 rounded-lg 
                   bg-white/5 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />
          
          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                           group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink 
            className="w-5 h-5 text-gray-500 group-hover:text-white absolute right-4
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </a>

        {/* Second Row - X (Twitter) & Linktree */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[twitter, linktree].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - GitHub & TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[github, tiktok].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;