import React from 'react';
import { Row, Button } from 'react-materialize';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideNav from '../common/SideNav/index.jsx';
import DisplayAllBooks from '../../container/booklist/DisplayAllBooks.jsx';
import getDashboardWrapper from '../../container/Dashboard.jsx';


/**
 *
 *
 * @class AdminDashboard
 * @extends {React.PureComponent}
 */
class AdminDashboard extends React.PureComponent {
  /**
   *
   *
   * @returns {Component} Component
   *
   * @memberOf AdminDashboard
   */
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <SideNav
            {...this.props}
          />
          <div className="main-text">
            <Tabs>
              <Row>
                <TabList>
                  <Tab>ALL BOOKS</Tab>
                  <Tab>USERS</Tab>
                  <Tab>CATEGORIES</Tab>
                </TabList>
              </Row>
              <Row>
                <TabPanel>
                  <DisplayAllBooks />
                  <Button floating large className='red' waves='light' icon='add' />
                </TabPanel>
                <TabPanel>
                  <p>Content here</p>
                </TabPanel>
              </Row>
            </Tabs>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}


const AdministratorDashboard = getDashboardWrapper(AdminDashboard);


export default AdministratorDashboard;
