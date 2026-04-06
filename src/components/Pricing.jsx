export default function Pricing() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          {/* Starter */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-gray-700">Starter</h3>
            <p className="text-sm text-gray-400">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">$0</h2>
            <p className="text-gray-500 text-sm">/month</p>

            <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="bg-gradient-to-o from-purple-600 to-purple-700 text-white p-6 rounded-xl shadow-lg relative">
            
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
              Most Popular
            </span>

            <h3 className="font-semibold">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">$29</h2>
            <p className="text-sm opacity-80">/month</p>

            <ul className="text-sm mt-4 space-y-2 text-left">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-6 w-full bg-white text-purple-600 py-2 rounded-full font-medium">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-gray-700">Enterprise</h3>
            <p className="text-sm text-gray-400">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mt-4">$99</h2>
            <p className="text-gray-500 text-sm">/month</p>

            <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}