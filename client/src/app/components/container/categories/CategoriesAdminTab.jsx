import React from 'react';
import { Collapsible, CollapsibleItem, Col, Row } from 'react-materialize';
import CategoryCollectionList from './CategoriesCollectionList.jsx';
import AddCategory from './AddCategory.jsx';


/**
 * @class CategoriesAdmin
 * @extends {React.Component}
 */
const CategoriesAdminTab = () => (
  /**
   * Creates an instance of CategoriesAdmin.
   * @param {object} props
   * @memberof CategoriesAdmin
   */
  <div className="accordion-category">

    <Col s={10} m={12} l={10}>
      <Row>
        <Col m={6} l={8}>
          <h4>List of All Categories </h4>
          <CategoryCollectionList />
        </Col>
        <AddCategory />
      </Row>

    </Col>

  </div>
);


export default CategoriesAdminTab;
