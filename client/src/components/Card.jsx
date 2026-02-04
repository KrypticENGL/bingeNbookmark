import './Card.css';

const Card = ({
    children,
    variant = 'glass',
    padding = 'medium',
    hover = false,
    className = '',
    onClick,
    ...props
}) => {
    const classNames = [
        'card',
        `card--${variant}`,
        `card--padding-${padding}`,
        hover && 'card--hover',
        onClick && 'card--clickable',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export default Card;
