// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from './contact-us-slice';
import NewsLetter from './newsletter-slice';

export type HomePageProps = {
  contactUsURL: string,
  featuredBlogPosts: Array<Object>
};

const HomePage = ({ contactUsURL, featuredBlogPosts }: HomePageProps) => (
  <div>
    <h1>Help!</h1>
    <TopSlice />
    <CaseStudy />
    <Brie />
    <TechSlice />
    <ContactUs postURL={contactUsURL} />
    <BlogSlice featuredBlogPosts={featuredBlogPosts} />
    <NewsLetter />
  </div>
);

HomePage.propTypes = {
  contactUsURL: React.PropTypes.string,
  featuredBlogPosts: React.PropTypes.array,
};

export default HomePage;
