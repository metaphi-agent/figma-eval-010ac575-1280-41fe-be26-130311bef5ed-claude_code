import { SidebarPost } from '../components/ui/SidebarPost';
import { NewsletterForm } from '../components/blocks/NewsletterForm';
import { Button } from '../components/ui/Button';

const lastSeenPosts = [
  {
    image: './assets/images/sidebar-last-1.png',
    title: 'To these in the morning I sent the lead who was to...',
    date: '19 December',
  },
  {
    image: './assets/images/sidebar-last-2.png',
    title: "When the last 'natural' had been declared, and the profit...",
    date: '13 December',
  },
  {
    image: './assets/images/sidebar-last-3.png',
    title: "Sam's attention that, when this person dismounted...",
    date: '21 December',
  },
  {
    image: './assets/images/sidebar-last-4.png',
    title: 'To these in the morning I sent the lead who was ...',
    date: '10 December',
  },
  {
    image: './assets/images/sidebar-last-5.png',
    title: 'The tattered remains of a checked curtain were drawn round...',
    date: '12 December',
  },
];

const mostPopularPosts = [
  {
    image: './assets/images/sidebar-popular-1.png',
    title: 'However, I travelled along the shore of the sea towards the\u2026',
    date: '14 December',
  },
  {
    image: './assets/images/sidebar-popular-2.png',
    title: "Sam's attention that, when this person dismounted\u2026",
    date: '21 December',
  },
  {
    image: './assets/images/sidebar-popular-3.png',
    title: 'As we passed, I remarked a beautiful church-spire rising\u2026',
    date: '18 December',
  },
  {
    image: './assets/images/sidebar-popular-4.png',
    title: 'Lady Crawley, and mother of the young ladies. she was\u2026',
    date: '18 December',
  },
  {
    image: './assets/images/sidebar-popular-5.png',
    title: "This I have produced as a scantling of Jack's great...",
    date: '15 December',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1170px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Article Content */}
          <main className="flex-1 min-w-0 max-w-[700px]">
            {/* Article Title */}
            <h1 className="text-heading font-bold text-[32px] md:text-[42px] leading-[40px] md:leading-[52px] tracking-[-0.4px]">
              To these in the morning I sent the lead who was to enter the hole
            </h1>

            <p className="text-text-muted font-bold text-sm leading-[26px] tracking-[2px] uppercase mt-4">
              20 December
            </p>

            {/* Intro paragraphs */}
            <p className="text-heading font-medium text-lg leading-7 mt-8">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
            </p>

            <p className="text-heading font-medium text-lg leading-7 mt-4">
              For some minutes Alice stood without speaking, looking out in all directions over the country \u2013 and a most curious country it was.
            </p>

            {/* Perfect for Your */}
            <h3 className="text-heading font-medium text-[22px] leading-8 mt-10">
              Perfect for Your
            </h3>

            <p className="text-text-muted text-base leading-[26px] mt-4">
              The method is this: in an acre of ground you bury, at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you drive.
            </p>

            {/* First Photo */}
            <div className="mt-8 rounded-[10px] overflow-hidden">
              <img
                src="./assets/images/article-photo-1.png"
                alt="Article photo showing person in Baby t-shirt"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-text-muted text-base leading-[26px] mt-3">
              photo by Denis
            </p>

            {/* Tattered remains */}
            <p className="text-text-muted text-base leading-[26px] mt-6">
              The tattered remains of a checked curtain were drawn round the bed\u2019s head, to exclude the wind, which, however, made its way into the comfortless room through the numerous chinks in the door.
            </p>

            {/* Second Photo */}
            <div className="mt-8 rounded-[10px] overflow-hidden">
              <img
                src="./assets/images/article-photo-2.png"
                alt="Article photo showing person in neon lights"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-text-muted text-base leading-[26px] mt-3">
              photo by Denis
            </p>

            {/* Last paragraph */}
            <p className="text-text-muted text-base leading-[26px] mt-6">
              When the last \u2018natural\u2019 had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.
            </p>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-[370px] shrink-0">
            {/* Last Seen */}
            <div>
              <h4 className="text-text-muted font-bold text-sm leading-[26px] tracking-[2px] uppercase mb-4">
                Last Seen
              </h4>
              <div className="space-y-5">
                {lastSeenPosts.map((post, index) => (
                  <SidebarPost
                    key={`last-${index}`}
                    image={post.image}
                    title={post.title}
                    date={post.date}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="mt-10">
              <NewsletterForm />
            </div>

            {/* Most Popular */}
            <div className="mt-10">
              <h4 className="text-text-muted font-bold text-sm leading-[26px] tracking-[2px] uppercase mb-4">
                Most Popular
              </h4>
              <div className="space-y-5">
                {mostPopularPosts.map((post, index) => (
                  <SidebarPost
                    key={`popular-${index}`}
                    image={post.image}
                    title={post.title}
                    date={post.date}
                  />
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="mt-8">
              <Button variant="primary">Load More</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
