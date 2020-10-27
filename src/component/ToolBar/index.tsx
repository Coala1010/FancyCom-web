import React, { useState } from 'react';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import logo from './ambid_logo.png';
import user_img from './ambid_user.png';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';

export interface ToolBarProps {
  name?: string;
  leftItems?: object[];
  title: string;
  rightItems?: object[];
}

export const ToolBar: React.FC<ToolBarProps> = ({ name, leftItems, title, rightItems }) => {
  const styles: any = useStyles();
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [titleText, setTitleText] = useState(title);

  const handleClose = () => {
    setTitleModalVisible(false);
  };

  const onChangeTitleText = (event: any) => {
    setTitleText(event.target.value);
  };

  const renderTitleEditModal = (
    <Dialog
      open={titleModalVisible}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>ToolBar Title</DialogTitle>
      <DialogContent>
        <div className={styles.centeredView}>
          <textarea
            className={styles.modalEdiTitleInput}
            onChange={onChangeTitleText}
            value={titleText}
            placeholder='Title'
            maxLength={30}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setTitleModalVisible(false)} color='primary' autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.leftItemsSection}>
          <div>
            <FormatAlignJustifyIcon style={{ fontSize: 30, color: '#9EA9B1' }} />
          </div>
          <img src={logo} alt='Logo' className={styles.logoImg} />
        </div>
        <div onClick={() => setTitleModalVisible(true)}>
          <p className={styles.toolbarTitleText}>{titleText}</p>
        </div>
        <div>
          <div className={styles.rightItemsSection}>
            <div className={styles.rightItemElement}>
              <SearchIcon style={{ fontSize: 30, color: '#9EA9B1' }} />
            </div>
            <div className={styles.rightItemElement}>
              <PersonAddOutlinedIcon style={{ fontSize: 35, color: '#9EA9B1' }} />
            </div>
            <div className={styles.publishBtn}>
              <p className={styles.publishBtnText}>PUBLISH</p>
            </div>
            <div className={styles.userAvatarPart}>
              <img src={user_img} alt='User' className={styles.userAvatarImg} />
              <ExpandMoreOutlinedIcon style={{ fontSize: 25, color: '#9EA9B1' }} />
            </div>
          </div>
        </div>
      </div>
      {titleModalVisible && renderTitleEditModal}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '10px',
  },
  scrollViewWrapper: {
    display: 'flex',
    borderBottomWidth: '2px',
    borderBottomColor: '#E7EEF2',
    borderTopWidth: '2px',
    borderTopColor: '#E7EEF2',
    flexDirection: 'row'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  leftItemsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  toolbarTitleText: {
    color: '#607380',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  rightItemsSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  publishBtn: {
    backgroundColor: '#F35564',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
    marginLeft: '5px',
    marginRight: '5px',
  },
  publishBtnText: {
    color: 'white'
  },
  userAvatarPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatarImg: {
    width: '40px',
    height: '40px',
    marginLeft: '5px',
    marginRight: '5px',
  },
  rightItemElement: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  centeredView: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '22px',
    marginLeft: '30px',
    marginRight: '30px',
    minWidth: '350px',
  },
  modalView: {
    margin: '20px',
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '35px',
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: '20px',
    padding: '10px',
    width: '100%',
    marginTop: '15px',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: '15px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  modalEdiTitleInput: {
    width: '100%',
    height: '40px',
    borderColor: 'grey',
    borderWidth: '1px',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRadius: '10px',
  }
}));
