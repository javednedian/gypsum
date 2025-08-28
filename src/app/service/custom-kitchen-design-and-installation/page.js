import Image from "next/image";
import Link from "next/link";

export default function customKitchenDesignAndInstallation() {
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
	background-image: url('../images/Bathtub to Shower Conversion.jpg') !important;
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

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Custom Kitchen Design & Installation</h5>

				<p className="mt-4 text-white">Home/<span>Custom Kitchen Design & Installation</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Custom Kitchen Design & Installation</h2>
				<h4 className="sub_heading">1.Designed Around Your Lifestyle and Space</h4>

				<p className="my-4">A kitchen is more than just a room, it's the heart of the home, the hub of family life, and often the place where memories are made. That’s why custom kitchen design and installation isn’t about cookie-cutter solutions; it’s about creating a space that fits seamlessly into your lifestyle, your aesthetic preferences, and your functional needs. Whether you're a seasoned home chef or someone who simply loves to gather with family and friends around the kitchen island, a thoughtfully designed custom kitchen brings your vision to life with precision and personality.</p>
    <p className="my-4">At [Company], every design starts with you. We take the time to understand how you use your kitchen, what appliances matter most to you, the type of storage you need, and the style that speaks to you, whether that's modern minimalist, classic elegance, rustic charm, or a blend that's uniquely yours. Our experienced kitchen designers collaborate closely with you, using advanced tools and visualization techniques to map out layouts, material selections, color schemes, cabinetry, lighting, and ergonomic flow. The result is a personalized kitchen design that’s not just beautiful, but intelligently built to serve you.
</p>
			</div>
	    <div className="col-md-6 my-auto">

				<img  src="/images/custom.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>
                
			</div>
    </div>


    <h4 className="sub_heading">2.Expert Craftsmanship Meets Seamless Installation</h4>

    <p className="my-4">Designing your dream kitchen is only half the journey. The real magic happens during installation, where ideas take physical form with precision and attention to detail. [Company] brings together a team of highly skilled installers, carpenters, electricians, plumbers, and project managers who work together to ensure a flawless execution. Every tile, every hinge, every countertop is installed with craftsmanship and care.</p>
    <p className="my-4">We understand that home renovations, especially in a space as essential as the kitchen can be stressful. That’s why our process is designed to be as smooth and non-disruptive as possible. We coordinate all trades, manage timelines, and adhere to industry standards and safety regulations. Our team works efficiently to minimize downtime while maintaining the highest quality standards, ensuring you receive not just a stunning new kitchen, but peace of mind throughout the entire process.
</p>
    {/* <p className="my-4">Clients often find that switching to a shower also makes cleaning quicker and easier. With fewer nooks and crannies than a traditional tub, and options for low-maintenance materials like acrylic panels or large-format tiles, your new shower can stay sparkling clean with minimal effort.</p> */}

    <h4 className="sub_heading">3.High-Quality Materials and Bespoke Finishes</h4>
    <p className="my-4">A truly custom kitchen deserves only the best. That’s why [Company] partners with trusted suppliers and artisans to offer a wide range of premium materials that balance durability with elegance. From hand-crafted cabinetry to natural stone countertops, soft-close drawers to under-cabinet lighting, and luxury fixtures to eco-friendly flooring, every element is carefully chosen to elevate your space both aesthetically and functionally.</p>
    <p className="my-4">But customization goes beyond materials, it’s also in the little things that make your kitchen feel truly yours. Need extra-deep drawers for your pots and pans? Want built-in spice racks, smart lighting, or hidden charging stations? Whether you’re optimizing for space, storage, or smart home integration, we tailor every aspect to align with your lifestyle.</p>
    {/* <p className="my-4">Throughout the process, transparency is key. You’ll always know what to expect, with regular updates, clear timelines, and professional guidance every step of the way. And when the work is complete, you’ll be left with a bathroom that not only looks incredible but feels like it was made just for you.</p> */}
    
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img  src="/images/arrow.png"/></span></button></Link>


					</div>
</section>
   </>
  );
}