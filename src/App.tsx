import React, { Suspense, lazy, useState } from 'react';

// Lazy load pages for better performance
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// Loading fallback component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-pulse text-[#2F1893] text-lg font-medium">Loading...</div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState<'article' | 'blog'>('article');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[#EBEAED] z-50">
        <div className="max-w-[1170px] mx-auto px-8 py-4 flex justify-between items-center">
          <span className="text-[#1E0D63] text-xl font-bold">
            Startup Landing Pages
          </span>
          <div className="flex gap-6">
            <button
              onClick={() => setCurrentPage('article')}
              className={`text-base font-medium transition-colors ${
                currentPage === 'article'
                  ? 'text-[#2F1893]'
                  : 'text-[rgba(21,20,57,0.4)] hover:text-[#1E0D63]'
              }`}
            >
              Article Page
            </button>
            <button
              onClick={() => setCurrentPage('blog')}
              className={`text-base font-medium transition-colors ${
                currentPage === 'blog'
                  ? 'text-[#2F1893]'
                  : 'text-[rgba(21,20,57,0.4)] hover:text-[#1E0D63]'
              }`}
            >
              Blog Page
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-[72px]">
        <Suspense fallback={<Loading />}>
          {currentPage === 'article' ? <ArticlePage /> : <BlogPage />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
