import './App.css';
//page
import { Page } from './Components/Sections/PageSection';

//Header
import Header from './Components/Sections/Header';
import Navigation from './Components/Sections/Navigation';
import Hero from './Components/Sections/Hero';
import Reviews from './Components/Sections/Reviews';

//Main
import Main from './Components/Sections/Main';
import Logos from './Components/Sections/Logos';
import Features from './Components/Sections/Features';
import FAQs from './Components/Sections/FAQs/FAQs';
import Testimonials from './Components/Sections/Testimonials/Testimonials';

//Footar
import Footer from './Components/Sections/Footer';

//Modal
import Modal from './Components/Sections/Modal/Modal';
import SignUpModal from './Components/Sections/Modal/SignUpModal';
import { ModalContextProvider } from './contexts/ModalContext';

//Mobile Menu
import MobileMenu from './Components/Sections/MobileMenu/MobileMenu';
import { MobileMenuContextProvider } from './contexts/MobileMenuContex';


function App() {
  return (
    <>
      <MobileMenuContextProvider>
        <ModalContextProvider>
          <Page>
            <Header>
              <Navigation />
              <Hero />
              <Reviews />
            </Header>

            <Main>
              <Logos />
              <Features />
              <FAQs />
              <Testimonials />
            </Main>

            <Footer />

            <Modal modal="sign-up">
              <SignUpModal />
            </Modal>
            <MobileMenu />
          </Page>
        </ModalContextProvider>
      </MobileMenuContextProvider>
    </>
  );
}

export default App;
