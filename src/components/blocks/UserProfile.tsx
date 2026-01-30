import React from 'react';

interface UserProfileProps {
  avatar: string;
  name: string;
  bio: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    dribbble?: string;
    instagram?: string;
  };
  className?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  avatar,
  name,
  bio,
  socials = {},
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <img
        src={avatar}
        alt={name}
        className="w-[100px] h-[100px] rounded-full object-cover"
      />
      <div>
        <h3 className="text-sm font-bold uppercase tracking-[2px] leading-[26px] text-[#1E0D63] mb-1">
          {name}
        </h3>
        <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-3">
          {bio}
        </p>
        <div className="flex gap-5">
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E0D63] hover:text-[#2F1893] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          )}
          {socials.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E0D63] hover:text-[#2F1893] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          )}
          {socials.dribbble && (
            <a
              href={socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E0D63] hover:text-[#2F1893] transition-colors"
              aria-label="Dribbble"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.198 10.198 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zM3.616 17.51c.232-.4 3.045-5.055 8.332-6.765.133-.045.266-.085.4-.12-.26-.585-.54-1.167-.832-1.74-5.09 1.526-10.022 1.463-10.475 1.453l-.003.058c0 2.638 1.01 5.054 2.578 6.847v.267zm-1.304-9.67c.458.013 4.68.053 9.473-1.206C9.345 3.474 6.72 1.234 6.447 1.016A10.183 10.183 0 002.112 7.84zm6.027-7.467c.286.232 2.948 2.468 5.423 5.656 5.17-1.938 7.358-4.881 7.548-5.168A10.122 10.122 0 0012.001 2c-.582 0-1.15.05-1.702.143zm14.064 3.81c-.22.31-2.65 3.435-8.04 5.64.24.49.46.987.66 1.488.07.178.135.356.196.532 3.44-.433 6.86.27 7.2.336a10.11 10.11 0 00-.016-7.996z"/>
              </svg>
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E0D63] hover:text-[#2F1893] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
