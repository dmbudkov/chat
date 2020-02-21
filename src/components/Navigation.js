import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";
import BottomNavigation from "@material-ui/core/BottomNavigation";


export default class extends React.Component {
  state = {
    activeTab: 0,
  };

  handleChangeActiveTab = (event, value) => {
    this.setState({
      ...this.state,
      activeTab: value,
    })
  };

  render() {
    const { activeTab } = this.state;

    return (
      <BottomNavigation
        value={activeTab}
        onChange={this.handleChangeActiveTab}
        showLabels>
        <BottomNavigationAction
          label="My Chats"
          icon={<RestoreIcon />} />
        <BottomNavigationAction
          label="Explore"
          icon={<ExploreIcon />} />
      </BottomNavigation>
    );
  }
}