import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AnalticalTab from '../Analytics/index';
import InventoryTab  from '../inventoryinfo/form';
import Issues from '../issues/index';

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
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Analytics" {...a11yProps(0)} />
          <Tab label="Inventory" {...a11yProps(1)} />
          <Tab label="Isuues" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <NavigationTab value={value} index={0}>
        <AnalticalTab />
      </NavigationTab>
      <NavigationTab value={value} index={1}>
        <InventoryTab />
      </NavigationTab>
      <NavigationTab value={value} index={2}>
        <Issues />
      </NavigationTab>
    </div>
  );
}