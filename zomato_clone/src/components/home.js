import React from 'react';
import axios from 'axios';

import Wallpaper from './wallpaper';
import Quick from './quick';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            locations:[],
            mealtypes:[]
        }
    }
    componentDidMount(){
        sessionStorage.clear();
        axios({
            url: 'https://expressbasiccode.onrender.com/locations',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(respone => {
                this.setState({ locations: respone.data.locations })
            })
            .catch()

            axios({
                url:'https://expressbasiccode.onrender.com/mealtype',
                method:'GET',
                headers:{'Content-Type':'application/json'}
            })
            .then(response =>{
                this.setState({mealtypes: response.data.mealtypes})
            })
            .catch()
    }
   
    render(){
        const {locations,mealtypes} = this.state;
        return(
            <div>
                <Wallpaper locationsData={locations}/>
                <Quick mealtypesData={mealtypes}/>

            </div>
        )
    }
}
export default Home;