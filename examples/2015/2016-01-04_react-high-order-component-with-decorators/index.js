// https://babeljs.io/repl/#?experimental=true&evaluate=false&loose=false&spec=false&code=%2F%2F%20decorator%0D%0Aconst%20color%20%3D%20(bgColor%2C%20color)%20%3D%3E%20%7B%0D%0A%20%20const%20style%20%3D%20%7B%0D%0A%20%20%20%20backgroundColor%3A%20bgColor%2C%0D%0A%20%20%20%20color%3A%20color%0D%0A%20%20%7D%3B%0D%0A%20%20%0D%0A%20%20return%20(ComposedComponent)%20%3D%3E%20%7B%0D%0A%20%20%20%20return%20class%20extends%20React.Component%20%7B%0D%0A%20%20%20%20%20%20constructor()%20%7B%0D%0A%20%20%20%20%20%20%09super()%3B%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20render()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20%3Cdiv%20style%3D%7Bstyle%7D%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3CComposedComponent%20%7B...this.props%7D%3E%3C%2FComposedComponent%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%20%20%0D%0A%7D%0D%0A%0D%0A%40color('white'%2C%20'black')%0D%0Aclass%20DecoratedComponent%20extends%20React.Component%20%7B%0D%0A%20%20render()%20%7B%0D%0A%20%20%20%20return%20%3Cdiv%3EDecoratedComponent%3C%2Fdiv%3E%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0A%40color('white'%2C%20'blue')%0D%0Aclass%20DecoratedAnotherComponent%20extends%20React.Component%20%7B%0D%0A%20%20render()%20%7B%0D%0A%20%20%20%20return%20%3Cdiv%3EDecoratedAnotherComponent%3C%2Fdiv%3E%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0A%2F*ReactDOM.render(%3Cdiv%3E%0D%0A%20%20%3CDecoratedComponent%20%2F%3E%3CDecoratedAnotherComponent%20%2F%3E%3C%2Fdiv%3E%2C%0D%0A%20%20document.getElementById('container')%0D%0A)%3B*%2F%0D%0A%0D%0A%2F%2F%20no%20decorator%20%0D%0Aconst%20styleEnhancer%20%3D%20(ComposedComponent%2C%20color%2C%20bgColor)%20%3D%3E%20%7B%0D%0A%20%20const%20style%20%3D%20%7B%0D%0A%20%20%20%20backgroundColor%3A%20bgColor%2C%0D%0A%20%20%20%20color%3A%20color%0D%0A%20%20%7D%3B%0D%0A%20%20%0D%0A%20%20return%20class%20extends%20React.Component%20%7B%0D%0A%20%20%20%20constructor()%20%7B%0D%0A%20%20%20%20%20%20super()%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20render()%20%7B%0D%0A%20%20%20%20%20%20return%20%3Cdiv%20style%3D%7Bstyle%7D%3E%0D%0A%20%20%20%20%20%20%20%20%3CComposedComponent%20%7B...this.props%7D%3E%3C%2FComposedComponent%3E%0D%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20Component%20extends%20React.Component%20%7B%0D%0A%20%20render()%20%7B%0D%0A%20%20%20%20return%20%3Cdiv%3EComponent%3C%2Fdiv%3E%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20AnotherComponent%20extends%20React.Component%20%7B%0D%0A%20%20render()%20%7B%0D%0A%20%20%20%20return%20%3Cdiv%3EAnotherComp%3C%2Fdiv%3E%0D%0A%20%20%7D%0D%0A%7D%0D%0A%0D%0Aconst%20EnhancedComponent%20%3D%20styleEnhancer(Component%2C%20'white'%2C%20'black')%3B%0D%0Aconst%20EnhancedAnotherComponent%20%3D%20styleEnhancer(AnotherComponent%2C%20'white'%2C%20'blue')%3B%0D%0A%0D%0AReactDOM.render(%3Cdiv%3E%0D%0A%20%20%3CEnhancedComponent%20%2F%3E%3CEnhancedAnotherComponent%20%2F%3E%3C%2Fdiv%3E%2C%0D%0A%20%20document.getElementById('container')%0D%0A)%3B

// decorator
const color = (bgColor, color) => {
  const style = {
    backgroundColor: bgColor,
    color: color
  };

  return (ComposedComponent) => {
    return class extends React.Component {
      constructor() {
      	super();
      }
      render() {
        return <div style={style}>
          <ComposedComponent {...this.props}></ComposedComponent>
        </div>
      }
    }
  }
}

@color('white', 'black')
class DecoratedComponent extends React.Component {
  render() {
    return <div>DecoratedComponent</div>
  }
}

@color('white', 'blue')
class DecoratedAnotherComponent extends React.Component {
  render() {
    return <div>DecoratedAnotherComponent</div>
  }
}

/*ReactDOM.render(<div>
  <DecoratedComponent /><DecoratedAnotherComponent /></div>,
  document.getElementById('container')
);*/

// no decorator
const styleEnhancer = (ComposedComponent, color, bgColor) => {
  const style = {
    backgroundColor: bgColor,
    color: color
  };

  return class extends React.Component {
    constructor() {
      super();
    }
    render() {
      return <div style={style}>
        <ComposedComponent {...this.props}></ComposedComponent>
      </div>
    }
  }
}

class Component extends React.Component {
  render() {
    return <div>Component</div>
  }
}

class AnotherComponent extends React.Component {
  render() {
    return <div>AnotherComp</div>
  }
}

const EnhancedComponent = styleEnhancer(Component, 'white', 'black');
const EnhancedAnotherComponent = styleEnhancer(AnotherComponent, 'white', 'blue');

ReactDOM.render(<div>
  <EnhancedComponent /><EnhancedAnotherComponent /></div>,
  document.getElementById('container')
);