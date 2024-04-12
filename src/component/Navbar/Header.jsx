import SideNav from "./SideNav";
import HeaderTop from "./HeaderTop";
import HeaderNavbar from "./HeaderNavbar";
import HeaderBottom from "./HeaderBottom";

export default function Header(props){
    return (
        <>
            <SideNav />
            <header>
                <HeaderTop />
                <HeaderNavbar />    
                <HeaderBottom />    
            </header>
        </>    
    )
}