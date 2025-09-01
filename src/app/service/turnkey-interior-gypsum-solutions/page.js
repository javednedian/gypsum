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

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Turnkey Interior Gypsum Solutions</h5>

				<p className="mt-4 text-white">Home/<span>Turnkey Interior Gypsum Solutions</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Turnkey Interior Gypsum Solutions</h2>
				<h3 className="sub_heading">1. Complete Gypsum Interior Solutions Tailored to Your Needs</h3>

				<p className="my-4">When it comes to transforming spaces with elegance, durability, and functionality, nothing matches the expertise of our turnkey interior gypsum solutions Dubai. We provide complete gypsum interior solutions Dubai that include everything from turnkey gypsum ceiling Dubai installations to wall claddings, partitions, decorative mouldings, and finishing services. By choosing us, clients receive a one-stop solution that eliminates the need to coordinate with multiple contractors. Our team of specialists handles every stage, design, planning, material sourcing, installation, finishing, and handover, ensuring a seamless process. Whether it’s a luxury villa, corporate office, hotel, or retail outlet, our gypsum turnkey works are tailored to meet your design preferences, functionality requirements, and budget.</p>


			</div>
	    <div className="col-md-6 my-auto">

				<img src="/images/gypsum-11.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>

			</div>
    </div>

<h3 className="sub_heading">2. Professional Gypsum Turnkey Services for Residential & Commercial Projects</h3>

    <p className="my-4">As one of the most trusted gypsum interior contractors Dubai, we pride ourselves on delivering gypsum turnkey services Dubai for projects of all scales. For residential spaces, we create interiors that combine modern style with lasting quality, whether you need false ceilings with hidden lighting, wall panels, or decorative features that enhance your living space. For commercial projects, our gypsum turnkey fit-out Dubai services ensure a professional and functional environment that reflects your brand identity. From small offices to large corporate headquarters, we specialize in delivering projects on time, within budget, and without compromising on quality. Our turnkey gypsum installation Dubai process is backed by skilled craftsmen and advanced tools, allowing us to complete even the most complex designs with precision.</p>

    <h4 className="sub_heading">3. Why Choose Us, The Best Gypsum Interior Solutions in Dubai</h4>
    <p className="my-4">Choosing the right gypsum turnkey company Dubai can make the difference between an average finish and an exceptional one. With years of expertise and a portfolio of successful projects, we are recognized for providing the best gypsum interior solutions Dubai. Our strength lies in our attention to detail, use of premium materials, and ability to translate design concepts into reality. We don’t just install ceilings and partitions,we create complete interiors that elevate the look and feel of any property. From gypsum turnkey installation Dubai to final paint finishes, we manage everything with professionalism and care. Our goal is to deliver interiors that are visually stunning, durable, and fully aligned with your lifestyle or business needs.</p>
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img src="/images/arrow.png"/></span></button></Link>


					</div>
</section>

</>
  );
}
