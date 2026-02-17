import type { SimpleIcon } from 'simple-icons';

type IconProps = {
    icon: SimpleIcon;
    size?: number;
    className?: string;
    color?: string;
};

export const BrandIcon = ({ icon, size = 24, className, color }: IconProps) => {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={className}
            aria-label='Icon'
            fill={color || 'currentColor'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{icon.title}</title>
            <path d={icon.path} />
        </svg>
    );
};