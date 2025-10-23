import {ReactNode} from "react";

interface AProps {
    children?: ReactNode,
    href: string,
    target: Target,
}

export enum Target {
    BLANK = '_blank',
    SELF = '_self',
    PARENT = '_parent',
    TOP = '_top',
    FRAMENAME = 'framename'
}

export function A({children, href, target}: AProps) {
    return (
        <>
            <a target={target} href={href}>
                {children}
            </a>
        </>
    );
}