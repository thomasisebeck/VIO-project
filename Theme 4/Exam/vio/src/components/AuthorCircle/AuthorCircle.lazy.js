import React, { lazy, Suspense } from 'react';

const LazyAuthorCircle = lazy(() => import('./AuthorCircle'));

const AuthorCircle = props => (
  <Suspense fallback={null}>
    <LazyAuthorCircle {...props} />
  </Suspense>
);

export default AuthorCircle;
