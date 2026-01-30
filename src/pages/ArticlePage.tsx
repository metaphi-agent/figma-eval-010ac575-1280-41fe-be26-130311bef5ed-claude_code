import Hero from '../components/blocks/Hero';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function ArticlePage() {
  const author = {
    name: 'SAMUEL AUDLEY',
    tagline: 'Saving the world. Shaping the world',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    socials: [
      { icon: <Twitter size={20} />, url: '#' },
      { icon: <Facebook size={20} />, url: '#' },
      { icon: <Instagram size={20} />, url: '#' },
      { icon: <Github size={20} />, url: '#' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="How To Protect Computer. Very Useful Tips"
        subtitle="SPLASHPROOF DESIGN"
        author={author}
      />

      <div className="content-container py-16">
        <article className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-[42px] font-bold text-[--color-text-primary] leading-[52px] tracking-[-0.4px] mb-6">
              Branding
            </h2>
            <p className="text-secondary text-base leading-[26px] mb-6">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>
            <p className="text-secondary text-base leading-[26px]">
              For some minutes Alice stood without speaking, looking out in all directions over
              the country - and a most curious country it was. There were a number of tiny
              little brooks running straight across it from side to side, and the ground between
              was divided up into squares by a number of little.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-[22px] font-medium text-[--color-text-primary] leading-8 mb-4">
              Perfect for Your
            </h3>
            <p className="text-secondary text-base leading-[26px]">
              She gave my mother such a turn, that I have always been convinced I am indebted
              to Miss Betsey for having been born on a Friday. The word was appropriate to the
              moment.
            </p>
          </section>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=800&fit=crop"
              alt="Portrait"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-3">
              There have not been any since
            </p>
          </div>

          {/* Section 3 */}
          <section>
            <h3 className="text-[22px] font-medium text-[--color-text-primary] leading-8 mb-6">
              The Fall Report
            </h3>
            <p className="text-secondary text-base leading-[26px] mb-8">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-3.5 h-4 flex-shrink-0 mt-1.5">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[--color-text-primary]" />
                </div>
                <p className="text-[--color-text-primary] text-lg font-medium leading-7">
                  Thus much I thought proper to tell you in relation to yourself, and to the
                  trust I reposed in you.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-3.5 h-4 flex-shrink-0 mt-1.5">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[--color-text-primary]" />
                </div>
                <p className="text-[--color-text-primary] text-lg font-medium leading-7">
                  So saying he unbuckled his baldric with the bugle, took a feather from his
                  cap, and gave them to Wamba.
                </p>
              </div>
            </div>

            <p className="text-secondary text-base leading-[26px] mt-8">
              She gave my mother such a turn, that I have always been convinced I am indebted
              to Miss Betsey for having been born on a Friday. The word was appropriate to the
              moment.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
