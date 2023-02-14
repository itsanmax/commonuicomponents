import React from 'react';
// import {
//   StylesProvider,
//   createGenerateClassName,
//   ThemeProvider,
// } from '@material-ui/core/styles';
//import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
//import { Provider } from 'react-redux';
//import theme from './styles/theme';
//import store from './redux/store/store';
//import LBWrapper from './components/liveblog/lb-wrapper';
//import './utils/cms.sdk';

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'denui-',
// });

const AppRoutes = (props) => {
  if (props) {
    const { reqObj } = props;

    console.log(window?.AppSDK, 'hello');
    switch (reqObj.compId) {
        case "lbsearch":
            return (
                <div>Live Blog Search React Component</div>
            );
            break;
      default:
        return (
          <>Test default routes</>
          // <Provider store={store}>
          //   <StylesProvider generateClassName={generateClassName}>
          //     <ThemeProvider theme={theme}>
          //       <CssBaseline />
          //       <LBWrapper />
          //     </ThemeProvider>
          //   </StylesProvider>
          // </Provider>
        );
    }
  }
  return null;
};

AppRoutes.defaultProps = {
  reqObj: {},
};

AppRoutes.propTypes = {
  reqObj: PropTypes.object,
};
export default AppRoutes;
