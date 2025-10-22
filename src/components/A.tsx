import {ReactNode} from "react";

enum Target {
    BLANK = '_blank',
    SELF = '_self',
    PARENT = '_parent',
    TOP = '_top',
    FRAMENAME = 'framename'
}

interface AProps {
    children?: ReactNode,
    href: string,
    target: Target,
}

function A({children, href, target}: AProps) {
    return (
        <>
            <a target={target} href={href}>
                {children}
            </a>
        </>
    );
}

export {A, Target};