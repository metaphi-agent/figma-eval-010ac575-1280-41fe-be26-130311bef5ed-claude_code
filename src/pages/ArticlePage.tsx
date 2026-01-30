import React from 'react';
import HeroHeader from '../components/blocks/HeroHeader';
import UserProfile from '../components/blocks/UserProfile';

const ArticlePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <HeroHeader
        label="Splashproof Design"
        title="How To Protect Computer.<br/>Very Useful Tips"
      />

      {/* User Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[770px] mx-auto px-8">
          <UserProfile
            avatar="./assets/images/user-avatar.png"
            name="Samuel Audley"
            bio="Saving the world. Shaping the world."
            socials={{
              twitter: '#',
              facebook: '#',
              dribbble: '#',
              instagram: '#',
            }}
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 bg-white">
        <div className="max-w-[770px] mx-auto px-8">
          {/* Branding Section */}
          <section className="mb-16">
            <h2 className="text-[#1E0D63] text-[42px] font-bold leading-[52px] tracking-[-0.4px] mb-6">
              Branding
            </h2>
            <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-6">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To
              her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
            </p>
            <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px]">
              For some minutes Alice stood without speaking, looking out in all directions over the country - and a
              most curious country it was. There were a number of tiny little brooks running straight across it from
              side to side, and the ground between was divided up into squares by a number of little.
            </p>
          </section>

          {/* Perfect for Your Section */}
          <section className="mb-16">
            <h3 className="text-[#1E0D63] text-[22px] font-medium leading-8 mb-4">
              Perfect for Your
            </h3>
            <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-8">
              She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for
              having been born on a Friday. The word was appropriate to the moment.
            </p>

            {/* Article Image */}
            <img
              src="./assets/images/woman-portrait.png"
              alt="Woman portrait"
              className="w-full rounded-[10px] mb-4"
              loading="lazy"
            />
            <p className="text-[rgba(21,20,57,0.4)] text-sm font-bold uppercase tracking-[2px] leading-[26px] mb-8">
              There have not been any since
            </p>
          </section>

          {/* The Fall Report Section */}
          <section>
            <h3 className="text-[#1E0D63] text-[22px] font-medium leading-8 mb-4">
              The Fall Report
            </h3>
            <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mb-8">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her
              surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-[#1E0D63] flex-shrink-0 mt-1.5" />
                <p className="text-[#1E0D63] text-lg font-medium leading-7">
                  Thus much I thought proper to tell you in relation to yourself, and to the trust I
                  reposed in you.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-3.5 h-3.5 rounded-full border-2 border-[#1E0D63] flex-shrink-0 mt-1.5" />
                <p className="text-[#1E0D63] text-lg font-medium leading-7">
                  So saying he unbuckled his baldric with the bugle, took a feather from his cap,
                  and gave them to Wamba.
                </p>
              </div>
            </div>

            <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px]">
              She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for
              having been born on a Friday. The word was appropriate to the moment.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
