import React, { Component } from 'react';

export default class Fetch extends React.Component {


 componentWillReceiveProps(nextProps: props) {
    fetch('https://api.themoviedb.org/3/search/company?api_key=def6a8b00cc6fc7b3f0c91f8e4bd4e9c&query=' + this.props.props + '&page=1').then((response) => {
          return response.json();
        }).then((obj) => {
          console.log(obj);
    })
   }
}