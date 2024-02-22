import React from "react";
import "../index.css";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar className="" />
      {/* Image section */}
      <div className="text-black pl-[40px] bg-[url('/images/readingMan.jpg')] bg-cover bg-center h-screen">
        <div className="lg:pt-[200px] lg:text-[40px] block pr-[960px]">
          <p>Get Quality review and feedbacks from in-house professionals</p>
        </div>
        <button className="bg-blue-500 px-6 py-3 mt-10 text-white">
          Get reviewed today
        </button>
      </div>
      {/* Price section */}
      <div className="flex items-center justify-center bg-slate-100">
        <div className="bg-white w-[800px] h-screen pt-[50px] mt-[50px] mb-[50px]">
          <p className="text-[100px] text-black pl-[280px]">Plans</p>
          <div className="flex gap-[100px]">
            <div className="ml-[50px] outline outline-1 px-[20px] py-[20px]">
              <p className="text-[30px] text-slate-600">Monthly</p>
              <p>Review your documents monthly</p>
              <p className="text-[60px] text-yellow-500">N15,000</p>
              <button className="bg-blue-600 text-white px-9 mt-[50px] py-4 ml-[50px] rounded-[8px] shadow hover:bg-blue-500">
                Subscribe
              </button>
            </div>

            <div className="outline outline-1 px-[20px] py-[20px] mr-[50px]">
              <p className="text-[30px] text-slate-600">Yearly</p>
              <p className="block pr-[0px]">Review your documents monthly</p>
              <p className="text-[60px] text-yellow-500">N100,000</p>
              <button className="bg-blue-600 text-white px-9 mt-[50px] py-4 ml-[60px] rounded-[8px] shadow hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* About section */}
      </div>
      <div className="h-screen">
        <div className="">
          <div className="flex items-center justify-center">
            <p className="text-[100px] text-black">About</p>
          </div>
          <div className="block px-[50px] text-[28px]">
            <p>
              Welcome to BUREC, your trusted destination for professional
              document reviews. At BUREC, we understand the importance of
              accuracy, clarity, and precision in written content. Whether
              you're a student, researcher, professional, or business owner,
              we're here to help ensure that your documents meet the highest
              standards of quality. Our team of experienced reviewers consists
              of experts from various fields, including academia, business,
              journalism, and more. With their specialized knowledge and
              attention to detail, they meticulously examine every aspect of
              your document, providing valuable feedback and suggestions for
              improvement. From academic papers and research articles to
              business reports and marketing materials, we review a wide range
              of documents with the utmost care and expertise. Our goal is to
              help you enhance the effectiveness and impact of your written
              communication. At BUREC, we pride ourselves on our commitment to
              excellence, confidentiality, and customer satisfaction. Whether
              you're seeking proofreading, editing, or comprehensive feedback,
              you can trust us to deliver professional results that exceed your
              expectations. Join countless satisfied clients who have entrusted
              their documents to us and experienced the difference that our
              expert reviews can make. Let BUREC be your partner in achieving
              success through exceptional written content.
            </p>
          </div>
        </div>

    
      </div>
      <footer className="">

      </footer>
    </div>
  );
}
