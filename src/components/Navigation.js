import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";
import BottomNavigation from "@material-ui/core/BottomNavigation";


export default class extends React.Component {
  render() {
    const { activeTab, setActiveTab } = this.props;

    return (
      <BottomNavigation
        value={activeTab}
        onChange={setActiveTab}
        showLabels>
        <BottomNavigationAction
          label="Мои чаты"
          icon={<RestoreIcon />} />
        <BottomNavigationAction
          label="Все чаты"
          icon={<ExploreIcon />} />
      </BottomNavigation>
    );
  }
}