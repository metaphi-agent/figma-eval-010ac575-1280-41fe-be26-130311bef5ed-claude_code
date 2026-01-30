import ArticleCard from '../components/blocks/ArticleCard';
import Newsletter from '../components/blocks/Newsletter';
import Button from '../components/ui/Button';

export default function HomePage() {
  const featuredArticles = [
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
      excerpt:
        'The method is this in an axe of ground you busy at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are (fondest then you drive.',
    },
    {
      image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=600&h=400&fit=crop',
      excerpt:
        'When the last 'natural' had been declared, and the profit and loss account of fish and expenses adjusted to the satisfaction of all parties; Mr. Bob Sawyer rang for supper, and the visitors.',
    },
  ];

  const sidebarArticles = [
    {
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
      title: 'To these in the morning I sent the lead who was to enter the hole',
      date: '19 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=200&fit=crop',
      title: "When the last 'natural' had been declared, and the profit...",
      date: '18 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop',
      title: "Sam's attention that, when this person dismounted...",
      date: '17 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      title: 'To these in the morning I sent the lead who was...',
      date: '16 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=200&h=200&fit=crop',
      title: 'The tattered remains of a checked curtain were drawn round...',
      date: '15 December',
    },
  ];

  const popularArticles = [
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      title: "However, I travelled along the shore of the sea towards the...",
      date: '14 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      title: "Sam's attention that, when this person dismounted...",
      date: '13 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      title: 'As we were going I remarked a beautiful church-spire rising...',
      date: '12 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      title: 'Lady Crawley, and mother of the young ladies, she was...',
      date: '11 December',
    },
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
      title: "This I have produced as a scantling of Jack's great...",
      date: '10 December',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-[--color-text-primary] text-[42px] font-bold leading-tight mb-4">
              To these in the morning I sent the lead who was to enter the hole
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
              Blog description
            </p>

            <p className="text-secondary text-base leading-relaxed mb-8">
              This sounded nonsense to Alice, so she said nothing, but set off at once toward
              the Red Queen. To her surprise, she lost sight of her in a moment, and found
              herself walking in at the front-door again.
            </p>

            <p className="text-secondary text-base leading-relaxed mb-8">
              For some minutes Alice stood without speaking, looking out in all directions over
              the country - and a most curious country it was.
            </p>

            <div className="space-y-12 mb-12">
              <h2 className="text-[--color-text-primary] text-2xl font-medium">Perfect for Your</h2>
              <p className="text-secondary text-base leading-relaxed">
                The method is this in an ace of ground you busy at six inches distance and
                eight deep, a quantity of acorns, dates, chestnuts, and other mast or
                vegetables, whereof these animals are fondest then you drive.
              </p>

              {/* Featured Articles */}
              <div className="space-y-8">
                {featuredArticles.map((article, idx) => (
                  <ArticleCard
                    key={idx}
                    image={article.image}
                    title="Article title"
                    excerpt={article.excerpt}
                    date="Date"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Last Seen */}
            <div>
              <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">
                Last Seen
              </h3>
              <div className="space-y-6">
                {sidebarArticles.map((article, idx) => (
                  <ArticleCard
                    key={idx}
                    variant="sidebar"
                    image={article.image}
                    title={article.title}
                    date={article.date}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <Newsletter />

            {/* Most Popular */}
            <div>
              <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-6">
                Most Popular
              </h3>
              <div className="space-y-6">
                {popularArticles.map((article, idx) => (
                  <ArticleCard
                    key={idx}
                    variant="sidebar"
                    image={article.image}
                    title={article.title}
                    date={article.date}
                  />
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary" size="md" className="w-full">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
