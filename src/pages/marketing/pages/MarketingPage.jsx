import MarketingNavbar from "../components/MarketingNavbar";
import CustomContainer from "../../../components/structure/CustomContainer";
import Footer from "../components/Footer";
import { Outlet} from "react-router-dom";

const MarketingPage = () => {
  return (
    <CustomContainer>
    <div
      //  style={{width:'100%'}}
       >
      <div><MarketingNavbar /></div>
      <Outlet/>
      <Footer/>
    </div>
    </CustomContainer>
  );
};

export default MarketingPage;
