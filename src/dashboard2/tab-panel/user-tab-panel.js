import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AnalticalTab from '../Analytics/index';
import Usersinfo from '../UsersInfo/users/index';
import Issues from '../issues/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// custome css
import '../tab-panel/back-to-home-button/style.css';
function NavigationTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="NavigationTab"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

NavigationTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
           {/*=================== back to home button ============================ */}
           <Button>
              <Link to={'/'} ><ArrowBackIcon className="back-button-icon" /></Link>
            </Button>
          <Tab component={Link}  label="Analytics" {...a11yProps(1)} />
          <Tab component={Link} label="Users" {...a11yProps(2)} />
          <Tab component={Link}  label="Isuues" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <NavigationTab value={value} index={1}>
        <AnalticalTab />
      </NavigationTab>
      <NavigationTab value={value} index={2}>
        <Usersinfo />
      </NavigationTab>
      <NavigationTab value={value} index={3}>
        <Issues />
      </NavigationTab>
    </div>
  );
}