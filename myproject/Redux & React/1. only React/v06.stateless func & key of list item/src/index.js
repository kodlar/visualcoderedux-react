import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Counter, {a,b} from './Components/counter'
import Counter from './Components/counter'
import Sum from './Components/sum'
import Bu from './Components/oylesinebuton'
import RandomImages from './Components/randomimages'
import LeagueTableWidget from './Components/leaguetable'
class Describe extends Component {
  constructor(props){
    super(props)
    console.log('describe içine gönderilen props:',props)
  }
  
  render(){
    console.log('Describe.render()')
    return(<div>
    <div style={{color:'red'}}>Describe: {this.props.describe}</div>
    </div>)
  }
}

class SetmeFree extends Component {
  render(){
    return(<div style={{color:'green'}}>Günün sözü: {this.props.word}</div>)
  }
}

class AnotherBrickInTheWall extends Component {
  render(){
    return(<div>
    Bilgi amaçlı oluşturulmuştur {this.props.bilgi}
    </div>)
  }
}

class Examples extends Component {
constructor(props){
      super(props)
      this.state = {describe : 'none', word:'Laf değin balkabağı, koy tabağa ye sabaha! :)', bilgi : 'bekleyin güncelleniyor....'};
      this.updateDescribe = this.updateDescribe.bind(this);
      this.updateGununSozu = this.updateGununSozu.bind(this);
      this.updateAnotherBrickInTheWall = this.updateAnotherBrickInTheWall.bind(this);
}

updateDescribe(describe){
    this.setState({ describe: describe})
  }

 updateGununSozu(word){
    this.setState({word:word})
  }
 
 updateAnotherBrickInTheWall(info){
  this.setState({bilgi:info})
 }

  render() {    
    // console.log(a);
    // console.log(b);
    console.log('Examples.render()');      
    return (
    <div>
      <h1>React</h1>
       <Describe describe={this.state.describe} />
       <SetmeFree word={this.state.word} />
       <AnotherBrickInTheWall bilgi={this.state.bilgi} />
       <Bu updateGununSozu={this.updateGununSozu} updateAnotherBrickInTheWall={this.updateAnotherBrickInTheWall}/>
       <Counter updateDescribe={this.updateDescribe}/>
      <Sum updateDescribe={this.updateDescribe} />
     <RandomImages />
     <LeagueTableWidget />
      <p />
    </div>    
    )
  }
}

ReactDOM.render(<Examples/>, document.getElementById('root'))

