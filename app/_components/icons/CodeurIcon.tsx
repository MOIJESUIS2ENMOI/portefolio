import { ComponentPropsWithoutRef } from "react"

export const CodeurIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 256 250"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <g>
                <path d="M32.049,159.052c-21.278,-23.244 -21.21,-103 -0.019,-126.06c21.196,-23.054 106.684,-23.268 127.957,-0.029c21.279,23.244 21.172,102.996 -0.019,126.05c-21.196,23.055 -106.645,23.278 -127.919,0.039Z" fill="currentColor" />
                <path d="M98.673,45.259c10.203,0.078 20.368,3.265 28.737,9.109c5.158,3.338 6.735,9.946 2.039,15.011c-0.846,0.852 -1.693,1.703 -2.54,2.555c-1.713,1.722 -4.214,4.218 -4.214,4.218c-3.484,3.139 -8.291,3.455 -12.417,0.755c-10.506,-6.886 -25.166,-3.251 -31.706,8.5c-6.754,12.126 -0.2,27.123 11.984,31.672c6.671,2.491 14.18,1.689 20.418,-2.418c1.703,-1.119 7.357,-3.066 11.687,1.216c2.054,2.029 4.122,4.078 6,5.951c2.267,2.258 3.255,4.141 3.469,6.705c0.428,5.114 -2.491,8.467 -9.279,11.961c-18.169,9.975 -40.936,8.369 -58.098,-6.525c-17.279,-14.695 -22.349,-41.258 -11.245,-61.607c9.045,-16.568 25.614,-26.86 43.924,-27.093c0.413,-0.005 0.827,-0.01 1.241,-0.01Z"/>
            </g>
        </svg>
    );
};