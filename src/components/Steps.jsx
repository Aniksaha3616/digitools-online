import user from "../assets/products/user.png";
import pkg from "../assets/products/package.png";
import rkt from "../assets/products/rocket.png";

export default function Steps() {
  const steps = [
    {
      id: "01",
      img: user,
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      img: pkg,
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: "03",
      img: rkt,
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {step.id}
              </span>

              {/* Icon Image */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-100">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="mt-4 font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
