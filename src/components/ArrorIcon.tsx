import React, { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement>{}

export const ArrorIcon = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={11} height={14} {...props}>
            <path fill="none" stroke="#FFF" strokeWidth={3} d="M2 1l6 6-6 6" />
        </svg>
    )
}
