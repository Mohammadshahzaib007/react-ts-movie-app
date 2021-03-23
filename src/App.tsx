import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import Layout from "./components/Layout/Layout";
import CategoryView from "./pages/CategoryView";

function App() {

  const history = useHistory();

  useEffect(() => {
    history.push('/shd/sdf')
  }, [])

  return (
    <Layout>
      <Switch>
        <Route exact path="/:gener/:name" component={CategoryView} />
      </Switch>
    </Layout>
  );
}

export default App;
