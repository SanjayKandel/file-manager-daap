import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
