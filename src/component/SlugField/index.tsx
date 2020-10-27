import FileCopyIcon from '@material-ui/icons/FileCopy';
import LaunchIcon from '@material-ui/icons/Launch';
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { makeStyles } from '@material-ui/core/styles';
// import './style.css';

interface domainPrefixProps {
  key: string;
  label: string;
  value: string;
}

export interface SlugFieldProps {
  domainPrefix?: string;
  domainPrefixItems: domainPrefixProps[];
  showPrefixDropdown?: boolean;
  value?: string;
  showCopyButton?: boolean;
  showLinkIcon?: boolean;
  // style?: ViewStyle;
  placeholder?: string;
  label?: string;
}

export const SlugField: React.FC<SlugFieldProps> = ({
  domainPrefix,
  domainPrefixItems,
  showPrefixDropdown,
  value,
  showCopyButton,
  showLinkIcon,
  // style,
  placeholder,
  label
}) => {
  const styles: any = useStyles();
  const [slugText, setSlugText] = useState(value);
  const [domainPrefixText, setDomainPrefixText] = useState(domainPrefix);

  const onLinkCopyButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    document.execCommand('copy');
    alert('Copied the url ' + urlValue);
  };

  const onLinkLaunchButton = () => {
    const urlValue = 'http://' + domainPrefixText + '/' + slugText;
    window.open(urlValue, '_black');
  };

  const _onSelect = (option: any) => {
    setDomainPrefixText(option.label);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.domainHeaderSection}>
          <p className={styles.domainPrefixColor}>https://</p>
        </div>
        <div className={styles.domainPrefixSection}>
          <Dropdown
            className={styles.dropdownSection}
            controlClassName={styles.dropdownControlSection}
            options={domainPrefixItems}
            onChange={_onSelect}
            value={domainPrefixItems[0]}
            placeholder='Select an option'
          />
        </div>
        <div className={styles.slashSection}>
          <p className={styles.domainPrefixColor}>/</p>
        </div>
        <input
          type='text'
          className={styles.slugTextSection}
          value={slugText}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
            setSlugText(ev.target.value);
          }}
        />
        <div className={styles.buttonsSection}>
          {showCopyButton && (
            <div className={styles.actionButton} onClick={onLinkCopyButton}>
              <FileCopyIcon style={{ color: 'grey', fontSize: 25 }} />
            </div>
          )}
          {showLinkIcon && (
            <div className={styles.actionButton} onClick={onLinkLaunchButton}>
              <LaunchIcon style={{ color: 'grey', fontSize: 25 }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

SlugField.defaultProps = {
  showCopyButton: true,
  showLinkIcon: true
};

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  domainHeaderSection: {
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '10px',
    paddingRight: '10px',
    height: '40px',
    borderTopLeftRadius: '7px',
    borderBottomLeftRadius: '7px',
  },
  domainPrefixColor: {
    color: 'white',
  },
  domainPrefixSection: {
    flex: 1,
    backgroundColor: 'grey',
    height: '100%',
    flexWrap: 'wrap',
  },
  dropdownSection: {
    backgroundColor: 'grey',
    borderWidth: '1px',
    borderColor: 'grey',
    borderStyle: 'solid',
  },
  dropdownControlSection: {
    backgroundColor: 'grey',
    borderWidth: '1px',
    borderColor: 'grey',
    borderStyle: 'solid',
    color: 'white',
    height: '38px',
  },
  slashSection: {
    backgroundColor: 'grey',
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slugTextSection: {
    display: 'flex',
    flex: 1,
    color: 'white',
    backgroundColor: 'grey',
    height: '34px',
    paddingLeft: '5px',
    paddingRight: '5px',
    borderTopRightRadius: '7px',
    borderBottomRightRadius: '7px',
    borderColor: 'grey',
    borderStyle: 'solid',
  },
  buttonsSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}));
