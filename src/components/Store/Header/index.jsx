import {FaInstagram, FaPhone, FaWhatsapp, FaSearch} from "react-icons/fa"
import {Head, Logo, FlexContainer, Top, Socials, Social, Search, SearchInput} from "./styles"
import logo from "../../../assets/storelinkLogo.png"
import CartLogo from "../../SVG/CartLogo"


const Header = () => {
  return (
    <Head>
      <Top>
        <Logo>
          <img src={logo} alt="logo" />
          <div className="info">
            <h3 className="info__name">Chef Food House</h3>
            <p className="info__location">Location: Iwo Road</p>
          </div>
        </Logo>
        <CartLogo />
      </Top>
      <FlexContainer>
        <Socials>
          <Social>
            <FaInstagram />
          </Social>
          <Social>
            <FaPhone />
          </Social>
          <Social>
            <FaWhatsapp />
          </Social>
        </Socials>
        <Search>
          <FaSearch />
          
          <SearchInput placeholder="What are you shopping for?" />
        </Search>
      </FlexContainer>
    </Head>
  )
}

export default Header