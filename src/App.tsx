import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import Layout from "./components/Layout/Layout";
import CategoryView from "./pages/CategoryView";

function App() {

  const history = useHistory();

  useEffect(() => {
    history.push('/discover/popular/125436345')
  }, [])

  return (
    <Layout>
      <Switch>
        <Route exact path="/:gener/:name/:generId" component={CategoryView} />
      </Switch>
    </Layout>
  );
}

export default App;
