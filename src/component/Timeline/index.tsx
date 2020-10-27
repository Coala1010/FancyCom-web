import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './style.css';

interface dataProps {
  title: string;
  subTitle: string;
  date: string;
  icon: object;
}

export interface TimelineProps {
  type?: string;
  data?: dataProps[];
  // style?: ViewStyle;
  barColor?: string;
  // barStyle?: ViewStyle;
  lineColor?: string;
  // lineStyle?: ViewStyle;
}

export const Timeline: React.FC<TimelineProps> = ({
  type,
  data,
  // style,
  barColor,
  // barStyle,
  lineColor
  // lineStyle
}) => {
  const styles: any = useStyles();
  const renderTimeline = () => {
    return (
      <>
        {data &&
          data.map((item, index) => (
            <div key={index} className={styles.scheduleItemContainer}>
              <div className={styles.barSection}>
                <div className={styles.iconCircle} style={{ backgroundColor: barColor }}>
                  {item.icon}
                </div>
                <div className={styles.timelineBar} style={{ backgroundColor: barColor }} />
              </div>
              <div className={styles.descriptionSection}>
                <p className={styles.dateText}>{item.date}</p>
                <div className={styles.textPart}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.content}>{item.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className={styles.screen}>
      <div className={styles.timelineContainer}>{type === 'VERTICAL' && renderTimeline()}</div>
    </div>
  );
};

Timeline.defaultProps = {
  type: 'VERTICAL'
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '15px',
  },
  timelineContainer: {
    padding: '15px',
  },
  scheduleItemContainer: {
    display: '-webkit-box',
    flexDirection: 'row',
  },
  barSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '14px',
    backgroundColor: '#49A6E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timelineBar: {
    display: 'flex',
    flex: 1,
    width: '3px',
    height: '100%',
    backgroundColor: '#49A6E9',
  },
  descriptionSection: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '7px',
  },
  dateText: {
    marginTop: '5px',
    marginBottom: '5px',
    color: 'darkgrey',
  },
  textPart: {
    borderColor: '#F1F1F1',
    borderWidth: '2px',
    borderStyle: 'solid',
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    marginTop: '5px',
  },
  title: {
    color: 'dimgrey',
    fontWeight: 'bold',
  },
  content: {
    marginTop: '5px',
    color: 'darkgrey',
  },
}));
