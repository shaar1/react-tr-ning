const Dog = () => {
    return (
        <div>
        <h1>I Am A Dog {}</h1> 
        <h2>Woof Woof</h2>
     </div>  
    )
    
}

ReactDOM.render(<Dog/>, document.getElementById("root"))




const App = () => {
    return(
        <div>
            <RandomNum/>
            <RandomNum/>
            <RandomNum/>
            <Dog/>
        </div>
    )
}