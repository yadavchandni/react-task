import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import './style.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonIcon from '@material-ui/icons/Person';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
        return (
            <div>
                   {/* sidebar start */}
                   <div className="row" style={{backgroundColor:"white"}}>
                     
                          <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                          <label htmlFor="openSidebarMenu" className="sidebarIconToggle" style={{backgroundColor:"Black"}}>
                              <div className="spinner diagonal part-1"></div>
                              <div className="spinner horizontal"></div>
                              <div className="spinner diagonal part-2"></div>
                          </label>
                          <div id="sidebarMenu" >                  
                                <div className="sidebar-header">
                                  <div className="user-pic">
                                      <img className="img-responsive img-rounded" 
                                      src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" 
                                      alt="User picture" />
                                  </div>
                                    <div className="user-info">
                                        <span className="user-name">Chandni 
                                            <strong>Yadav</strong>                  
                                        </span>                        
                                        <span className="user-role">Administrator</span>
                                        <span className="user-status">
                                            {/* <i className="fas fa-circle"></i> */}
                                            <FiberManualRecordIcon className="fa fa-circle" style={{ color: "green" }} />
                                            <span>Online</span>
                                        </span>
                                     </div>
                           </div>               
                                {/*  sidebar Menu Inner */}                                                           
                                <ul className="sidebarMenuInner" >
                                    <li className="header-menu">
                                        <span>General</span>
                                    </li>
                                    <li className="sidebar-title-ui-li"
                                      aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClick} >                                   
                                       <PersonIcon /> User
                                    </li>
                                    <StyledMenu
                                            id="customized-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                          >
                                          <StyledMenuItem>
                                              <ListItemIcon>
                                                  <SendIcon fontSize="small" />
                                              </ListItemIcon>
                                              <ListItemText primary="Sent mail" />
                                              </StyledMenuItem>
                                          <StyledMenuItem>
                                              <ListItemIcon>
                                                  <DraftsIcon fontSize="small" />
                                              </ListItemIcon>
                                              <ListItemText primary="Drafts" />
                                          </StyledMenuItem>
                                          <StyledMenuItem>
                                              <ListItemIcon>
                                                  <InboxIcon fontSize="small" />
                                              </ListItemIcon>
                                              <ListItemText primary="Inbox" />
                                          </StyledMenuItem>
                                      </StyledMenu>
                                    <li className="sidebar-title-ui-li"><a href="#" target="_blank" >
                                        <span > <FiberManualRecordIcon className="fa fa-circle"  />
                                         chart
                                        </span>
                                        </a>
                                    </li>
                                    <li><SendIcon fontSize="small" />
                                      <a href="#" target="_blank">massege</a></li>
                                    <li> <DraftsIcon fontSize="small" />
                                      <a href="#" target="_blank">Draft</a></li>                   
                                    <li
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClick} > 
                                        <InboxIcon fontSize="small" />                                 
                                      Contact 
                                    </li>
                                    <li className="sidebar-title-ui-li"><a href="#" target="_blank" >
                                        <span > <FiberManualRecordIcon className="fa fa-circle"  />
                                         chart
                                        </span>
                                        </a>
                                    </li>
                                    <li><SendIcon fontSize="small" />
                                      <a href="#" target="_blank">massege</a></li>
                                    <li> <DraftsIcon fontSize="small" />
                                      <a href="#" target="_blank">Draft</a></li>                   
                                    <li
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClick} > 
                                        <InboxIcon fontSize="small" />                                 
                                      Contact 
                                    </li>
                                    <li className="sidebar-title-ui-li"><a href="#" target="_blank" >
                                        <span > <FiberManualRecordIcon className="fa fa-circle"  />
                                         chart
                                        </span>
                                        </a>
                                    </li> <li className="sidebar-title-ui-li"><a href="#" target="_blank" >
                                        <span > <FiberManualRecordIcon className="fa fa-circle"  />
                                         chart
                                        </span>
                                        </a>
                                    </li>
                                </ul>                     
                            </div>
                         </div>
            </div>
        )
    }

