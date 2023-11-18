import React from "react";
import './App.css';
import axios from "axios";

class App extends React.Component{
   
    state= {advice: ''}; // initial state 

    componentDidMount(){
     this.fetchAdvice(); // bileşen olusturuldugunda tavsiye cekme islemi gerceklesecek
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice') // make a request to the api
        .then((response)=> {
            const {advice} = response.data.slip; // api yanıtından tasviye metnini al
            this.setState({advice}); // state'i güncelle
        })
        .catch((error)=>{
             console.log(error); // hata varsa konsola yazdır
        })
     }
   
    render(){
         const {advice} = this.state; // state'i destruct et

        return(
               <div className="app">
                   <div className="card">
                          <h1 className="heading">{advice}</h1>
                          <button className="button" onClick={this.fetchAdvice}>
                            <span>Give Me Advice!</span>
                          </button>     
               </div>
                </div>
            );
    }
}

export default App;