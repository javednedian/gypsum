import Image from "next/image";
import Link from "next/link";

export default function smartKitchenSolutions() {
  return (
    <>
    
{/* <style jsx>{`

.form_box{
	background-color: #f5f5f5;
	padding: 45px 45px;
}

.form-control{
	margin-bottom: 20px;
    font-size: 14px;
    line-height: normal;
    padding: 10px 20px;
    font-weight: normal;
    border-width: 0 0 1px 0;
    font-family: inherit;
    background-color: transparent;
    border-radius: 10px;
    border: unset;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    background-color: #ffffff;
	font-family: 'Outfit', sans-serif;
}

.field{
	height: 50px;
}

.error{
	color: red;
	font-size: 14px;
}

.bread_title{
	background-image: url('../images/Waterproofing & Tiling.jpg') !important;
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
	background-blend-mode: color;
    background-color: #0000005e;
}

`}
</style> */}

<section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Smart Kitchen Solutions</h5>

				<p className="mt-4 text-white">Home/<span>Smart Kitchen Solutions</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Smart Kitchen Solutions</h2>
				<h4 className="sub_heading">1.Welcome to the Future of Cooking and Living</h4>

				<p className="my-4">The kitchen is no longer just a place to cook, it’s a dynamic, connected space where innovation meets daily life. With smart kitchen solutions, you can now control, monitor, and optimize every aspect of your kitchen experience with the touch of a button or the sound of your voice. Whether it’s syncing appliances to your phone, automating lighting and climate, or integrating AI for energy efficiency, [Company] brings the future of cooking and convenience into your home, today.</p>
    <p className="my-4">Our Smart Kitchen Solutions are designed to make your life easier, more efficient, and more enjoyable. From voice-activated assistants that help you follow recipes hands-free, to smart fridges that manage your grocery list, to ovens you can preheat on your way home, we offer a curated range of technology-forward upgrades that blend seamlessly into your space without disrupting your style or comfort.
</p>

<h4 className="sub_heading">2.Integrated Technology, Tailored to Your Lifestyle</h4>

    <p className="my-4">At [Company], we don’t believe in one-size-fits-all solutions. We design Smart Kitchen Solutions that are customized to suit the way you cook, live, and entertain. Whether you want a fully automated ecosystem or a few smart additions to modernize your current setup, we guide you every step of the way.</p>

			</div>
	    <div className="col-md-6 my-auto">

				<img src="/images/smart.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>
                
			</div>
    </div>


        <p className="my-4">Our smart kitchen solutions include:
</p>

<ul>
  <li>•	Wi-Fi enabled appliances (ovens, fridges, dishwashers, coffee machines)</li>
  <li>•	Voice-controlled systems (Google Assistant, Amazon Alexa, Apple HomeKit integration)</li>
  <li>•	Smart lighting & dimmers controlled by phone or schedule</li>
  <li>•	Touchless faucets and motion-sensor lighting</li>
  <li>•	Smart plugs & energy-saving outlets</li>
  <li>•	Under-cabinet smart LED strips that respond to motion or voice commands</li>
  <li>•	Smart cooking hubs with recipe databases and cooking guidance</li>
  <li>•	Automated climate control for air circulation and comfort</li>

</ul>
    <p className="my-4">Every component is carefully integrated into the layout and functionality of your Smart Kitchen Design. We also provide smart zoning, allowing you to create cooking, prepping, and entertaining zones, each with custom lighting, device controls, and automation features tailored to your preferences.</p>

    <h4 className="sub_heading">3.Seamless Setup, Reliable Support, Future-Ready Design</h4>
    <p className="my-4">Installing a Smart Kitchen Design isn’t just about tech, it’s about blending innovation with lifestyle. Our experienced designers, technicians, and electricians work together to ensure every device, outlet, sensor, Wi Fi Enabled Kitchen Appliances and connection is expertly installed and ready to work harmoniously. We handle everything from configuration and syncing to user training, ensuring that your Smart Kitchen Services doesn’t just look futuristic, it feels intuitive and empowering from day one.</p>
    <p className="my-4">We also ensure that all systems are secure, update-friendly, and expandable, meaning your kitchen won’t be left behind as new technology emerges. You can start with a few connected appliances today and upgrade gradually, knowing your foundation is solid, future-proof, and scalable.</p>
    <p className="my-4">With [Company], Smart Kitchen Services are more than gadgets, they’re a step into a more intelligent, responsive, and beautifully designed way of living. It’s time to cook smarter, live better, and enjoy a kitchen that keeps up with your lifestyle.</p>
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img src="/images/arrow.png"/></span></button></Link>


					</div>
</section>

</>
  );
}