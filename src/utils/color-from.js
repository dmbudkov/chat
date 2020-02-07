import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightgreen from '@material-ui/core/colors/lightGreen';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';

const colors = [purple, red, pink, indigo, blue, teal, green, lightgreen, amber, orange, deepOrange, deepPurple, blueGrey];

export default function (string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, el) => sum + el, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];

  } catch (err) {
    console.error(err);
    return blueGrey[500];
  }

}