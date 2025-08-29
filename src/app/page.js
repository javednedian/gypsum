"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script';
import { useEffect } from "react";

export default function Home() {

	return (
		<>
			<section className="banner_sec">

				<div className="container my-5">

					<div className="row">

						<div className="col-md-10 mt-4 text-center mx-auto">

							<h5 className="banner_heading2">Innovative gypsum solutions that breathe life into every</h5>
							<h1 className="mb-3 banner_heading" style={{color: "#ffffff"}}>Wall</h1>

							<hr className="b_hr"></hr>

							<h5 style={{color: "#ffffff"}}>crafted with care, delivered with excellence.</h5>

							<Link className="mt-4 main_btn2 btn btn-primary btn-lg" href="/contact-us">Book Your Consultation</Link>

						</div>

					</div>

				</div>

			</section>

			<section className="key_sec py-4">

				<div className="container my-5">

					<div className="row">

						<div className="col-md-3 col-6 mb-4">


							<div className="service_box">

								<div className="key_box">

									<div className="icon_box">

										<img src="/images/paint-brush.png"/>

									</div>

									<div className="icon_label">Health-Safe Gypsums</div>

								</div>

								<hr className="my-4"></hr>

								<p>We use low-VOC, eco-friendly gypsums that are safe for families, pets, and sensitive environments.</p>

								<span className="arrow_btn"><img src="/images/arrow.png"/></span>

							</div>

						</div>

						<div className="col-md-3 col-6 mb-4">

							<div className="service_box">

								<div className="key_box">

									<div className="icon_box">

										<img src="/images/paint-brush.png"/>

									</div>

									<div className="icon_label">Minimal Disruption</div>

								</div>

								<hr className="my-4"></hr>

								<p>Our team ensures clean, organized work with minimal impact on your daily routine.</p>

								<span className="arrow_btn"><img src="/images/arrow.png"/></span>

							</div>

						</div>

						<div className="col-md-3 col-6 mb-4">

							<div className="service_box">

								<div className="key_box">

									<div className="icon_box">

										<img src="/images/paint-brush.png"/>

									</div>

									<div className="icon_label">Color Consultation</div>

								</div>

								<hr className="my-4"></hr>

								<p>We help you choose the right shades to match your lighting, purpose, and style.</p>

								<span className="arrow_btn"><img src="/images/arrow.png"/></span>

							</div>

						</div>

						<div className="col-md-3 col-6 mb-4">

							<div className="service_box">

								<div className="key_box">

									<div className="icon_box">

										<img src="/images/paint-brush.png"/>

									</div>

									<div className="icon_label">Flawless Finish</div>

								</div>

								<hr className="my-4"></hr>

								<p>Every surface is expertly prepped for a smooth, long-lasting, professional result.</p>

								<span className="arrow_btn"><img src="/images/arrow.png"/></span>

							</div>

						</div>

					</div>

				</div>

			</section>

			<section className="feature_sec py-4">

				<div className="container my-5">

					<div className="row">

						<div className="col-md-6 my-auto">

							<img src="/images/about2.jpg" className="w-100" style={{borderRadius: "30px" , height: "460px"}}/>

						</div>

						<div className="col-md-6 my-auto">

							<h5 className="sub_heading">About Us</h5>

							<h2 className="main_heading">We design thoughtful, livable spaces.</h2>

							<p className="my-2">At [Company], we turn walls into statements. Our gypsum services are designed to enhance the beauty, comfort, and character of every space, whether residential, commercial, or industrial.</p>

							<p className="my-2">At [Company], we turn walls into statements. Our gypsum services are designed to enhance the beauty, comfort, and character of every space, whether residential, commercial, or industrial.</p>

							<p className="my-2">Our approach combines advanced gypsum technologies with premium materials and expert craftsmanship. We don’t just apply gypsum, we prepare, protect, and perfect every surface to ensure results that are smooth, durable, and visually stunning.</p>

							<p className="my-2">Clients choose us for our clean work ethic, honest communication, and ability to deliver consistently high-quality finishes, no matter the size or complexity of the job.</p>

						<Link href="/contact-us" className="btn btn-primary main_btn mt-3">
							Get in Touch
						<span className="arrow_btn3">
						<img src="/images/arrow.png"/>
						</span>
						</Link>

							{/* <div className="row mt-4">

								<div className="col-md-6 mb-4">

									<div className="fea_point">

										<div className="fea_count"><img src="/images/tick.png"/></div>
										<div className="fea_label">Latest technologies</div>

									</div>

								</div>

								<div className="col-md-6 mb-4">

									<div className="fea_point">

										<div className="fea_count"><img src="images/tick.png"></div>
										<div className="fea_label">5 Years Warranty</div>

									</div>

								</div>

								<div className="col-md-6 mb-4">

									<div className="fea_point">

										<div className="fea_count"><img src="images/tick.png"></div>
										<div className="fea_label">High-Quality Designs</div>

									</div>

								</div>

								<div className="col-md-6 mb-4">

									<div className="fea_point">

										<div className="fea_count"><img src="images/tick.png"></div>
										<div className="fea_label">20 Years Work Experiences</div>

									</div>

								</div>

							</div>
							*/}



						</div>

					</div>

				</div>

			</section>

			<section className="key_sec py-4" style={{backgroundColor: "#29456d"}}>

				<div className="container my-5">

					<div className="row">

						<div className="col-md-12 mb-5 text-center">

							<h5 className="sub_heading">Our Services</h5>

							<h2 className="main_heading mb-2" style={{color: "#ffffff"}}>What we offer for you</h2>

						</div>

						<div className="react-owl-carousel carousel-1 service_car">
							<Swiper
								modules={[Navigation, Autoplay]}
								navigation
								autoplay={{ delay: 3000 }}
								spaceBetween={20}
								slidesPerView={1}
								breakpoints={{
								640: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								}}
							>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/backsplash-tiling-here-style-meets-everyday-practicality">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/kitchenBacksplash.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>

												</div>

												{/* <h6>01</h6> */}
												<div className="icon_label">Gypsum Ceiling Works</div>

											</div>

											<hr className="my-4"></hr>

											<p>Expertly crafted gypsum ceilings that enhance both style and function in any space.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}
										</div>

										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/kitchen-countertops-the-centerpiece-of-every-kitchen">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/Countertops.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}}/>


												</div>

												{/* <h6>02</h6> */}
												<div className="icon_label">Partition & Drywall Installation</div>

											</div>

											<hr className="my-4"></hr>

											<p>Customized drywall and partition solutions for efficient and flexible space planning.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>
										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/custom-kitchen-design-and-installation">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

											<img src="/images/custom.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}} />
												</div>

												{/* <h6>03</h6> */}
												<div className="icon_label">Gypsum Wall Cladding & Panelling</div>

											</div>

											<hr className="my-4"></hr>

											<p>Elegant wall treatments that add texture, depth, and character to your interiors.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>

										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/smart-kitchen-solutions">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

											<img src="/images/smart.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}} />
												</div>

												{/* <h6>04</h6> */}
												<div className="icon_label">Cornices, Mouldings & Decorative Works</div>

											</div>

											<hr className="my-4"></hr>

											<p>Detailed decorative elements that bring sophistication and charm to every room.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>

										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/kitchen-appliance-installation-seamless-safe-and-professional">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

											<img src="/images/appliances.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}} />
												</div>

												{/* <h6>05</h6> */}
												<div className="icon_label">Gypsum Painting & Finishing</div>

											</div>

											<hr className="my-4"></hr>

											<p>Smooth, flawless finishes with professional painting for a polished final touch.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>

										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/cabinet-refacing-and-painting-a-fresh-look-without-the-full-renovation">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

											<img src="/images/Cabinets.jpg" style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}} />
												</div>

												{/* <h6>06</h6> */}
												<div className="icon_label">Repairs & Renovation</div>

											</div>

											<hr className="my-4"></hr>

											<p>Reliable repair and renovation services to restore and refresh your gypsum interiors.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>

										</Link>

									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="item mb-4">

										<Link href="/service/lighting-and-electrical-setup-illuminate-your-kitchen-elevate-your-experience">

										<div className="service_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

											<img src="/images/light.jpg"  style={{ width: "100%" , borderRadius: "30px" , marginBottom: "20px" , height: "231px"}} />
												</div>

												{/* <h6>07</h6> */}
												<div className="icon_label">Turnkey Interior Gypsum Solutions</div>

											</div>

											<hr className="my-4"></hr>

											<p>End-to-end gypsum interior solutions, delivered with precision and quality craftsmanship.</p>

											{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#29456d"}}><img src="/images/arrow.png"/></span> */}

										</div>

										</Link>

									</div>
								</SwiperSlide>



							</Swiper>

						</div>


						<div className="col-md-12 mt-4 text-center">

							<Link className="mt-4 main_btn2 btn btn-primary btn-lg" href="/contact-us">Book Consult</Link>

						</div>


					</div>

				</div>

			</section>

			{/* <section className="feature_sec">

				<div className="container-fluid my-5">

					<div className="row">

						<div className="marquee-container">
						<marquee behavior="scroll" direction="left" scrollamount="6">
							<span>Living Room</span>
							<span>Kitchen</span>
							<span>BedRoom</span>
							<span>Best Gallery</span>
							<span>Master Bedroom</span>

						</marquee>
						</div>

					</div>

				</div>

			</section>	   */}

			<section className="feature_sec py-5">

				<div className="container my-5">

					<div className="row">

						<div className="col-md-5 my-auto">

							<h5 className="sub_heading">What We do</h5>

							<h2 className="main_heading">Creating the Art of Stylish Living Through Gypsum</h2>

							<p className="main_para">At [Company], we bring walls to life with expert craftsmanship, premium finishes, and a deep understanding of how color transforms space. Whether it’s a residential refresh or a full commercial regypsum, our work blends aesthetics with durability, turning ordinary surfaces into expressions of style and comfort.</p>

							<p className="main_para">Let us help you reimagine your space, one perfect finish at a time.</p>


							<Link className="mt-4 main_btn btn btn-primary btn-lg mb-5" href="/contact-us">Request a Free Quote</Link>

						</div>


						<div className="col-md-7 my-auto text-center">

							<img src="/images/about3.jpg" className="w-100" style={{borderRadius: "30px" , height: "460px"}}/>

						</div>

					</div>

				</div>

			</section>
{/*
			<section className="key_sec py-4">

				<div className="container my-5">

					<div className="row">

						<div className="col-md-12 mb-5 text-center">

							<h5 className="sub_heading">Our Portfolio</h5>

							<h2 className="main_heading mb-2" style={{color: "#29456d"}}>What we offer for you</h2>

						</div>

						<div className="react-owl-carousel carousel-2">

							<Swiper
								modules={[Navigation, Autoplay]}
								navigation
								autoplay={{ delay: 3000 }}
								spaceBetween={20}
								slidesPerView={1}
								breakpoints={{
								640: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								}}
							>

								<SwiperSlide>
									<div className="item mb-4">

										<div className="custom-card">

										<img src="/images/service-05.jpg" alt=""/>

										<div className="card-hover-text">
											<h5 className="sub_heading" style={{lineHeight: "10px"}}>Bedroom</h5>
											<h3>Innovation</h3>
										</div>

										</div>

									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item mb-4">

										<div className="custom-card">

										<img src="/images/service-01.jpg" alt=""/>

										<div className="card-hover-text">
											<h5 className="sub_heading" style={{lineHeight: "10px"}}>Bedroom</h5>
											<h3>Innovation</h3>
										</div>

										</div>

									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item mb-4">

										<div className="custom-card">

										<img src="/images/service-03.jpg" alt=""/>

										<div className="card-hover-text">
											<h5 className="sub_heading" style={{lineHeight: "10px"}}>Bedroom</h5>
											<h3>Innovation</h3>
										</div>

										</div>

									</div>
								</SwiperSlide>
							</Swiper>
						</div>

					</div>

				</div>

			</section> */}

			<section className="key_sec mb-4" style={{borderBottom: "1px solid #dfdfdf"}}>

				<div className="container my-5">

					<div className="row">

						<div className="col-md-12 mb-5 text-center">

							<h5 className="sub_heading">How We Work</h5>

							<h2 className="main_heading mb-2" style={{color: "#29456d"}}>Our Process for Flawless, Stress-Free Gypsum</h2>

						</div>

						<div className="col-md-3 mb-5 text-center">

							<div className="icon_box m-auto" style={{backgroundColor: "#f6f6f6" , width: "65px"}}>

								<img src="/images/quality.png"/>

							</div>

							<h2 className="main_heading mb-2 mt-4" style={{color: "#29456d" , fontSize: "22px"}}>Meet & Consult</h2>

							<p className="main_para">We begin by understanding your vision, space, and goals with expert guidance on color, finish, and design.</p>

						</div>

						<div className="col-md-3 mb-5 text-center">

							<div className="icon_box m-auto" style={{backgroundColor: "#f6f6f6" , width: "65px"}}>

								<img src="/images/quality.png"/>

							</div>

							<h2 className="main_heading mb-2 mt-4" style={{color: "#29456d" , fontSize: "25px"}}>Finalize the Plan</h2>

							<p className="main_para">From surface assessment to material selection, we outline the layout, timeline, and process for your approval.</p>

						</div>

						<div className="col-md-3 mb-5 text-center">

							<div className="icon_box m-auto" style={{backgroundColor: "#f6f6f6" , width: "65px"}}>

								<img src="/images/quality.png"/>

							</div>

							<h2 className="main_heading mb-2 mt-4" style={{color: "#29456d" , fontSize: "22px"}}>Prep & Gypsum</h2>

							<p className="main_para">Our skilled team prepares every surface with care and applies premium finishes with precision and minimal disruption.</p>

						</div>

						<div className="col-md-3 mb-5 text-center">

							<div className="icon_box m-auto" style={{backgroundColor: "#f6f6f6" , width: "65px"}}>

								<img src="/images/quality.png"/>

							</div>

							<h2 className="main_heading mb-2 mt-4" style={{color: "#29456d" , fontSize: "22px"}}>Clean Delivery</h2>

							<p className="main_para">We hand over a polished space clean, on-time, and exactly as promised, with every detail checked and approved.</p>

						</div>


						<div className="col-md-12 mb-5 text-center">

							<p className="main_para"><span className="para_light">Hurry</span> Let’s make something great work together. Got a project in mind? <Link href="#" style={{color: "#bb9a65"}}>Got a project in mind?</Link></p>

						</div>



					</div>

				</div>

			</section>

			<section className="review_sec py-5 mb-5" style={{backgroundColor: "#29456d"}}>

				<div className="container my-5">

					<div className="row">

						<div className="col-md-5 my-auto">

							<h2 className="main_heading mb-2" style={{color: "#ffffff" , fontSize: "47px"}}>Hear from clients.</h2>

							<p className="main_para" style={{color: "#ffffff"}}>Real feedback from homeowners and businesses who trusted us to transform their spaces.</p>

							<p className="main_para" style={{color: "#ffffff"}} >Your space deserves the same care and craftsmanship.</p>

							<Link className="mt-4 main_btn2 btn btn-primary btn-lg mb-4" href="/contact-us"> Book Consult</Link>

						</div>


						<div className="col-md-7 pb-4 pb-sm-0 my-auto">

							<div className="react-owl-carousel carousel-3">

								<Swiper
									modules={[Navigation, Autoplay]}
									navigation
									autoplay={{ delay: 3000 }}
									spaceBetween={20}
									slidesPerView={1}
									breakpoints={{
									640: { slidesPerView: 1 },
									768: { slidesPerView: 1 },
									1024: { slidesPerView: 1 },
									}}
								>
									<SwiperSlide>
										<div className="item">

											<div className="service_box review_box pt-1 pb-1">

												<div className="key_box2 review_cont d-sm-flex d-block" style={{textAlign: "left"}}>

													<div className="service_img col-md-6 col-12">

														<img src="/images/reviewer.jpg" className="mb-0"/>

													</div>

													<div className="col-md-6 col-12 p-4 my-auto">

														<img src="/images/5star.png" style={{width: "100px"}} className="mb-2"/>

														<p className="main_para">“Exceptional attention to detail and clean work. The team was professional, friendly, and finished right on time. Highly recommend!”</p>

														<h6 className="sub_heading">Sarah K.</h6>
														<div className="">Homeowner</div>

													</div>

												</div>


											</div>

										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="item">

											<div className="service_box review_box pt-1 pb-1">

												<div className="key_box2 review_cont d-sm-flex d-block" style={{textAlign: "left"}}>

													<div className="service_img col-md-6 col-12">

														<img src="/images/reviewer.jpg" className="mb-0"/>

													</div>

													<div className="col-md-6 col-12 p-4 my-auto">

														<img src="/images/5star.png" style={{width: "100px"}} className="mb-2"/>

														<p className="main_para">“They helped us choose the right color scheme for our office and the result was perfect. Minimal disruption and very organized throughout.”</p>

														<h6 className="sub_heading">Imran A.</h6>
														<div className="">Business Owner</div>

													</div>

												</div>


											</div>

										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="item">

											<div className="service_box review_box pt-1 pb-1">

												<div className="key_box2 review_cont d-sm-flex d-block" style={{textAlign: "left"}}>

													<div className="service_img col-md-6 col-12">

														<img src="/images/reviewer.jpg" className="mb-0"/>

													</div>

													<div className="col-md-6 col-12 p-4 my-auto">

														<img src="/images/5star.png" style={{width: "100px"}} className="mb-2"/>

														<p className="main_para">“Our villa looks brand new! From surface prep to final coat, everything was done with care and quality.”</p>

														<h6 className="sub_heading">Fatima R.</h6>
														<div className="">Property Manager</div>

													</div>

												</div>


											</div>

										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="item">

											<div className="service_box review_box pt-1 pb-1">

												<div className="key_box2 review_cont d-sm-flex d-block" style={{textAlign: "left"}}>

													<div className="service_img col-md-6 col-12">

														<img src="/images/reviewer.jpg" className="mb-0"/>

													</div>

													<div className="col-md-6 col-12 p-4 my-auto">

														<img src="/images/5star.png" style={{width: "100px"}} className="mb-2"/>

														<p className="main_para">“Impressed by the finish and how well the team handled waterproofing and gypsum without leaving a mess. Will hire again.”</p>

														<h6 className="sub_heading">Daniel M.</h6>
														<div className="">Facility Supervisor</div>

													</div>

												</div>


											</div>

										</div>
									</SwiperSlide>
								</Swiper>

							</div>

						</div>

					</div>

				</div>

			</section>

			<section className="key_sec py-4">
				<div className="container my-5">
					<div className="row">
						<div className="col-md-12 mb-5 text-center">
							<h5 className="sub_heading">Our Blogs</h5>
							<h2 className="main_heading mb-2">Read Our Articles and News</h2>
						</div>

						<div className="react-owl-carousel carousel-1">

							<Swiper
								modules={[Navigation, Autoplay]}
								navigation
								autoplay={{ delay: 3000 }}
								spaceBetween={20}
								slidesPerView={1}
								breakpoints={{
								640: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								}}
							>
								<SwiperSlide>
									<div className="item mb-4">

										<div className="service_box blog_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/service-01.jpg"/>

													{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#f5f5f5"}}><img src="/images/arrow.png"/></span> */}

												</div>

												<div className="meta_date d-flex mb-0">
													<img src="/images/calendar.png" style={{width: "17px" , height: "20px" , marginRight: "7px"}}/>
													<p>May 25, 2025</p>
												</div>

												<div className="icon_label">Gypsum Smarter, Live Better</div>

											</div>


											<p className="mt-3">Expert tips and design insights to guide your next gypsum project.</p>


										</div>

									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item mb-4">

										<div className="service_box blog_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/service-03.jpg"/>

													{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#f5f5f5"}}><img src="/images/arrow.png"/></span> */}

												</div>

												<div className="meta_date d-flex mb-0">
													<img src="/images/calendar.png" style={{width: "17px" , height: "20px" , marginRight: "7px"}}/>
													<p>May 25, 2025</p>
												</div>

												<div className="icon_label">Inside the World of Walls</div>

											</div>


											<p className="mt-3">Trends, techniques, and everything in between your go-to gypsum knowledge hub.</p>


										</div>

									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item mb-4">

										<div className="service_box blog_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/service-05.jpg"/>

													{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#f5f5f5"}}><img src="/images/arrow.png"/></span> */}

												</div>

												<div className="meta_date d-flex mb-0">
													<img src="/images/calendar.png" style={{width: "17px" ,height: "20px" ,marginRight: "7px"}}/>
													<p>May 25, 2025</p>
												</div>

												<div className="icon_label">Color Your Space with Confidence</div>

											</div>


											<p className="mt-3">Inspiration and advice to help you choose the perfect finish for any room.</p>


										</div>

									</div>
								</SwiperSlide>

                                <SwiperSlide>
									<div className="item mb-4">

										<div className="service_box blog_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/service-05.jpg"/>

													{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#f5f5f5"}}><img src="/images/arrow.png"/></span> */}

												</div>

												<div className="meta_date d-flex mb-0">
													<img src="/images/calendar.png" style={{width: "17px" ,height: "20px" ,marginRight: "7px"}}/>
													<p>May 25, 2025</p>
												</div>

												<div className="icon_label">From Walls to Wow</div>

											</div>


											<p className="mt-3">Discover how the right gypsum can completely transform your home or business.</p>


										</div>

									</div>
								</SwiperSlide>
                                 <SwiperSlide>
									<div className="item mb-4">

										<div className="service_box blog_box pt-3 pb-4">

											<div className="key_box2" style={{textAlign: "left"}}>

												<div className="service_img">

													<img src="/images/service-05.jpg"/>

													{/* <span className="arrow_btn arrow_btn2" style={{backgroundColor: "#f5f5f5"}}><img src="/images/arrow.png"/></span> */}

												</div>

												<div className="meta_date d-flex mb-0">
													<img src="/images/calendar.png" style={{width: "17px" ,height: "20px" ,marginRight: "7px"}}/>
													<p>May 25, 2025</p>
												</div>

												<div className="icon_label">The Art of a Perfect Finish</div>

											</div>


											<p className="mt-3">Pro tips, industry trends, and behind-the-scenes project stories.</p>


										</div>

									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
