const { Component } = require("react");

class homepage extends Component{
    render(){
        return(
            <div className="App">
      <header>
		<nav id="main-nav" class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					
					<a class="navbar-brand" href="#">
						<img src="images/small-logo.png" alt="Barbershop" />
					</a>
				
					
					
					<div class="navbar-toggle">
					</div>
					{/* <!-- Responsive Menu button Ends --> */}
				</div>
				
				<div id="responsive-menu"></div>
				
				{/* <!-- Navigation starts --> */}
				<div class="navbar-collapse collapse" id="navigation">
					<ul class="nav navbar-nav navbar-right main-navigation" id="main-menu">
						<li class="active"><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#service">Service</a></li>
						
						<li><a href="#gallery">Gallery</a></li>
						<li><a href="#pricing">Pricing</a></li>
            <li><a href="/login">Login</a></li>
						
					</ul>
				</div>
				{/* <!-- Navigation Ends --> */}
			</div>
		</nav>
	</header>
	{/* <!-- Header Section Ends--> */}
	
	{/* <!-- Banner Section Starts --> */}
	<section class="banner" id="home">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="header-banner">
						<img src="images/logo.png" alt="Logo" />
						<p>Discover Your Style & Beauty</p>
						<h3>Your new Perfect <br />Style & Design</h3>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-4">
					<div class="banner-info-single">
						<div class="icon-box"><i class="fa fa-clock-o"></i></div>
						<h3>Open Time</h3>
						<p>Monday – Friday: 09:00 – 22:00</p>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="banner-info-single">
						<div class="icon-box"><i class="fa fa-map-marker"></i></div>
						<h3>Our Location</h3>
						<p>100 Mainstreet Center, Sydney</p>
					</div>
				</div>
				
				<div class="col-md-4">
					<div class="banner-info-single">
						<div class="icon-box"><i class="fa fa-phone"></i></div>
						<h3>Book Now</h3>
						<p>+208 333 9296</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="banner-icon"><i class="flaticon-hair-salon-situation"></i></div>
	</section>
	{/* <!-- Banner Section Ends --> */}
	
	{/* <!-- About us section starts --> */}
	<section class="aboutus" id="about">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="main-title">
						<h2>About Barber Shop</h2>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<div class="about-image">
						<div class="about-img-single">
							<img src="images/about-1.jpg" alt="" />
						</div>
						
						<div class="about-img-single">
							<img src="images/about-2.jpg" alt="" />
						</div>
						
						<div class="about-img-single">
							<img src="images/about-3.jpg" alt="" />
						</div>
					</div>
					
					<div class="about-desc">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- About us section ends --> */}
	
	{/* <!-- Services section starts --> */}
	<section class="service" id="service">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="main-title">
						<h2>Services</h2>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<div class="service-single">
						<div class="icon-box-outer">
							<div class="icon-box">
								<i class="flaticon-shaver"></i>
							</div>
						</div>
						
						<h3>Beard Trim</h3>
						<p>Lior sit amet, consectetur adipisg elit,sed do eiusmod tempor incdunt ut</p>
						<h5>Time : 30 Min</h5>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-6">
					<div class="service-single">
						<div class="icon-box-outer">
							<div class="icon-box">
								<i class="flaticon-razor"></i>
							</div>
						</div>
						
						<h3>Moustache Trim</h3>
						<p>Lior sit amet, consectetur adipisg elit,sed do eiusmod tempor incdunt ut</p>
						<h5>Time : 30 Min</h5>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-6">
					<div class="service-single">
						<div class="icon-box-outer">
							<div class="icon-box">
								<i class="flaticon-scissors"></i>
							</div>
						</div>
						
						<h3>Clipper Cut</h3>
						<p>Lior sit amet, consectetur adipisg elit,sed do eiusmod tempor incdunt ut</p>
						<h5>Time : 30 Min</h5>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-6">
					<div class="service-single">
						<div class="icon-box-outer">
							<div class="icon-box">
								<i class="flaticon-brush"></i>
							</div>
						</div>
						
						<h3>Facial / Massage</h3>
						<p>Lior sit amet, consectetur adipisg elit,sed do eiusmod tempor incdunt ut</p>
						<h5>Time : 30 Min</h5>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Services section ends --> */}
	

	
	{/* <!-- Photo Gallery section starts --> */}
	<section class="gallery" id="gallery">
		<div class="container-fluid">
			<div class="row no-pad">
				<div class="col-md-12">
					<div class="main-title">
						<h2>Our Works</h2>
					</div>
				</div>
			</div>
			
			<div class="row no-pad">
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-1.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 1</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-2.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 2</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-3.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 3</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-4.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 4</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-5.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 5</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-6.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 6</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-7.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 7</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-md-3 col-sm-4 col-xs-6">
					<div class="gallery-box">
						<figure>
							<img src="images/gallery-8.jpg" alt="" />
						</figure>
						
						<div class="gallery-overlay">
							<div class="gallery-info">
								<p>Hair Style 8</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Photo Gallery section ends --> */}
	
	{/* <!-- Pricing Section starts --> */}
	<div class="pricing" id="pricing">
		<div class="container">
			<div class="row no-pad">
				<div class="col-md-6">
					<div class="store-image">
						<img src="images/store.jpg" alt="" />
					</div>
				</div>
				
				<div class="col-md-6">
					<div class="pricing-logo">
						<img src="images/logo.png" alt="" />
					</div>
					
					<div class="price-list">
						<div class="price-item">Hair Cut</div>
						<div class="price-line"></div>
						<div class="price-amount">$50</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Beard Trim</div>
						<div class="price-line"></div>
						<div class="price-amount">$24</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Flat Top</div>
						<div class="price-line"></div>
						<div class="price-amount">$64</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Hairstyle</div>
						<div class="price-line"></div>
						<div class="price-amount">$48</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Hot Shave</div>
						<div class="price-line"></div>
						<div class="price-amount">$18</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Outline</div>
						<div class="price-line"></div>
						<div class="price-amount">$35</div>
					</div>
					
					<div class="price-list">
						<div class="price-item">Line Up</div>
						<div class="price-line"></div>
						<div class="price-amount">$30</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Pricing Section ends --> */}
		

	
	
	
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="footer-social">
						<a href="#">Facebook</a>
						<a href="#">Twitter</a>
						<a href="#">Instagram</a>
						<a href="#">Pinterest</a>
						<a href="#">Googleplus</a>
						<a href="#">Linkedin</a>
					</div>
					
					
					
					<div class="footer-menu">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Team</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Pricing</a></li>
							<li><a href="#">Testimonial</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>

        )
    }
}
export default homepage;