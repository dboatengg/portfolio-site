"use client";


export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="32"
        height="32"
        className="
          stroke-[5]
          fill-none
          transition-all duration-300
          
          /* Light mode */
          stroke-gray-900 
          
          /* Dark mode */
          dark:stroke-gray-100
          hover:stroke-black dark:hover:stroke-white
        "
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          className="
            /* Light mode */
            stroke-gray-700 
            
            /* Dark mode */
            dark:stroke-neutral-700
          "
        />

        {/* Stylized “D” curve */}
        <path
          d="M35 25v50c20 0 30-10 30-25S55 25 35 25Z"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* “B” heartbeat line */}
        <path
          d="M65 40 h5 l3 5 l3 -10 l3 15"
          className="stroke-current"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="
          text-xl font-semibold tracking-tight
          transition-colors duration-300 
        
          /* Light Mode */
          text-gray-900 hover:text-black
        
          /* Dark Mode */
          dark:text-gray-100 dark:hover:text-white
        "
      >
        Dickson
      </span>
    </div>
  );
}
