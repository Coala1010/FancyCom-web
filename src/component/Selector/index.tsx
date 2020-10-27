import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './style.css';

interface ItemProps {
  id: string;
  label: string;
  icon: object;
}

export interface SelectorProps {
  items: ItemProps[];
  onChange: () => void;
}

export const Selector: React.FC<SelectorProps> = ({ items, onChange }) => {
  const styles: any = useStyles();
  const [value, setValue] = useState(0);
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        {items &&
          items.map((item, index) => (
            <div
              onClick={() => {
                setValue(index);
                onChange();
              }}
              key={item.id}
              className={`${styles.alignItemContainer}`}
              style={{ backgroundColor: value === index ? '#F4F4F4' : 'white' }}>
              <div className={styles.alignItemSection}>
                <div className={styles.alignIconSection}>{item.icon}</div>
                <p className={styles.alignItemLabel}>{item.label}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignItemContainer: {
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  alignItemSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignIconSection: {
    display: 'flex',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5px',
    marginRight: '5px',
  },
  alignItemLabel: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: '5px',
    textAlign: 'center',
  },
}));
