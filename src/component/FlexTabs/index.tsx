import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { makeStyles } from '@material-ui/core/styles';
// import './style.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

interface TabProps {
  id: string;
  name: string;
}

interface TabActionProps {
  label: string;
  onSelect: object;
}

export interface FlexTabsProps {
  name?: string;
  tabs: TabProps[];
  enableTabDropdowns?: boolean;
  enableContextMenu?: string;
  tabActions?: TabActionProps[];
  canRename?: boolean;
  canDrag?: boolean;
  overflow?: string;
  canAdd: boolean;
  componentWrapper?: object;
  // style: ViewStyle;
  tabComponent?: object;
  vertical?: boolean;
}

export const FlexTabs: React.FC<FlexTabsProps> = ({
  name,
  tabs,
  enableTabDropdowns,
  enableContextMenu,
  tabActions,
  canRename,
  canDrag,
  overflow,
  canAdd,
  componentWrapper,
  // style,
  tabComponent,
  vertical
}) => {
  const styles: any = useStyles();
  const [tabsData, setTabsData] = useState(tabs);
  const [nSelItem, setNSelItem] = useState(tabs[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [tabTitle, setTabTitle] = useState('');
  const [bEditOrAdd, setEditOrAdd] = useState(false);
  // console.log('enableTabDropdowns', enableTabDropdowns);
  // console.log('canRename', canRename);
  // console.log('canAdd', canAdd);

  const SortableItem = SortableElement(({ item }: { item: TabProps }) => (
    <div
      onClick={() => setNSelItem(item)}
      className={styles.tabBtn}
      id={nSelItem.id === item.id ? 'isActive' : 'notActive'}
      style={{ borderBottomColor: nSelItem.id === item.id ? '#008DD8' : 'white' }}>
      <p
        className={styles.tabTitle}
        id={item.name}
        style={{ color: nSelItem.id === item.id ? '#008DD8' : '#607380' }}>
        {item.name}
      </p>
      {enableTabDropdowns && (
        <div
          onClick={() => {
            setTabTitle(item.name);
            setModalVisible(true);
          }}
          style={{ width: 20 }}>
          {nSelItem.id === item.id && (
            <ExpandMoreOutlinedIcon style={{ fontSize: 20, color: '#008DD8', marginLeft: 5 }} />
          )}
        </div>
      )}
    </div>
  ));

  const SortableList = SortableContainer(({ items }: { items: TabProps[] }) => {
    return (
      <div style={{ display: 'flex' }}>
        {items.map((value, index) => (
          <SortableItem key={`value-${index}`} index={index} item={value} />
        ))}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    setTabsData(arrayMove(tabsData, oldIndex, newIndex));
  };

  const guidGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  };

  const renderContextModal = (
    <Dialog open={modalVisible}>
      <DialogContent>
        <div className={styles.centeredView}>
          <div className={styles.modalView}>
            {tabActions &&
              tabActions.map((item, index) => (
                <div
                  key={index.toString()}
                  className={styles.openButton}
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    if (item.label === 'Rename') {
                      if (canRename) {
                        setTimeout(() => {
                          // item.onSelect();
                          setEditOrAdd(false);
                          setEditModalVisible(true);
                        }, 1000);
                      }
                    } else if (item.label === 'Duplicate') {
                      const tmpTabsData = tabsData;
                      var tmp = { id: guidGenerator(), name: nSelItem.name };
                      tmpTabsData.push(tmp);
                      setTabsData(tmpTabsData);
                    } else if (item.label === 'Delete') {
                      const tmpTabsData = tabsData;
                      if (tmpTabsData.length > 1) {
                        var index = tmpTabsData.indexOf(nSelItem);
                        tmpTabsData.splice(index, 1);
                        setNSelItem(tmpTabsData[0]);
                        setTabsData(tmpTabsData);
                      } else {
                        alert('You can remove the last menu');
                      }
                    }
                  }}>
                  <p className={styles.textStyle}>{item.label}</p>
                </div>
              ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const onChangeTitleText = (event: any) => {
    setTabTitle(event.target.value);
  };

  const renderEditTabTitle = (
    <Dialog open={editModalVisible}>
      <DialogTitle id='alert-dialog-title'>Tab Title</DialogTitle>
      <div className={styles.centeredView}>
        <div className={styles.modalView}>
          <textarea
            style={{
              width: '100%',
              height: 40,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10
            }}
            onChange={onChangeTitleText}
            value={tabTitle}
            placeholder='Tab Title'
          />
          <div
            className={styles.openButton}
            onClick={() => {
              const tmpTabsData = tabsData;
              if (tabTitle !== '') {
                if (bEditOrAdd && canAdd) {
                  var tmp = { id: guidGenerator(), name: tabTitle };
                  tmpTabsData.push(tmp);
                } else if (!bEditOrAdd && canRename) {
                  for (var i = 0; i < tabsData.length; i++) {
                    if (tabsData[i].id === nSelItem.id) {
                      tmpTabsData[i].name = tabTitle;
                      break;
                    }
                  }
                }
              }
              setTabsData(tmpTabsData);
              setEditModalVisible(!editModalVisible);
            }}>
            <p className={styles.textStyle}>OK</p>
          </div>
        </div>
      </div>
    </Dialog>
  );

  const renderNormalItem = () => {
    return (
      <div style={{ display: 'flex' }}>
        {tabsData.map((item, index) => (
          <div
            key={index.toString()}
            onClick={() => setNSelItem(item)}
            className={styles.tabBtn}
            style={{ borderBottomColor: nSelItem.id === item.id ? '#008DD8' : 'white' }}>
            <p
              style={{
                color: nSelItem.id === item.id ? '#008DD8' : '#607380',
                marginTop: 2,
                marginBottom: 2
              }}>
              {item.name}
            </p>
            {enableTabDropdowns && (
              <div
                onClick={() => {
                  setTabTitle(item.name);
                  setModalVisible(true);
                }}
                style={{ width: 20 }}>
                {nSelItem.id === item.id && (
                  <ExpandMoreOutlinedIcon
                    style={{ fontSize: 20, color: '#008DD8', marginLeft: 5 }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.screen}>
      <div className={styles.flexTabContainer}>
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 15,
            paddingLeft: 15,
            flex: 1
          }}>
          {canDrag ? (
            <SortableList
              items={tabsData}
              axis='x'
              lockAxis='x'
              onSortEnd={onSortEnd}
              distance={1}
            />
          ) : (
            renderNormalItem()
          )}
        </div>
        <div
          onClick={() => {
            setTabTitle('');
            setEditOrAdd(true);
            setEditModalVisible(true);
          }}
          style={{ marginLeft: 5, marginRight: 5 }}>
          <MoreHorizIcon style={{ fontSize: 25, color: '#607380' }} />
        </div>
      </div>
      {modalVisible && renderContextModal}
      {editModalVisible && renderEditTabTitle}
    </div>
  );
};

interface wrapperProps {
  children: React.ReactNode;
}

const MyComponentWrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <div
    // style={{ borderWidth: 2, borderColor: 'green' }}
    >
      {children}
    </div>
  );
};

const MyTabComponent: React.FC<wrapperProps> = ({ children }) => {
  return (
    <div
    // style={{ borderWidth: 2, borderColor: 'red' }}
    >
      {children}
    </div>
  );
};

FlexTabs.defaultProps = {
  enableTabDropdowns: true,
  canAdd: true,
  canRename: true,
  canDrag: true,
  componentWrapper: MyComponentWrapper,
  tabComponent: MyTabComponent
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexTabContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '0px',
    borderBottomColor: 'grey',
    borderBottomWidth: '1px',
    borderTopColor: 'grey',
    borderTopWidth: '1px',
    marginTop: '5px',
    marginBottom: '5px',
    borderStyle: 'solid',
    width: '100%',
  },
  tabBtn: {
    display: 'flex',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    borderWidth: '0px',
    borderBottomWidth: '2px',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabTitle: {
    marginTop: '2px',
    marginBottom: '2px',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: '300px',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '35px',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '2px',
    paddingBottom: '2px',
    marginTop: '15px',
    marginBottom: '15px',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
  },
}));
