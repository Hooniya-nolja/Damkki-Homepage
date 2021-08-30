import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantGuide from './RestaurantGuide';


ReactDOM.render(
    <React.StrictMode>
        <RestaurantGuide />
    </React.StrictMode>,
    document.getElementById('restaurantGuideContainer')
);


// const domContainer = document.querySelector('#restaurantGuideContainer');
// ReactDOM.render(e(LikeButton), domContainer);











// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#restaurantGuideContainer');
// ReactDOM.render(e(LikeButton), domContainer);