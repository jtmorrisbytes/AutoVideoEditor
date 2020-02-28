import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.silentSpeed = {
      default:1,
      min:1,
      max:9999
    };
    this.soundedSpeed ={
      default:1,
      min:1,
      max:9999
    }
    this.frameRate = {
      default:0,
      min:1,
      max:9999
    }
    this.frameMargin = {
      default:0,
      min:0,
      max:9999
    }
    this.state = {
      silentSpeed:this.silentSpeed.default,
      soundedSpeed:this.soundedSpeed.default,
      jumpcut:false,
      frameRate:this.frameRate.default,
      frameMargin:this.frameMargin.default,
    }
    this.toggleJumpCut = this.toggleJumpCut.bind(this);
  }

  toggleJumpCut(){
    this.setState({...this.state, jumpcut: !this.state.jumpcut})
  }
  render() {
    return (
    <form method="POST" action="api/video" enctype="multipart/form-data">
        <input type="file" accept="video/*" name="upload-file"/> <br />
        <input id='enable-jumpcut'type='checkbox' name='enableJumpcut' onChange={this.toggleJumpCut} checked={this.state.jumpcut}/>
        <label for='enable-jumpcut'>Jumpcut Video?</label>
        {
          this.state.jumpcut?
          (<div id='jumpcut-options-container'>
            <input id='silent-speed' className="silent-speed" name='silentSpeed' type="number"
             min={this.silentSpeed.min} max={this.silentSpeed.max} value={this.state.silentSpeed} required />
            <label for="silent-speed">Silent Speed</label>
            <br />
            <input id='sounded-speed' className="silent-speed" name='soundedSpeed' type="number" 
            min={this.silentSpeed.min} max={this.silentSpeed.max} value={this.state.silentSpeed} required />
            <label for="sounded-speed">Sounded Speed</label>
            <br />
            <input id="frame-rate" type="number"  name="frameRate" min="1" max="999" required />
            <label for="frame-rate">Frame Rate</label>
            <br />
            <input id='frame-margin' type="number" name="frameMargin" min="0" max="9999"  value="0" required />
            <label for='frame-margin'>Frame Margin</label>
        </div>):null
        }
        
        <button type="submit">upload video</button>
        </form>
    );
  }
}
export default App;
