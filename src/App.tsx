import React from 'react';
import { Routes, Route } from 'react-router-dom';

const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const ArticlePage = React.lazy(() => import('./pages/ArticlePage'));

export default function App() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-heading text-lg">Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </React.Suspense>
  );
}
