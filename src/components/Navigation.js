import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MoodIcon from '@material-ui/icons/Mood';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import PropTypes from "prop-types";


export default class Navigation extends React.Component {
  render() {
    const { activeTab, setActiveTab, disabled } = this.props;

    return (
      <BottomNavigation
        value={activeTab}
        onChange={setActiveTab}
        showLabels>
        <BottomNavigationAction
          label="Мои чаты"
          disabled={disabled}
          icon={<MoodIcon />} />
        <BottomNavigationAction
          label="Все чаты"
          disabled={disabled}
          icon={<AllInclusiveIcon />} />
        {/*<BottomNavigationAction
          label="Участники"
          disabled={disabled}
          fontSize="large"
          icon={<SupervisorAccountIcon />} />*/}
      </BottomNavigation>
    );
  }
}

Navigation.propTypes = {
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func
};