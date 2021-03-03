import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { theme } from "./theme";

import Dashboard from "./pages/dashboard";

const Main = styled.main`
  padding: 24px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <HashRouter>
          <Switch>
            <Redirect from="/" exact to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect to="/dashboard" />
          </Switch>
        </HashRouter>
      </Main>
    </ThemeProvider>
  );
};

export default App;
