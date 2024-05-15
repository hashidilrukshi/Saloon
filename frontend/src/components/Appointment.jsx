import React, { useEffect } from "react";

const Appointment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className='appointment' id='appointment'>
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ghashinika2002/appointment?primary_color=ff00e0"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
    </section>
  );
};

export default Appointment;
