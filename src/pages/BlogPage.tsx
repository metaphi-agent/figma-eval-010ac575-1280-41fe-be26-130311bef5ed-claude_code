import React from 'react';
import Sidebar from '../components/blocks/Sidebar';

const BlogPage: React.FC = () => {
  const lastSeenPosts = [
    {
      id: 1,
      image: './assets/images/post-last-seen-1.png',
      title: 'To these in the morning I sent the lead who was to...',
      date: '19 December',
    },
    {
      id: 2,
      image: './assets/images/post-last-seen-2.png',
      title: "When the last 'natural' had been declared, and the profit...",
      date: '13 December',
    },
    {
      id: 3,
      image: './assets/images/post-last-seen-3.png',
      title: "Sam's attention that, when this person dismounted...",
      date: '21 December',
    },
    {
      id: 4,
      image: './assets/images/post-last-seen-4.png',
      title: 'To these in the morning I sent the lead who was ...',
      date: '10 December',
    },
    {
      id: 5,
      image: './assets/images/post-last-seen-5.png',
      title: 'The tattered remains of a checked curtain were drawn round...',
      date: '12 December',
    },
  ];

  const popularPosts = [
    {
      id: 1,
      image: './assets/images/post-popular-1.png',
      title: 'However, I travelled along the shore of the sea towards the...',
      date: '14 December',
    },
    {
      id: 2,
      image: './assets/images/post-popular-2.png',
      title: "Sam's attention that, when this person dismounted...",
      date: '21 December',
    },
    {
      id: 3,
      image: './assets/images/post-popular-3.png',
      title: 'As we passed, I remarked a beautiful church-spire rising...',
      date: '18 December',
    },
    {
      id: 4,
      image: './assets/images/post-popular-4.png',
      title: 'Lady Crawley, and mother of the young ladies. she was...',
      date: '18 December',
    },
    {
      id: 5,
      image: './assets/images/post-popular-5.png',
      title: "This I have produced as a scantling of Jack's great...",
      date: '15 December',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1170px] mx-auto px-8 py-16">
        <div className="flex gap-20">
          {/* Main Article */}
          <article className="flex-1 max-w-[700px]">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-[#1E0D63] text-[42px] font-bold leading-[52px] tracking-[-0.4px] mb-4">
                To these in the morning I sent the lead who was to enter the hole
              </h1>
              <span className="text-[rgba(21,20,57,0.4)] text-sm font-bold uppercase tracking-[2px] leading-[26px]">
                20 December
              </span>
            </header>

            {/* Article Content */}
            <div className="space-y-6">
              <p className="text-[#1E0D63] text-lg font-medium leading-7">
                This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.
              </p>

              <p className="text-[#1E0D63] text-lg font-medium leading-7">
                For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.
              </p>

              <h3 className="text-[#1E0D63] text-[22px] font-medium leading-8 mt-8 mb-4">
                Perfect for Your
              </h3>

              <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px]">
                The method is this: in an acre of ground you bury, at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest then you drive.
              </p>

              {/* First Image */}
              <figure className="my-8">
                <img
                  src="./assets/images/woman-yellow-shirt.png"
                  alt="Woman in yellow shirt"
                  className="w-full rounded-[10px]"
                  loading="lazy"
                />
                <figcaption className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mt-4">
                  photo by Denis
                </figcaption>
              </figure>

              <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px]">
                The tattered remains of a checked curtain were drawn round the bed's head, to exclude the wind, which, however, made its way into the comfortless room through the numerous chinks in the door.
              </p>

              {/* Second Image */}
              <figure className="my-8">
                <img
                  src="./assets/images/neon-sign.png"
                  alt="Neon sign"
                  className="w-full rounded-[10px]"
                  loading="lazy"
                />
                <figcaption className="text-[rgba(21,20,57,0.4)] text-base leading-[26px] mt-4">
                  photo by Denis
                </figcaption>
              </figure>

              <p className="text-[rgba(21,20,57,0.4)] text-base leading-[26px]">
                When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <Sidebar
            lastSeenPosts={lastSeenPosts}
            popularPosts={popularPosts}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
