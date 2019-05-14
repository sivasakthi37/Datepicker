import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import { Button } from 'antd';
// import { Input } from 'antd';
// import moment from 'moment'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerOpen: false,
      selectedDate: null
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {

      document.addEventListener('click', this.handleClickOutside);
    
  }

  componentWillUnmount() {
    
    document.removeEventListener('click', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    console.log("node -->",node);
    
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.state.pickerOpen===true) {
      console.log('I am triggering unneceirelly')
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ pickerOpen: false });
      }

    }
   
  }
  

  togglePicker = () => {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  }

  handleChange = selectedDate => {
    this.setState({ selectedDate });
  }


  render() {
    const { pickerOpen
      // , selectedDate 
    } = this.state;
    return (
      <div ref={this.setWrapperRef}>

        <h1>DatePicker</h1>
        {/* <Input value={selectedDate && moment(selectedDate).format('YYYY-MM-DD')} /> */}
        <div 
        id="datesize"
        >
         {/* <div id="datePickerWrapper"> */}
          <DatePicker
           className="datepicker-component" 
           open={pickerOpen}
           onChange={this.handleChange}  />
          <Button onClick={this.togglePicker} >Date</Button>  
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default App;