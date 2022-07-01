import './App.css';
import assets from './assets';
import FacebookShareButton from './components/FacebookShareButton/FacebookShareButton';
import LinkedInShareButton from './components/LinkedInShareButton/LinkedInShareButton';
import MailShareButton from './components/MailShareButton/MailShareButton';
import ReactSharePlugin from './components/ReactSharePlugin/ReactSharePlugin';
import TwitterShareButton from './components/TwitterShareButton/TwitterShareButton';
import WhatsAppShareButton from './components/WhatsAppShareButton/WhatsAppShareButton';

function App() {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <ReactSharePlugin>
      <WhatsAppShareButton iconImage={assets.images.whatsappLogo} handleButtonClick={handleClick} />
      <FacebookShareButton iconImage={assets.images.facebookLogo} handleButtonClick={handleClick} />
      <TwitterShareButton iconImage={assets.images.twitterLogo} handleButtonClick={handleClick} />
      <LinkedInShareButton iconImage={assets.images.linkedinLogo} handleButtonClick={handleClick} />
      <MailShareButton iconImage={assets.images.mailLogo} handleButtonClick={handleClick} />
    </ReactSharePlugin>

  );
}

export default App;
