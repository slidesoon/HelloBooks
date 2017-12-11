import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Icon, Col } from 'react-materialize';
import { addNewCategory } from '../../../actions/admin/addCategory';
import { validateCategoryInput } from '../../../validators/validator';

/**
 * handles the state of the Loan history table
 * @class LoanHistory
 * @extends {React.Component}
 */
class AddCategory extends React.Component {
  /**
   * Creates an instance of AddCategoryButton.
   * @param {object} props
   * @memberof AddCategoryButton
   */
  constructor(props) {
    super(props);

    this.state = {
      categoryName: '',
      errors: {}
    };
    this.handleClick = this
      .handleClick
      .bind(this);
    this.onChange = this
      .onChange
      .bind(this);
  }
  /**
 *
 *
 * @param {any} nextProps
 * @memberof AddCategory

 *
 *
 * @param {any} nextProps
 *
 * @memberOf AddCategory
 */
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, '=========nextProps=======');
  }

  /**
   *
   *
   * @param {any} event
   * @memberof AddCategory

   *
   *
   * @param {any} event
   *
   * @memberOf AddCategory
   */
  onChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Handle onChange events on form inputs
   * @method isValid
   * @memberof SignIn
   * @returns {function} a validation function and returns errors in string format
   */
  isValid() {
    const { errors, isValid } = validateCategoryInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    } else {
      return isValid;
    }
  }

  /**
   *
   *
   * @memberof AddCategory

   *
   *
   *
   * @memberOf AddCategory
   */
  handleClick() {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      this
        .props
        .addNewCategory(this.state);
      this.setState({ categoryName: '' });
    }
  }

  /**
   * render Loan History component
   * @method render
   * @member loanHistory
   * @returns {object} component
   */
  render() {
    return (
      <div>
        <Input
          s={6}
          l={4}
          label="Add Category"
          required
          value={this.state.categoryName}
          name="categoryName"
          onChange={this.onChange}
          error={this.state.errors.categoryName}
        >
          <Icon>book</Icon>
        </Input>
        <Col s={6} l={3}>
          <Button className="add-category-btn" onClick={() => this.handleClick()}>
            Add Category
          </Button>
        </Col>
      </div>
    );
  }
}

export default connect(null, { addNewCategory })(AddCategory);
