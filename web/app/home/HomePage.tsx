'use client';
// import { useAccount } from 'wagmi';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import './homePage.css';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function HomePage() {
  // const account = useAccount();
  // account.status
  // account.addresses
  // account.chainId

  return (
    <>
      <Header />
      <main className="container mainContainer mx-auto flex flex-col">
        <h1 className="mainTitle text-xl font-normal text-white">
          H E L L M E T S . X Y Z
        </h1>

        <div className="container BikeBackground">
          <div className="Bike3D sketchfab-embed-wrapper">
            <iframe
              className="Bike3DIframe"
              title="Yamaha R1M"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/cc5e33e96a6241afa88ec00cd6867b80/embed?autospin=1&autostart=1&ui_hint=0&dnt=1" />
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              A B O U T
            </h2>
            <div>
              <p>
                We are Hellmets.xyz the first Web3 e-commerce webstore Experience for the new Metaverse Era.
              </p>
              <p>
                We are here to growth adoption and implementation of the best Web3 Experiences for Customers of Autoparts and Bike Enthusiasts.
              </p>
            </div>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              V I S I O N
            </h2>
            <div>
              <p>
                Growth the Web3 Technology Adoption all over the world with the Best world-class commerce experiences for users and automotives fans.
              </p>
              <p>
                Also, be the coolest project arround with this swag.
              </p>
            </div>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              M I S S I O N
            </h2>
            <div>
              <p>
                Be the first and most reliable source of web3 commerce experiences for automotives part in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="containerSection">
          <div className="HelmetGearSection" />
          <div>
            <h2 className="sectionTitle text-xl font-normal text-white">
              S T O R E
            </h2>
            <div>
              <p>
                Try out our commerce Experience.
              </p>
              <NextLink href="/shop" passHref className="relative h-8 w-8" aria-label="Home page">
                SHOP NOW! <ArrowTopRightIcon width="16" height="16" />
              </NextLink>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
