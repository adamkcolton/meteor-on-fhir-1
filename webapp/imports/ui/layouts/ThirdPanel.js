import React from 'react';
import classnames from 'classnames';
// import style from './style';

const ThirdPanel = ({ children, className, scrollY }) => {
  const _className = classnames(style.panel, {
    [style.scrollY]: scrollY
  }, className);

  return (
    <div data-react-toolbox='panel' className={_className} style={{width: '400px', position: "absolute", left: 768 + 400 + 80 + "px", top: "0px", height: "inherit"}}>
      {children}
    </div>
  );
};

ThirdPanel.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  scrollY: React.PropTypes.bool
};

ThirdPanel.defaultProps = {
  className: '',
  scrollY: false
};

export default ThirdPanel;