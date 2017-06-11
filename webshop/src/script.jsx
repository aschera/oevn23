const { createStore, bindActionCreators, applyMiddleware,combineReducers } = Redux;
const { Provider, connect } = ReactRedux;
const thunk = window.ReduxThunk.default;


const first_redux =function(state =[] ,action){
  switch (action.type){
    case 'ADD_ITEM':
     return [
        ...state,
        action.payload
      ];
      case 'DELETE_ITEM':
      var index = state.indexOf(action.payload);
      var newItems = state.slice()
      newItems.splice(index,1)
     return newItems
    default :
    return state

  }
}

const actions ={
 addItem :function(item){
  return {
    type :"ADD_ITEM",
    payload :item
  }
 } ,
 deleteItem :function(item){
  return {
    type :"DELETE_ITEM",
    payload :item
  }
 }

}
var combindReducer = combineReducers({
  item:first_redux
})

const store = createStore(combindReducer);

class First extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      names :[],
      username :''
    }
   this.changeEv =this.changeEv.bind(this);
   this.addName =this.addName.bind(this);
   this.handle =this.handle.bind(this);

  }
  changeEv(e){
    this.setState({
      username : e.target.value
    })
  }
  addName(){
    if(this.state.username !== ''){
    this.props.add(this.state.username)
     this.setState({
      username : ''
    })
    }
  }
  handle(item){
    this.props.del(item)
  }

  render() {
    const data =[{"name":"test1"},{"name":"test2"}];
    var listItems = this.props.names.map((d, idx) => {
      return (<li key={idx}><span>{d}</span><button onClick={()=>this.handle(d)}>delete</button></li>)
    })
    return (
      <div>
      <input type="text" onChange ={this.changeEv} value={this.state.username}/>
      <button onClick={this.addName}>add</button>
      {listItems}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('=================');
  console.log(state);
  return {
       names: state.item,

  };
    console.log(this.state);

}

function mapDispatchToProps(dispatch){
  return {
    add: bindActionCreators(actions.addItem,dispatch),
    del: bindActionCreators(actions.deleteItem,dispatch)
  }
}
const Appcontainer =connect(mapStateToProps,mapDispatchToProps)(First)

ReactDOM.render(
  <Provider store ={store}>
    <Appcontainer/>
    </Provider>
  ,document.getElementById('root2'));
