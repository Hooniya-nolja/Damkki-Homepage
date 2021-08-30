// import React from 'react';
// import ReactDOM from 'react-dom';
// import RestaurantGuide from './RestaurantGuide';


// ReactDOM.render(
//     <React.StrictMode>
//         <div>aaaaaaaaaa</div>
//         <div>aaaaaaaaaa</div>
//         <div>aaaaaaaaaa</div>
//         <RestaurantGuide />
//     </React.StrictMode>,
//     document.getElementById('restaurantGuideContainer')
// );


// const domContainer = document.querySelector('#restaurantGuideContainer');
// ReactDOM.render(e(LikeButton), domContainer);


import RestaurantGuide from './RestaurantGuide.js';


// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//         <button type="submit" onClick={() => 
//             { this.setState({ liked : true }) }}> { this.state.liked === true ? 'Liked' : 'Like' }
//         </button>
//     );
//   }
// }

function LikeButton() {
    return (
        <div>
            <RestaurantGuide />
        </div>
    );
}

ReactDOM.render(<LikeButton />, document.querySelector('#restaurantGuideContainer'));







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