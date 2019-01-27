import React from 'react';
import loadable from 'react-loadable';
// contact route component
const LoadingAbout = () => <h3>please wait...</h3>;
const AboutComponentPromise = () => {
  return import('./about');
}
export const AcyncAboutComponent = loadable( {
  loader: AboutComponentPromise,
  loading: LoadingAbout
} );