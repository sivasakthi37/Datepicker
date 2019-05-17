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
   
  }

  

  togglePicker = () => {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  }

  handleChange = selectedDate => {
    this.setState({ selectedDate });
  }
  callbackevent = (status) => {
    console.log("status in callback", status);
    this.setState({ pickerOpen: status })
  }

  render() {
    const { pickerOpen
      // , selectedDate 
    } = this.state;
    return (
      <div >

        <h1>DatePicker</h1>
        {/* <Input value={selectedDate && moment(selectedDate).format('YYYY-MM-DD')} /> */}
        <div
          id="datesize"
        >
          {/* <div id="datePickerWrapper"> */}
          <DatePicker
            className="datepicker-component"
            open={pickerOpen}
            onChange={this.handleChange}
            // onOpenChange={(status) => { this.setState({ pickerOpen: status }) }}
            onOpenChange={(status) => { this.callbackevent(status) }}
          />
          <Button onClick={this.togglePicker} >Date</Button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default App;