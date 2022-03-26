import SideBar from './SideBar'
import { useMoralis } from "react-moralis";
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    
    if(children[0].type.name==="Home"){
        return (
            <div>
                {children}
            </div>
        )
    }
    return (
        <div className="flex">
          <SideBar />
          {children}
        </div>
    )
}

export default Layout;