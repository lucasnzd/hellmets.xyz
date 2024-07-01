'use client';
// import { useAccount } from 'wagmi';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import './storePage.css';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function ShopPage() {
  // const account = useAccount();
  // account.status
  // account.addresses
  // account.chainId

  return (
    <>
      <Header />
      <main className="container mainContainerShop mx-auto flex flex-col">
        <h1 className="mainTitleShop text-xl font-normal text-white">
          F1 Helmet ZhouGuanyu ChineseGP Helmet
        </h1>

        <div className="container BikeBackgroundShop">
          <div className="Hellmet3D sketchfab-embed-wrapper">
            <iframe
              className="Hellmet3DIframe"
              title="F1 Helmet ZhouGuanyu ChineseGP Helmet"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/31f9f2c1e83c4eac9f444d73a853b2a9/embed?autospin=1&autostart=1&dnt=1" />
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <div className="firstStep">
              <h2 className="sectionTitle text-xl font-normal text-white">
                PRICE: 1 ETH
              </h2>
              <p>
                One of the best Hellmets of the market, the F1 Helmet ZhouGuanyu ChineseGP Helmet is one of kind.
              </p>
              <p>
                Collective asset, will recieve the NFT and the Real asset. Also will be able to use the NFT asset in Hellmets.xyz AR/VR App. 
              </p>
            </div>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              H E L M E T - S I Z E
            </h2>
            <div>
              <p>
                Available in S - M - L - XL.
              </p>
            </div>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              D U R A B I L I T Y - R A T E: 85%
            </h2>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              BUY
            </h2>
            <div>
              <p>
                Try out our commerce Experience.
              </p>
              <NextLink href="/" passHref className="relative h-8 w-8" aria-label="Home page">
                ADD TO CART <ArrowTopRightIcon width="16" height="16" />
              </NextLink>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
