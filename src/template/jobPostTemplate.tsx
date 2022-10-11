import React, { FC } from 'react';
import SEO from 'components/SEO';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import JobStyle from 'assets/styles/components/careers/Job.style';
import ContactUs from 'components/ContactUs';
import { TPortfolioPageData, TCareersSectionData } from 'types/careersTypes';
import Description from 'components/Description';
import JobDescription from 'components/job-post/components/JobDescription';

const JobPost: FC<TPortfolioPageData> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const {
    heroImg,
    path,
    positionTitle,
    seoDescription,
    seoTitle,
    moreDetails,
    contactImg,
    middlewareText,
    contactTitle,
  } = frontmatter;

  const moreData: TCareersSectionData[] = moreDetails;

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <JobStyle>
        <GatsbyImage
          image={getImage(heroImg)}
          alt={positionTitle}
          className='w-100'
          loading='lazy'
        />

        <JobDescription
          html={html}
          moreData={moreData}
          path={path}
          positionTitle={positionTitle}
        />
        <Description variant='blue' typography='h3' title={middlewareText} />
      </JobStyle>
      <div id='apply-link'>
        <ContactUs
          dropdownIsVisible={false}
          formName='apply-current-job-form'
          contactImg={contactImg}
          fileIsVisible={true}
          positionTitle={positionTitle}
          contactTitle={contactTitle}
        />
      </div>
    </Layout>
  );
};

export default JobPost;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        positionText
        positionTitle
        seoDescription
        seoTitle
        moreDetails {
          moreTitle
          moreListText {
            moreText
          }
        }
        heroImg {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        contactImg {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        contactTitle
        middlewareText
      }
    }
  }
`;
