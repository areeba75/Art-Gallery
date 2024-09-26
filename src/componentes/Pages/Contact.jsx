import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div>
        <p className="text-[white] text-[22px] m-[2.4rem]">
          <Link className="text-[white]" to="/">
            HomePage
          </Link>
          &nbsp;/&nbsp;Contact
        </p>
        <div className="px-10 xl:w-[800px] m-auto">
          <p>
            For questions, inquiries and commissions please send an email to
            camarenamart@gmail.com or call (480) 595-2671 and you will receive a
            response shortly. If you would like to get a custom size of any of
            our prints on canvas please include the size you would like as well
            as the name of the print.
          </p>
          <br />
          <br />
          <p>
            Our gallery is located at 6220 E Cave Creek rd. Cave Creek, AZ
            85331, feel free to stop by and visit our showroom!{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
