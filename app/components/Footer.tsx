import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <div className="">
      <div className="bg-black">
        <footer className="text-white body-font">
          <div className="px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left justify-between cursor-pointer -mb-20 px-20">
              <div className="px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
                  Exclusive
                </h2>
                <nav className="list-none font-thin mb-10">
                  <li>
                    <span className="text-white hover:font-extrabold">Subscribe</span>
                  </li>
                  <li className="mt-5">
                    <span className="text-white text-[12px]">Get 10% Offer on your first order</span>
                  </li>
                  <li className="w-auto flex items-center mt-2 bg-black text-white h-8 border-[0.3px] p-1 text-sm border-white">
                    <input type="text" placeholder="Enter Your Email" className="bg-black w-32" />
                    <MdKeyboardDoubleArrowRight className="text-3xl font-thin" />
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Support</h2>
                <nav className="list-none mb-10">
                  <li>
                    <span className="text-white hover:font-extrabold">Lorem Consequuntur?</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Second Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Third Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Fourth Link</span>
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Account</h2>
                <nav className="list-none mb-10">
                  <li>
                    <span className="text-white hover:font-extrabold">First Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Second Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Third Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Fourth Link</span>
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Quick Links</h2>
                <nav className="list-none mb-10">
                  <li>
                    <span className="text-white hover:font-extrabold">First Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Second Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Third Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Fourth Link</span>
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Download Apps</h2>
                <nav className="list-none mb-10">
                  <li>
                    <span className="text-white hover:font-extrabold">First Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Second Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Third Link</span>
                  </li>
                  <li>
                    <span className="text-white hover:font-extrabold">Fourth Link</span>
                  </li>
                </nav>

                <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                  <div className="text-white">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-white">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </div>
                  <div className="ml-3 text-white">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
