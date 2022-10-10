import Layout from "components/Layout";
import SEO from "components/SEO";
import React, { FC } from "react";
import Hero from "components/Hero";
import PortfolioList from "components/our-portfolio/components/PortfolioList";
import ContactUs from "components/ContactUs";
import { usePortfolioPage } from "hooks/usePortfolioPage";
import OurPortfolioStyle from "assets/styles/pages/OurPortfolio.style";
import { useAboutPage } from "hooks/useAboutPage";
import Carousel from "components/elements/Carousel/Carousel";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useAllPortfolios } from "hooks/useAllPortfolios";
import { TPortfolioFilterItem } from "types/portfolioTypes";
import Description from "components/Description";

// const scrollToRef = (ref) =>
//   window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth" });

const OurPortfolio: FC = () => {
  const {
    seoTitle,
    seoDescription,
    heroText,
    heroTitle,
    heroImg,
    contactImg,
    textDescription,
    contactTitle,
  } = usePortfolioPage();
  // const [mounted, setMounted] = useState(false);
  // const divRef = useRef();

  const { clientsTitle, clientsDescription, clientsListImage } = useAboutPage();

  const clientSlider = {
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newData = useAllPortfolios();

  // const categories = newData.map((portfolioList) => portfolioList.category);
  // const categoryList = [...new Set(categories)];

  // const filteredData: TPortfolioFilterItem[] = location.search
  //   ? newData.filter((item) => item.category === location.search.substring(1))
  //   : newData;

  const filteredData: TPortfolioFilterItem[] = newData;

  // useEffect(() => {
  //   if (mounted) {
  //     scrollToRef(divRef);
  //   }
  //   setMounted(true);
  // }, [location.search]);

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <Hero heroTitle={heroTitle} heroText={heroText} heroImg={heroImg} />
      {/* <div ref={divRef} /> */}
      <OurPortfolioStyle>
        <PortfolioList
          // categoryList={categoryList}
          filteredData={filteredData}
        />

        <Description
          variant="dark"
          title={textDescription}
          typography="h2"
          link="/our-services/"
          linkTitle="See our services"
        />
      </OurPortfolioStyle>
      <ContactUs
        contactImg={contactImg}
        contactTitle={contactTitle}
        formName="contact-us-form"
      />
    </Layout>
  );
};

export default OurPortfolio;
