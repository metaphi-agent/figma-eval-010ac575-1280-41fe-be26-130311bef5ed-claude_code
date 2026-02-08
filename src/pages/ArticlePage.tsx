import { SocialIcons } from '../components/blocks/SocialIcons';

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Purple Background */}
      <section className="bg-bg-dark pt-24 pb-40">
        <div className="max-w-[770px] mx-auto px-6">
          <h1 className="text-white font-bold text-[42px] md:text-[58px] leading-[52px] md:leading-[70px] tracking-[-1px]">
            How To Protect Computer.{'\n'}Very Useful Tips
          </h1>
          <p className="text-white font-bold text-sm leading-[26px] tracking-[2px] uppercase mt-6">
            Splashproof Design
          </p>
        </div>
      </section>

      {/* Author Section */}
      <section className="max-w-[770px] mx-auto px-6 -mt-12">
        <div className="flex items-center gap-5 bg-white py-6">
          <img
            src="./assets/images/user-avatar.png"
            alt="Samuel Audley"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-heading font-bold text-sm leading-[26px] tracking-[2px] uppercase">
              Samuel Audley
            </h3>
            <p className="text-text-muted text-base leading-[26px]">
              Saving the world. Shaping the world.
            </p>
            <div className="mt-2">
              <SocialIcons color="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-[770px] mx-auto px-6 py-16">
        {/* Branding Section */}
        <h2 className="text-heading font-bold text-[42px] leading-[52px] tracking-[-0.4px]">
          Branding
        </h2>

        <p className="text-text-muted text-base leading-[26px] mt-6">
          This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
        </p>

        <p className="text-text-muted text-base leading-[26px] mt-4">
          For some minutes Alice stood without speaking, looking out in all directions over the country \u2013 and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little.
        </p>

        {/* Perfect for Your Section */}
        <h3 className="text-heading font-medium text-[22px] leading-8 mt-12">
          Perfect for Your
        </h3>

        <p className="text-text-muted text-base leading-[26px] mt-4">
          She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.
        </p>

        {/* Photo */}
        <div className="mt-8 rounded-[10px] overflow-hidden">
          <img
            src="./assets/images/hero-photo-page1.png"
            alt="Article featured image"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        {/* There have not been... */}
        <p className="text-text-muted font-bold text-sm leading-[26px] tracking-[2px] uppercase mt-8">
          There have not been any since
        </p>

        {/* The Fall Report Section */}
        <h3 className="text-heading font-medium text-[22px] leading-8 mt-8">
          The Fall Report
        </h3>

        <p className="text-text-muted text-base leading-[26px] mt-4">
          This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
        </p>

        {/* Bullet Points */}
        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <span className="shrink-0 mt-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#1E0E62" strokeWidth="2"/>
                <circle cx="7" cy="7" r="3" fill="#1E0E62"/>
              </svg>
            </span>
            <p className="text-heading font-medium text-lg leading-7">
              Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="shrink-0 mt-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#1E0E62" strokeWidth="2"/>
                <circle cx="7" cy="7" r="3" fill="#1E0E62"/>
              </svg>
            </span>
            <p className="text-heading font-medium text-lg leading-7">
              So saying he unbuckled his baldric with the bugle, took a feather from his cap, and gave them to Wamba.
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-text-muted text-base leading-[26px] mt-8">
          She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.
        </p>
      </article>
    </div>
  );
}
