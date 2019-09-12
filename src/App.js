import React from "react";

import "./App.css";

import todos from "./todos";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav } from "react-bootstrap";

import {
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering,
  SearchState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  TableFilterRow,
  Toolbar,
  SearchPanel
} from "@devexpress/dx-react-grid-bootstrap4";

const HomeView = () => <h1>Home</h1>;

const GridView = () => (
  <div className="card">
    <Grid
      rows={todos}
      columns={[
        { name: "id", title: "ID" },
        { name: "title", title: "Title" },
        { name: "completed", title: "Completed" }
      ]}
    >
      <PagingState defaultPageSize={10} />
      <SortingState />
      <FilteringState defaultFilters={[]} />
      <SearchState  />
      <IntegratedFiltering />
      <IntegratedPaging />
      <IntegratedSorting />
      <Table />
      <TableHeaderRow showSortingControls />
      <Toolbar />
        <SearchPanel />
      <TableFilterRow />
      <PagingPanel />
    </Grid>
  </div>
);
const App = () => (
  <Router>
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer exact={true} to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact={true} to="/grid">
            <Nav.Link>Grid</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/grid" component={GridView} />
    </div>
  </Router>
);

export default App;
