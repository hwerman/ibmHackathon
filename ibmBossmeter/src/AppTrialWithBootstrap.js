// import React, { Component } from 'react';
// import './App.css';
// import data from './data/bosses.json';

// class App extends Component {
//   constructor(){
//     super();

//     this.state={
//       currentEmotions: {
//         anger: '',
//         joy: '',
//         disgust: ''
//       },
//       currentRatings: {
//         name: data.name,
//         rating: data.rating,
//         weeklyaverage: data.weeklyaverage
//     }
//   }
// }

//   render() {
//     return (
// <div className="App">
//   <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
//         <div className="container">
//             <div className="navbar-header page-scroll">
//                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//                     <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
//                 </button>
//                 <a className="navbar-brand" href="#page-top">bossmeter</a>
//             </div>

//             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                 <ul className="nav navbar-nav navbar-right">
//                     <li className="hidden">
//                         <a href="#page-top"></a>
//                     </li>
//                     <li className="page-scroll">
//                         <a href="#about">About</a>
//                     </li>
//                     <li className="page-scroll">
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>

//     <header>
//       <div className="footer-above">
//             <div className="container">
//                 <div className="row">
//                     <div className="footer-col col-md-5">
//                         <h1>Tim's Temperment</h1>
//                         <img src="img/portfolio/decentpenguin.png" className="img-responsive" alt=""></img>
//                     </div>

//                     <div className="footer-col col-md-2">
//                     <img src="img/portfolio/thermo.png" className="img-responsive" alt=""></img>
//                     </div>

//                     <div className="footer-col col-md-5">
//                         <h2>Tim Sucks</h2>
//                         <p>Tim is awful, he talks down to team members, he has a potty mouth and doesnt eat the crust on his pizza.
//                         <br></br>
//                         Tim's score was compiled by analyzing the tone and data from his teammate's conversations with him from Watson Workspaces.</p>
//                     </div>
//                 </div>
//             </div>
//       </div>
//     </header>

//     <section id="portfolio">
//       <div className="container">

//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <h2>How it works</h2>
//                     <hr className="star-primary"></hr>
//                 </div>
//             </div>

//         <div className="row">

//             <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/cabin.png" className="img-responsive" alt=""></img>
//                     </a>
//             </div>

//             <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/cake.png" className="img-responsive" alt=""></img>
//                     </a>
//               </div>

//               <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/circus.png" className="img-responsive" alt=""></img>
//                     </a>
//               </div>

//               <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/game.png" className="img-responsive" alt=""></img>
//                     </a>
//               </div>

//               <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/safe.png" className="img-responsive" alt=""></img>
//                     </a>
//               </div>

//                 <div className="col-sm-4 portfolio-item">
//                     <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
//                         <div className="caption">
//                             <div className="caption-content">
//                                 <i className="fa fa-search-plus fa-3x"></i>
//                             </div>
//                         </div>
//                         <img src="img/portfolio/submarine.png" className="img-responsive" alt=""></img>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section className="success" id="about">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <h2>About</h2>
//                     <hr className="star-light"></hr>
//                 </div>
//             </div>
//             <div className="row">
//               <p>Bossmeter analyzes and aggregates conversations people have and creates a thermometer that shows how people really feel about someone or a topic in real time.</p>
//             </div>
//                 <div className="col-lg-4">
//                     <p></p>
//                 </div>

//           </div>
//     </section>

//     <section id="contact">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <h2>Contact Us</h2>
//                     <hr className="star-primary"></hr>
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col-lg-8 col-lg-offset-2">
//                     <form name="sentMessage" id="contactForm" novalidate>
//                         <div className="row control-group">
//                             <div className="form-group col-xs-12 floating-label-form-group controls">
//                                 <label>Name</label>
//                                 <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."></input>
//                                 <p className="help-block text-danger"></p>
//                             </div>
//                         </div>
//                         <div className="row control-group">
//                             <div className="form-group col-xs-12 floating-label-form-group controls">
//                                 <label>Email Address</label>
//                                 <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."></input>
//                                 <p className="help-block text-danger"></p>
//                             </div>
//                         </div>
//                         <div className="row control-group">
//                             <div className="form-group col-xs-12 floating-label-form-group controls">
//                                 <label>Phone Number</label>
//                                 <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."></input>
//                                 <p className="help-block text-danger"></p>
//                             </div>
//                         </div>
//                         <div className="row control-group">
//                             <div className="form-group col-xs-12 floating-label-form-group controls">
//                                 <label>Message</label>
//                                 <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
//                                 <p className="help-block text-danger"></p>
//                             </div>
//                         </div>

//                         <br></br>
//                         <div id="success">
//                         </div>
//                         <div className="row">
//                             <div className="form-group col-xs-12">
//                                 <button type="submit" className="btn btn-success btn-lg">Send</button>
//                             </div>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>



//     <footer className="text-center">
//         <div className="footer-above">
//             <div className="container">
//                 <div className="row">
//                     <div className="footer-col col-md-4">
//                         <h3>Location</h3>
//                         <p>902 Broadway
//                             <br>New York, NY 10010</br>
//                         </p>
//                     </div>

//                     <div className="footer-col col-md-4">
//                         <h3>Around the Web</h3>
//                         <ul className="list-inline">
//                             <li>
//                                 <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
//                             </li>
//                             <li>
//                                 <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
//                             </li>
//                             <li>
//                                 <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
//                             </li>
//                         </ul>
//                     </div>

//                     <div className="footer-col col-md-4">
//                         <h3>WTF is Bossmeter?</h3>
//                         <p>Bossmeter is powered by IBM Watson and a product of this Hackathon</p>
//                     </div>

//                 </div>
//             </div>
//         </div>

//         <div className="footer-below">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         Copyright &copy; Bossmeter
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </footer>



//     <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
//         <a className="btn btn-primary" href="#page-top">
//             <i className="fa fa-chevron-up"></i>
//         </a>
//     </div>

//     <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/cabin.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/cake.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/circus.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/game.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/safe.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
//         <div className="modal-content">
//             <div className="close-modal" data-dismiss="modal">
//                 <div className="lr">
//                     <div className="rl">
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-8 col-lg-offset-2">
//                         <div className="modal-body">
//                             <h2>Project Title</h2>
//                             <hr className="star-primary"></hr>
//                             <img src="img/portfolio/submarine.png" className="img-responsive img-centered" alt=""></img>
//                             <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
//                             <ul className="list-inline item-details">
//                                 <li>Client:
//                                     <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
//                                     </strong>
//                                 </li>
//                                 <li>Date:
//                                     <strong><a href="http://startbootstrap.com">April 2014</a>
//                                     </strong>
//                                 </li>
//                                 <li>Service:
//                                     <strong><a href="http://startbootstrap.com">Web Development</a>
//                                     </strong>
//                                 </li>
//                             </ul>
//                             <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


//   )
//   }
// };

// export default App;
