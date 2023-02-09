import React from 'react'

class ClassComponent extends React.Component<{name:string}>{
    constructor(props: any){
        super(props);
        console.log('constructor reached')
    }
    
    state ={
        name:'Mundo'
    }

    componentDidMount(): void {
        console.log('did mount reached')
    }

    componentDidUpdate(prevProps: Readonly<{ name: string; }>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('did updated reached')
    }

    render(){
        console.log('render reached')
     return <div>
        <p>name: {this.state.name}</p>
        <button onClick={() =>{
            this.setState({ name: 'Joao'})
        }}>Click me</button>
     </div>
    }
}

export default ClassComponent;