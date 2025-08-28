import Image from "next/image";

export default function blogDetail() {
  return (
    <>
      
<section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Blog Name Here</h5>

				<p className="mt-4 text-white">Home <span>Blog Name Here</span></p>

			</div>

		</div>

	  </div>

 </section>




 <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">

			<div className="col-md-9 my-auto mx-auto">


				<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

			</div>


			<div className="col-md-9 my-auto mx-auto">

				<img src="images/blog-img.jpg" className="w-100" style={{borderRadius: "30px"}}/>

				<h2 className="main_heading mt-4">We design thoughtful, livable spaces.</h2>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>

				<p className="my-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

				<p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>


			</div>


		</div>

	  </div>

 </section>

         </>
  );
}