import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './style.css';

export interface TaskCardProps {
  icon?: object;
  title?: string;
  message?: string;
  color?: string;
  href?: string;
  buttonIsVisible?: boolean;
  buttonHref?: string;
  buttonLabel?: string;
  buttonComponent?: object;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  icon,
  title,
  message,
  color,
  href,
  buttonIsVisible,
  buttonHref,
  buttonLabel,
  buttonComponent
}) => {
  const styles: any = useStyles();
  const renderTaskCard = () => {
    return (
      <div
        onClick={() => {
          if (href !== null) {
            window.open(href, '_black');
          }
        }}
        className={styles.container}>
        <div>
          <div className={styles.leftBar} style={{ backgroundColor: color }} />
        </div>
        <div className={styles.taskCard}>
          <div className={styles.iconSection}>{icon}</div>
          <div className={styles.textSection}>
            <p className={styles.titleText}>{title}</p>
            <p className={styles.contentText}>{message}</p>
          </div>
          {buttonIsVisible && buttonComponent == null ? (
            <div
              onClick={() => {
                if (buttonHref !== null) {
                  window.open(buttonHref, '_black');
                }
              }}
              className={styles.buttonSection}
              style={{ backgroundColor: color }}>
              <p className={styles.buttonText}>{buttonLabel}</p>
            </div>
          ) : (
            buttonComponent
          )}
        </div>
      </div>
    );
  };

  return <div className={styles.screen}>{renderTaskCard()}</div>;
};

TaskCard.defaultProps = {
  color: '#81BC7E',
  buttonLabel: 'Button'
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '15px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '15px',
    marginRight: '15px',
  },
  leftBar: {
    flex: 1,
    width: '5px',
    height: '100%',
    backgroundColor: '#81BC7E', 
  },
  taskCard: {
    width: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EBF0F4',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderRightWidth: '2px',
    borderStyle: 'solid',
  },
  iconSection: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  textSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px',
  },
  titleText: {
    color: '#425867',
    fontWeight: 'bold',
    fontSize: 14
  },
  contentText: {
    color: '#4F6272',
    fontWeight: 500,
    fontSize: 12,
    marginTop: '5px',
  },
  buttonSection: {
    backgroundColor: '#81BC7E',
    padding: '5px',
    borderRadius: '5px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  buttonText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 12,
  }
}));
