import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>About Us</h5>

				<p className="mt-4 text-white">Home/<span>About Us</span></p>

			</div>

		</div>

	  </div>

 </section>




 <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-6 my-auto">

				<h5 className="sub_heading">SINCE 1986</h5>

				<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

				<p className="my-4">At [Company], we turn walls into statements. Our gypsum services are designed to enhance the beauty, comfort, and character of every space, whether residential, commercial, or industrial.</p>
				<p className="my-4">We’re not just gypsumers; we’re detail-driven professionals who understand the impact a flawless finish can make. From the very first consultation to the final brushstroke, every project is handled with precision, care, and a commitment to excellence.</p>
				{/* <p className="my-4">Our approach combines advanced gypsum technologies with premium materials and expert craftsmanship. We don’t just apply gypsum, we prepare, protect, and perfect every surface to ensure results that are smooth, durable, and visually stunning.</p> */}
				{/* <p className="my-4">Clients choose us for our clean work ethic, honest communication, and ability to deliver consistently high-quality finishes, no matter the size or complexity of the job.</p> */}

				<div className="row mt-4">

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">Cutting-edge tools and application techniques</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">Up to 5 Years Warranty on select services</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">Custom color consultation and design support</div>

						</div>

					</div>

					<div className="col-md-6 mb-4">

						<div className="fea_point">

							<div className="fea_count"><img src="/images/tick.png"/></div>
							<div className="fea_label">Safe, low-odor, eco-conscious gypsum options</div>

						</div>

					</div>



				</div>


			</div>


			<div className="col-md-6 my-auto">

				<img src="/images/about.webp" className="w-100" style={{borderRadius: "30px" , height: "460px"}}/>

			</div>


		</div>

	  </div>

 </section>

         </>
  );
}
