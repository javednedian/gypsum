import Image from "next/image";

export default function Services() {
  return (
    <>

<section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Services</h5>

				<p className="mt-4 text-white">Home/<span>Services</span></p>

			</div>

		</div>

	  </div>

 </section>



 <section className="key_sec py-4" style={{backgroundColor: "#403226"}}>

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-12 mb-5 text-center">

				<h5 className="sub_heading">Our Services</h5>

				<h2 className="main_heading mb-2" style={{color: "#ffffff"}}>What we offer for you</h2>

			</div>

            <div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_img">

							<img  src="/images/kitchenBacksplash.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Gypsum Ceiling Works</div>

					</div>

					<hr className="my-4"></hr>

					<p>Expertly crafted gypsum ceilings that enhance both style and function in any space.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="/images/arrow.png"/></span> */}

				</div>

			</div>

            <div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_img">

							<img  src="/images/Countertops.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Partition & Drywall Installation</div>

					</div>

					<hr className="my-4"></hr>

					<p>Customized drywall and partition solutions for efficient and flexible space planning.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="/images/arrow.png"/></span> */}

				</div>

			</div>

            <div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_img">

                    <img  src="/images/custom.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Gypsum Wall Cladding & Panelling</div>

					</div>

					<hr className="my-4"></hr>

					<p>Elegant wall treatments that add texture, depth, and character to your interiors.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="/images/arrow.png"/></span> */}

				</div>

			</div>

			<div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_img">

                     <img  src="/images/smart.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Cornices, Mouldings & Decorative Works</div>

					</div>

					<hr className="my-4"></hr>

					<p>Detailed decorative elements that bring sophistication and charm to every room.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="/images/arrow.png"style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}</span> */}

				</div>

			</div>

			<div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_img">

                     <img  src="images/appliances.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Gypsum Painting & Finishing</div>

					</div>

					<hr className="my-4"></hr>

					<p>Smooth, flawless finishes with professional painting for a polished final touch.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="images/arrow.png"/></span> */}

				</div>

			</div>

			<div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_Image">

					 <img  src="images/Cabinets.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Repairs & Renovation</div>

					</div>

					<hr className="my-4"></hr>

					<p>Reliable repair and renovation services to restore and refresh your gypsum interiors.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="images/arrow.png"/></span> */}

				</div>

			</div>

			<div className="col-md-4 mb-4">

				<div className="service_box pt-3 pb-4">

					<div className="key_box2" style={{textAlign: "left"}}>

						<div className="service_Image">

                     <img  src="images/light.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

						</div>

						{/* <h6>01</h6> */}
						<div className="icon_label">Turnkey Interior Gypsum Solutions </div>

					</div>

					<hr className="my-4"></hr>

					<p>End-to-end gypsum interior solutions, delivered with precision and quality craftsmanship.</p>

					{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#403226"}}><img  src="images/arrow.png"/></span> */}

				</div>

			</div>



		</div>

	</div>

 </section>
         </>
  );
}
