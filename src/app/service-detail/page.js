import Image from "next/image";

export default function serviceDetail() {
  return (
    <>
      <section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Service Name Here</h5>

				<p className="mt-4 text-white">Home  <span>Service Name Here</span></p>

			</div>

		</div>

	  </div>

 </section>




 <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-6 my-auto">


				<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

			</div>


			<div className="col-md-6 my-auto">

				<img src="/images/about.jpg" className="w-100" style={{borderRadius: "30px"}}/>

			</div>


		</div>

	  </div>

 </section>


<section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-6 my-auto">

				<img src="/images/about.jpg" className="w-100" style={{borderRadius: "30px"}}/>

			</div>

			<div className="col-md-6 my-auto">


				<h2 className="main_heading mt-sm-0 mt-4">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

			</div>


		</div>

	  </div>

 </section>



  <section className="feature_sec py-4">

	  <div className="container mb-2">

		<div className="row">


			<div className="col-md-12 my-auto">


				<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>


				<div className="col-md-12 mt-4 text-center">

						<button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img src="/images/arrow.png"/></span></button>

					</div>

			</div>


		</div>

	  </div>

 </section>

         </>
  );
}