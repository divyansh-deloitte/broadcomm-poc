import React from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "@clayui/css/lib/css/atlas.css";
//custom component
import Header from "./HeaderComponent";
import "./styles.css";
import Tabs from "./Tabs";
const SideBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  function handleCloseSidebar() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer
        open={isOpen}
        size={"60vw"}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <Header handleCloseSidebar={handleCloseSidebar} />

        <div className="container">
          <Tabs />
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
